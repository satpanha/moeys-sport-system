'use client';

import { ProvinceTable } from '@/components/dashboard/tables/ProvinceTable';
import { ProvinceChart } from '@/components/dashboard/charts/ProvinceChart';
import { ProvinceCard } from '@/components/dashboard/cards/ProvinceCard';
import { mockProvinces } from '@/lib/mockData';

export default function ProvincesPage() {
  const topProvinces = mockProvinces.slice(0, 3);

  const totalAthletes = mockProvinces.reduce((sum, p) => sum + p.athleteCount, 0);
  const totalMedals = mockProvinces.reduce((sum, p) => sum + p.medals.total, 0);
  const avgMedalsPerProvince = (totalMedals / mockProvinces.length).toFixed(1);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          Province Dashboard
        </h2>
        <p className="text-muted-foreground mt-1">
          Performance statistics by province
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <div className="text-sm text-muted-foreground">Total Provinces</div>
          <div className="text-2xl font-bold text-foreground mt-1">
            {mockProvinces.length}
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <div className="text-sm text-muted-foreground">Total Athletes</div>
          <div className="text-2xl font-bold text-primary dark:text-blue-400 mt-1">
            {totalAthletes}
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <div className="text-sm text-muted-foreground">Total Medals</div>
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mt-1">
            {totalMedals}
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <div className="text-sm text-muted-foreground">Avg per Province</div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
            {avgMedalsPerProvince}
          </div>
        </div>
      </div>

      {/* Top Performers */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Top Performing Provinces
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topProvinces.map((province) => (
            <ProvinceCard key={province.id} province={province} />
          ))}
        </div>
      </div>

      {/* Chart */}
      <ProvinceChart provinces={mockProvinces} />

      {/* Full Rankings Table */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Complete Rankings
        </h3>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <ProvinceTable provinces={mockProvinces} />
        </div>
      </div>
    </div>
  );
}