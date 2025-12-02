
'use client';

import { memo } from 'react';
import { Province } from '@/types';

interface ProvinceChartProps {
  provinces: Province[];
  limit?: number;
}

export const ProvinceChart = memo<ProvinceChartProps>(({ provinces, limit = 8 }) => {
  const topProvinces = provinces.slice(0, limit);
  const maxMedals = Math.max(...topProvinces.map(p => p.medals.total));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Medal Distribution by Province
      </h3>
      
      <div className="space-y-4">
        {topProvinces.map((province) => (
          <div key={province.id}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {province.name}
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {province.medals.total}
              </span>
            </div>
            
            <div className="flex gap-1 h-8 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
              <div
                className="bg-yellow-500 flex items-center justify-center text-xs text-white font-semibold"
                style={{ width: `${(province.medals.gold / maxMedals) * 100}%` }}
              >
                {province.medals.gold > 0 && province.medals.gold}
              </div>
              <div
                className="bg-gray-400 flex items-center justify-center text-xs text-white font-semibold"
                style={{ width: `${(province.medals.silver / maxMedals) * 100}%` }}
              >
                {province.medals.silver > 0 && province.medals.silver}
              </div>
              <div
                className="bg-orange-600 flex items-center justify-center text-xs text-white font-semibold"
                style={{ width: `${(province.medals.bronze / maxMedals) * 100}%` }}
              >
                {province.medals.bronze > 0 && province.medals.bronze}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-yellow-500" />
          <span className="text-xs text-gray-600 dark:text-gray-400">Gold</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-gray-400" />
          <span className="text-xs text-gray-600 dark:text-gray-400">Silver</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-orange-600" />
          <span className="text-xs text-gray-600 dark:text-gray-400">Bronze</span>
        </div>
      </div>
    </div>
  );
});

ProvinceChart.displayName = 'ProvinceChart';