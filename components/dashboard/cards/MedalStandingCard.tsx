'use client';

import { memo } from 'react';
import { Province } from '@/types';

interface MedalStandingCardProps {
  provinces: Province[];
  limit?: number;
}

export const MedalStandingCard = memo<MedalStandingCardProps>(({ provinces, limit = 5 }) => {
  const topProvinces = provinces.slice(0, limit);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Medal Standings
      </h3>
      <div className="space-y-3">
        {topProvinces.map((province, index) => (
          <div
            key={province.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-sm">
              {index + 1}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-white">{province.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {province.athleteCount} athletes
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="flex items-center gap-1">
                <span className="text-yellow-500">🥇</span>
                <span className="font-semibold">{province.medals.gold}</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-gray-400">🥈</span>
                <span className="font-semibold">{province.medals.silver}</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-orange-600">🥉</span>
                <span className="font-semibold">{province.medals.bronze}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

MedalStandingCard.displayName = 'MedalStandingCard';