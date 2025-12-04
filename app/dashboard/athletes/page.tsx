"use client";

import { useState, useMemo } from 'react';
import { AthletesTable } from '@/components/dashboard/tables/AthletesTable';
import { SearchBar } from '@/components/common/SearchBar';
import { Pagination } from '@/components/common/Pagination';
import RegistrationForm from '@/components/registrationForm';
import { useAthletes } from '@/src/hooks/useAthletes';
import { mockProvinces } from '@/lib/mockData';

export default function AthletesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [provinceFilter, setProvinceFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showForm, setShowForm] = useState(false);
  const { athletes = [], loading, total, refetch } = useAthletes();

  // Filter and search
  const filteredAthletes = useMemo(() => {
    return athletes.filter((athlete) => {
      const matchesSearch = 
        athlete.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        athlete.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        athlete.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || athlete.status === statusFilter;
      const matchesProvince = provinceFilter === 'all' || athlete.province === provinceFilter;
      return matchesSearch && matchesStatus && matchesProvince;
    });
  }, [searchTerm, statusFilter, provinceFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredAthletes.length / pageSize);
  const paginatedAthletes = filteredAthletes.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="p-6 space-y-6">
      {!showForm ? (
        <>
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Athletes Management
              </h2>
              <p className="text-muted-foreground mt-1">
                Manage athlete registrations and profiles
              </p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors"
            >
              <span className="text-xl">+</span>
              Register Athlete
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-card rounded-lg shadow-sm border border-border p-4">
              <div className="text-sm text-muted-foreground">Total Athletes</div>
              <div className="text-2xl font-bold text-foreground mt-1">
                {total}
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-sm border border-border p-4">
              <div className="text-sm text-muted-foreground">Approved</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
                {athletes.filter(a => a.status === 'approved').length}
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-sm border border-border p-4">
              <div className="text-sm text-muted-foreground">Pending</div>
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mt-1">
                {athletes.filter(a => a.status === 'pending').length}
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-sm border border-border p-4">
              <div className="text-sm text-muted-foreground">Rejected</div>
              <div className="text-2xl font-bold text-destructive mt-1">
                {athletes.filter(a => a.status === 'rejected').length}
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <SearchBar
                  value={searchTerm}
                  onChange={setSearchTerm}
                  placeholder="Search athletes by name or email..."
                />
              </div>

              <div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="approved">Approved</option>
                  <option value="pending">Pending</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div>
                <select
                  value={provinceFilter}
                  onChange={(e) => setProvinceFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Provinces</option>
                  {mockProvinces.map(province => (
                    <option key={province.id} value={province.name}>{province.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
            <AthletesTable athletes={paginatedAthletes} />

            <Pagination
              pagination={{
                currentPage,
                pageSize,
                totalItems: filteredAthletes.length,
                totalPages
              }}
              onPageChange={setCurrentPage}
              onPageSizeChange={setPageSize}
            />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors"
          >
            <span className="text-xl">←</span>
            Back to Athletes
          </button>
        </div>
      )}

      {/* Registration Form */}
      {showForm && (
        <div className="bg-card rounded-xl shadow-sm border border-border p-8">
          <RegistrationForm registrationType="athletes" />
        </div>
      )}
    </div>
  );
}