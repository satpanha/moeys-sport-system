'use client';

import { useState, useMemo } from 'react';
import { MedalTable } from '@/components/dashboard/tables/MedalTable';
import { SearchBar } from '@/components/common/SearchBar';
import { Pagination } from '@/components/common/Pagination';
import { mockMedals, mockProvinces, mockSports } from '@/lib/mockData';

export default function MedalsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [medalTypeFilter, setMedalTypeFilter] = useState<string>('all');
  const [provinceFilter, setProvinceFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Filter and search
  const filteredMedals = useMemo(() => {
    return mockMedals.filter((medal) => {
      const matchesSearch = 
        medal.athleteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        medal.sportName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        medal.event.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMedalType = medalTypeFilter === 'all' || medal.medalType === medalTypeFilter;
      const matchesProvince = provinceFilter === 'all' || medal.province === provinceFilter;
      return matchesSearch && matchesMedalType && matchesProvince;
    });
  }, [searchTerm, medalTypeFilter, provinceFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredMedals.length / pageSize);
  const paginatedMedals = filteredMedals.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalGold = mockMedals.filter(m => m.medalType === 'gold').length;
  const totalSilver = mockMedals.filter(m => m.medalType === 'silver').length;
  const totalBronze = mockMedals.filter(m => m.medalType === 'bronze').length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Medal Management
          </h2>
          <p className="text-muted-foreground mt-1">
            Track and manage medal awards
          </p>
        </div>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors">
          <span className="text-xl">+</span>
          Assign Medal
        </button>
      </div>

      {/* Medal Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Medals</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {mockMedals.length}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥇</span>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Gold</div>
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {totalGold}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥈</span>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Silver</div>
              <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                {totalSilver}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥉</span>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Bronze</div>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {totalBronze}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl shadow-sm border border-border p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search by athlete, sport, or event..."
            />
          </div>

          <div>
            <select
              value={medalTypeFilter}
              onChange={(e) => setMedalTypeFilter(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring"
            >
              <option value="all">All Medal Types</option>
              <option value="gold">🥇 Gold</option>
              <option value="silver">🥈 Silver</option>
              <option value="bronze">🥉 Bronze</option>
            </select>
          </div>

          <div>
            <select
              value={provinceFilter}
              onChange={(e) => setProvinceFilter(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring"
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
        <MedalTable medals={paginatedMedals} />

        <Pagination
          pagination={{
            currentPage,
            pageSize,
            totalItems: filteredMedals.length,
            totalPages
          }}
          onPageChange={setCurrentPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    </div>
  );
}
