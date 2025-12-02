'use client';

import { DashboardStatCard } from '@/components/dashboard/cards/DashboardStatCard';
import { MedalStandingCard } from '@/components/dashboard/cards/MedalStandingCard';
import { QuickActionCard } from '@/components/dashboard/cards/QuickActionCard';
import { RecentRegistrations } from '@/components/dashboard/recent/RecentRegistration';
import { ProvinceChart } from '@/components/dashboard/charts/ProvinceChart';
// import { useDashboard } from '@/hooks/useDashboard';
import { useDashboard } from '@/src/hooks/useDashboard';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

export default function DashboardPage() {
  const { stats, provinces, recentRegistrations, loading } = useDashboard();

  if (loading) {
    return (
      <div className="p-6">
        <LoadingSpinner />
      </div>
    );
  }

  const s = stats ?? {
    totalAthletes: 0,
    totalSports: 0,
    totalProvinces: 0,
    totalMedals: 0,
    activeCompetitions: 0,
    pendingRegistrations: 0,
  };

  const p = provinces ?? [];
  const recent = recentRegistrations ?? [];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          Dashboard Overview
        </h2>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's what's happening with your competitions.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardStatCard
          title="Total Athletes"
          value={s.totalAthletes}
          color="blue"
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardStatCard
          title="Total Sports"
          value={s.totalSports}
          color="green"
          trend={{ value: 8, isPositive: true }}
        />
        <DashboardStatCard
          title="Total Provinces"
          value={s.totalProvinces}
          color="purple"
        />
        <DashboardStatCard
          title="Total Medals"
          value={s.totalMedals}
          color="orange"
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - 2 spans */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Registrations */}
          <RecentRegistrations registrations={recent} />

          {/* Medal Chart */}
          <ProvinceChart provinces={p} />
        </div>

        {/* Right Column - 1 span */}
        <div className="space-y-6">
          {/* Medal Standings */}
          <MedalStandingCard provinces={p} limit={5} />

          {/* Quick Actions */}
          <QuickActionCard />
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Competitions</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {s.activeCompetitions}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Registrations</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {s.pendingRegistrations}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completion Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                87%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}