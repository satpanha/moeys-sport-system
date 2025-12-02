'use client';

import { memo } from 'react';
import { Province } from '@/types';

interface ProvinceCardProps {
  province: Province;
}

export const ProvinceCard = memo<ProvinceCardProps>(({ province }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {province.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Rank #{province.rank}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Athletes</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {province.athleteCount}
          </span>
        </div>

        <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Medals</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span>🥇</span>
              <span className="font-semibold">{province.medals.gold}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🥈</span>
              <span className="font-semibold">{province.medals.silver}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🥉</span>
              <span className="font-semibold">{province.medals.bronze}</span>
            </div>
          </div>
          <div className="mt-2 text-sm">
            <span className="text-gray-600 dark:text-gray-400">Total: </span>
            <span className="font-bold text-primary dark:text-blue-400">
              {province.medals.total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

ProvinceCard.displayName = 'ProvinceCard';