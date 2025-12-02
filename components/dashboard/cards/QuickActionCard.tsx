'use client';

import { memo } from 'react';
import Link from 'next/link';

interface QuickAction {
  title: string;
  description: string;
  href: string;
  color: string;
}

const quickActions: QuickAction[] = [
  {
    title: 'Add Athlete',
    description: 'Register new athlete',
    href: '/dashboard/athletes/register',
    color: 'blue'
  },
  {
    title: 'Add Sport',
    description: 'Create new sport event',
    href: '/dashboard/sports',
    color: 'green'
  },
  {
    title: 'Assign Medal',
    description: 'Award medals to athletes',
    href: '/dashboard/medals',
    color: 'yellow'
  },
  {
    title: 'View Reports',
    description: 'Generate statistics',
    href: '/dashboard/provinces',
    color: 'purple'
  }
];

export const QuickActionCard = memo(() => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all group"
          >
            <p className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {action.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {action.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
});

QuickActionCard.displayName = 'QuickActionCard';
