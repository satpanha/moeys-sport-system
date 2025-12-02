
'use client';

import { memo } from 'react';
import Link from 'next/link';
import { RecentRegistration } from '@/types';

interface RecentRegistrationsProps {
  registrations: RecentRegistration[];
}

export const RecentRegistrations = memo<RecentRegistrationsProps>(({ registrations }) => {
  const getStatusColor = (status: RecentRegistration['status']) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Registrations
        </h3>
        <Link
          href="/dashboard/athletes"
          className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View all →
        </Link>
      </div>

      <div className="space-y-3">
        {registrations.map((reg) => (
          <div
            key={reg.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-medium text-gray-900 dark:text-white">
                  {reg.athleteName}
                </p>
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getStatusColor(reg.status)}`}>
                  {reg.status}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-1 text-xs text-gray-500 dark:text-gray-400">
                <span>{reg.sport}</span>
                <span>{reg.province}</span>
                <span>{new Date(reg.registrationDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

RecentRegistrations.displayName = 'RecentRegistrations';