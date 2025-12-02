"use client";

import { useState, useMemo } from "react";
import { SportsTable } from "@/components/dashboard/tables/SportsTable";
import { AddSportModal } from "@/components/dashboard/modals/AddSportModal";
import { SearchBar } from "@/components/common/SearchBar";
import { Pagination } from "@/components/common/Pagination";
import { mockSports } from "@/lib/mockData";
import { Sport } from "@/types";

export default function SportsPage() {
  const [sports, setSports] = useState(mockSports);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSport, setEditingSport] = useState<Sport | undefined>();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Filter and search
  const filteredSports = useMemo(() => {
    return sports.filter((sport) => {
      const matchesSearch =
        sport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sport.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || sport.status === statusFilter;
      const matchesCategory =
        categoryFilter === "all" || sport.category === categoryFilter;
      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [sports, searchTerm, statusFilter, categoryFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredSports.length / pageSize);
  const paginatedSports = filteredSports.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleAddSport = () => {
    setEditingSport(undefined);
    setIsModalOpen(true);
  };

  const handleEditSport = (sport: Sport) => {
    setEditingSport(sport);
    setIsModalOpen(true);
  };

  const handleDeleteSport = (sportId: string) => {
    if (confirm("Are you sure you want to delete this sport?")) {
      setSports(sports.filter((s) => s.id !== sportId));
    }
  };

  const handleSaveSport = (sportData: Partial<Sport>) => {
    if (editingSport) {
      // Update existing
      setSports(
        sports.map((s) =>
          s.id === editingSport.id ? { ...s, ...sportData } : s
        )
      );
    } else {
      // Add new
      const newSport: Sport = {
        ...(sportData as Sport),
        id: Date.now().toString(),
        currentParticipants: 0,
        icon: "football",
      };
      setSports([...sports, newSport]);
    }
  };

  const categories = Array.from(new Set(mockSports.map((s) => s.category)));

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
        <h2 className="text-2xl font-bold text-foreground">
          Sports Management
        </h2>
        <p className="text-muted-foreground mt-1">
          Manage all sports and competitions
        </p>
        </div>
        <button
          onClick={handleAddSport}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors"
        >
          <span className="text-xl">+</span>
          Add Sport
        </button>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl shadow-sm border border-border p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search sports by name or category..."
            />
          </div>

          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <div className="text-sm text-muted-foreground">
            Total Sports
          </div>
          <div className="text-2xl font-bold text-foreground mt-1">
            {sports.length}
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <div className="text-sm text-muted-foreground">
            Ongoing
          </div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
            {sports.filter((s) => s.status === "ongoing").length}
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <div className="text-sm text-muted-foreground">
            Upcoming
          </div>
          <div className="text-2xl font-bold text-yellow-600 dark:text-blue-400 mt-1">
            {sports.filter((s) => s.status === "upcoming").length}
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <div className="text-sm text-muted-foreground">
            Completed
          </div>
          <div className="text-2xl font-bold text-gray-600 dark:text-gray-400 mt-1">
            {sports.filter((s) => s.status === "completed").length}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <SportsTable
          sports={paginatedSports}
          onEdit={handleEditSport}
          onDelete={handleDeleteSport}
        />

        <Pagination
          pagination={{
            currentPage,
            pageSize,
            totalItems: filteredSports.length,
            totalPages,
          }}
          onPageChange={setCurrentPage}
          onPageSizeChange={setPageSize}
        />
      </div>

      {/* Add/Edit Modal */}
      <AddSportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveSport}
        sport={editingSport}
      />
    </div>
  );
}
