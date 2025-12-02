"use client";

import { memo, useState } from "react";
import { Sport } from "@/types";

interface SportsTableProps {
  sports: Sport[];
  onEdit?: (sport: Sport) => void;
  onDelete?: (sportId: string) => void;
}

export const SportsTable = memo<SportsTableProps>(
  ({ sports, onEdit, onDelete }) => {
    const [sortKey, setSortKey] = useState<keyof Sport>("name");
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

    const handleSort = (key: keyof Sport) => {
      if (sortKey === key) {
        setSortDir(sortDir === "asc" ? "desc" : "asc");
      } else {
        setSortKey(key);
        setSortDir("asc");
      }
    };

    const sortedSports = [...sports].sort((a, b) => {
      const aVal = a[sortKey] ?? "";
      const bVal = b[sortKey] ?? "";
      const multiplier = sortDir === "asc" ? 1 : -1;

      if (aVal < bVal) return -1 * multiplier;
      if (aVal > bVal) return 1 * multiplier;
      return 0;
    });

    const getStatusColor = (status: Sport["status"]) => {
      switch (status) {
        case "ongoing":
          return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
        case "upcoming":
          return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
        case "completed":
          return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };

    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleSort("name")}
              >
                Sport {sortKey === "name" && (sortDir === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleSort("category")}
              >
                Category{" "}
                {sortKey === "category" && (sortDir === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Participants
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Venue
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleSort("status")}
              >
                Status {sortKey === "status" && (sortDir === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {sortedSports.map((sport) => (
              <tr
                key={sport.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {sport.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {sport.startDate} - {sport.endDate}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {sport.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="text-gray-900 dark:text-white">
                    {sport.currentParticipants} / {sport.maxParticipants}
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 mt-1">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{
                        width: `${
                          (sport.currentParticipants / sport.maxParticipants) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                  {sport.venue}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      sport.status
                    )}`}
                  >
                    {sport.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => onEdit?.(sport)}
                    className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete?.(sport.id)}
                    className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
);

SportsTable.displayName = "SportsTable";
