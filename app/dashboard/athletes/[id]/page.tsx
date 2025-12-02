
'use client';

import { useRouter } from 'next/navigation';
import { mockAthletes } from '@/lib/mockData';

export default function AthleteDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const athlete = mockAthletes.find(a => a.id === params.id);

  if (!athlete) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 dark:text-gray-400">Athlete not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      >
        ← Back to Athletes
      </button>

      {/* Athlete Profile */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-3xl font-bold">
            {athlete.firstName[0]}{athlete.lastName[0]}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {athlete.firstName} {athlete.lastName}
            </h2>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span>📍 {athlete.province}</span>
              <span>📧 {athlete.email}</span>
              <span>📞 {athlete.phone}</span>
            </div>
            <div className="mt-4">
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                athlete.status === 'approved' ? 'bg-green-100 text-green-800' :
                athlete.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {athlete.status}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Date of Birth</p>
            <p className="font-semibold">{athlete.dateOfBirth}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Gender</p>
            <p className="font-semibold capitalize">{athlete.gender}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Registration Date</p>
            <p className="font-semibold">{athlete.registrationDate}</p>
          </div>
        </div>
      </div>

      {/* Sports & Medals */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Sports</h3>
          <div className="space-y-2">
            {athlete.sports.map((sport, idx) => (
              <div key={idx} className="px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded">
                {sport}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Medals</h3>
          {athlete.medals && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">🥇 Gold</span>
                <span className="text-2xl font-bold">{athlete.medals.gold}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">🥈 Silver</span>
                <span className="text-2xl font-bold">{athlete.medals.silver}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">🥉 Bronze</span>
                <span className="text-2xl font-bold">{athlete.medals.bronze}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}