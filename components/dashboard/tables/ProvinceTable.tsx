'use client';

import { memo } from 'react';
import { Province } from '@/types';

interface ProvinceTableProps {
  provinces: Province[];
}

export const ProvinceTable = memo<ProvinceTableProps>(({ provinces }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Rank
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Province
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              🥇 Gold
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              🥈 Silver
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              🥉 Bronze
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Athletes
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {provinces.map((province) => (
            <tr
              key={province.id}
              className={`hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                province.rank === 1 ? 'bg-yellow-50 dark:bg-yellow-900/10' : ''
              }`}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 font-bold">
                  {province.rank}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🗺️</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {province.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {province.code}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="font-semibold text-lg text-yellow-600 dark:text-yellow-400">
                  {province.medals.gold}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="font-semibold text-lg text-gray-600 dark:text-gray-400">
                  {province.medals.silver}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="font-semibold text-lg text-orange-600 dark:text-orange-400">
                  {province.medals.bronze}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="font-bold text-xl text-blue-600 dark:text-blue-400">
                  {province.medals.total}
                </span>
              </td>
              <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
                {province.athleteCount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

ProvinceTable.displayName = 'ProvinceTable';
