import { Athlete, Sport, Medal, Province, DashboardStats, RecentRegistration } from '@/types';

// ============================================
// DASHBOARD STATS
// ============================================

export const mockDashboardStats: DashboardStats = {
  totalAthletes: 1248,
  totalSports: 28,
  totalProvinces: 25,
  totalMedals: 342,
  activeCompetitions: 12,
  pendingRegistrations: 43
};

// ============================================
// PROVINCES
// ============================================

export const mockProvinces: Province[] = [
  { id: '1', name: 'Phnom Penh', code: 'PP', athleteCount: 245, medals: { gold: 45, silver: 38, bronze: 32, total: 115 }, rank: 1 },
  { id: '2', name: 'Siem Reap', code: 'SR', athleteCount: 178, medals: { gold: 32, silver: 28, bronze: 35, total: 95 }, rank: 2 },
  { id: '3', name: 'Battambang', code: 'BB', athleteCount: 156, medals: { gold: 28, silver: 30, bronze: 28, total: 86 }, rank: 3 },
  { id: '4', name: 'Kandal', code: 'KD', athleteCount: 134, medals: { gold: 22, silver: 25, bronze: 30, total: 77 }, rank: 4 },
  { id: '5', name: 'Kampong Cham', code: 'KC', athleteCount: 122, medals: { gold: 18, silver: 22, bronze: 25, total: 65 }, rank: 5 },
  { id: '6', name: 'Prey Veng', code: 'PV', athleteCount: 98, medals: { gold: 15, silver: 18, bronze: 20, total: 53 }, rank: 6 },
  { id: '7', name: 'Kampong Speu', code: 'KS', athleteCount: 87, medals: { gold: 12, silver: 15, bronze: 18, total: 45 }, rank: 7 },
  { id: '8', name: 'Kampong Thom', code: 'KT', athleteCount: 76, medals: { gold: 10, silver: 12, bronze: 15, total: 37 }, rank: 8 },
];

// ============================================
// SPORTS
// ============================================

export const mockSports: Sport[] = [
  { id: '1', name: 'Football', category: 'Team Sports', description: '11v11 outdoor football', maxParticipants: 22, currentParticipants: 220, startDate: '2025-01-15', endDate: '2025-01-25', venue: 'National Stadium', status: 'ongoing', icon: 'football' },
  { id: '2', name: 'Basketball', category: 'Team Sports', description: '5v5 indoor basketball', maxParticipants: 12, currentParticipants: 144, startDate: '2025-01-20', endDate: '2025-01-28', venue: 'Sports Complex A', status: 'upcoming', icon: 'basketball' },
  { id: '3', name: 'Swimming', category: 'Aquatics', description: 'Olympic-style swimming events', maxParticipants: 8, currentParticipants: 96, startDate: '2025-01-10', endDate: '2025-01-18', venue: 'Aquatic Center', status: 'ongoing', icon: 'swimming' },
  { id: '4', name: 'Athletics', category: 'Track & Field', description: '100m, 200m, relay events', maxParticipants: 16, currentParticipants: 128, startDate: '2025-01-12', endDate: '2025-01-22', venue: 'Olympic Stadium', status: 'ongoing', icon: 'athletics' },
  { id: '5', name: 'Volleyball', category: 'Team Sports', description: '6v6 indoor volleyball', maxParticipants: 12, currentParticipants: 108, startDate: '2025-01-25', endDate: '2025-02-02', venue: 'Sports Hall B', status: 'upcoming', icon: 'volleyball' },
  { id: '6', name: 'Badminton', category: 'Racquet Sports', description: 'Singles and doubles events', maxParticipants: 4, currentParticipants: 64, startDate: '2025-01-08', endDate: '2025-01-15', venue: 'Indoor Arena', status: 'completed', icon: 'badminton' },
  { id: '7', name: 'Table Tennis', category: 'Racquet Sports', description: 'Singles, doubles, and team events', maxParticipants: 4, currentParticipants: 72, startDate: '2025-01-18', endDate: '2025-01-24', venue: 'Convention Center', status: 'upcoming', icon: 'table-tennis' },
  { id: '8', name: 'Boxing', category: 'Combat Sports', description: 'Multiple weight categories', maxParticipants: 2, currentParticipants: 48, startDate: '2025-01-22', endDate: '2025-01-30', venue: 'Fight Arena', status: 'upcoming', icon: 'boxing' },
];

// ============================================
// ATHLETES
// ============================================

export const mockAthletes: Athlete[] = [
  { id: '1', firstName: 'Sopheap', lastName: 'Chan', dateOfBirth: '2000-05-12', gender: 'male', province: 'Phnom Penh', sports: ['Football', 'Athletics'], email: 'sopheap.chan@email.com', phone: '+855 12 345 678', registrationDate: '2025-01-05', status: 'approved', medals: { gold: 2, silver: 1, bronze: 0 }, photoUrl: '/avatars/1.jpg' },
  { id: '2', firstName: 'Sreymom', lastName: 'Pich', dateOfBirth: '1998-08-23', gender: 'female', province: 'Siem Reap', sports: ['Swimming', 'Volleyball'], email: 'sreymom.pich@email.com', phone: '+855 17 234 567', registrationDate: '2025-01-04', status: 'approved', medals: { gold: 1, silver: 2, bronze: 1 }, photoUrl: '/avatars/2.jpg' },
  { id: '3', firstName: 'Ratanak', lastName: 'Sok', dateOfBirth: '2001-03-15', gender: 'male', province: 'Battambang', sports: ['Basketball', 'Volleyball'], email: 'ratanak.sok@email.com', phone: '+855 93 456 789', registrationDate: '2025-01-03', status: 'approved', medals: { gold: 0, silver: 1, bronze: 2 } },
  { id: '4', firstName: 'Channary', lastName: 'Lim', dateOfBirth: '1999-11-08', gender: 'female', province: 'Kandal', sports: ['Badminton', 'Table Tennis'], email: 'channary.lim@email.com', phone: '+855 70 123 456', registrationDate: '2025-01-07', status: 'pending', medals: { gold: 1, silver: 0, bronze: 1 } },
  { id: '5', firstName: 'Virak', lastName: 'Hem', dateOfBirth: '2002-02-20', gender: 'male', province: 'Kampong Cham', sports: ['Boxing', 'Athletics'], email: 'virak.hem@email.com', phone: '+855 88 234 567', registrationDate: '2025-01-08', status: 'pending', medals: { gold: 0, silver: 0, bronze: 0 } },
  { id: '6', firstName: 'Bopha', lastName: 'Nguon', dateOfBirth: '1997-07-14', gender: 'female', province: 'Phnom Penh', sports: ['Swimming', 'Athletics'], email: 'bopha.nguon@email.com', phone: '+855 12 987 654', registrationDate: '2025-01-02', status: 'approved', medals: { gold: 3, silver: 1, bronze: 0 } },
  { id: '7', firstName: 'Dara', lastName: 'Kong', dateOfBirth: '2000-09-30', gender: 'male', province: 'Siem Reap', sports: ['Football'], email: 'dara.kong@email.com', phone: '+855 96 555 444', registrationDate: '2025-01-06', status: 'approved', medals: { gold: 0, silver: 1, bronze: 1 } },
  { id: '8', firstName: 'Malis', lastName: 'Chea', dateOfBirth: '2001-12-05', gender: 'female', province: 'Battambang', sports: ['Volleyball', 'Basketball'], email: 'malis.chea@email.com', phone: '+855 77 888 999', registrationDate: '2025-01-09', status: 'rejected', medals: { gold: 0, silver: 0, bronze: 0 } },
];

// ============================================
// MEDALS
// ============================================

export const mockMedals: Medal[] = [
  { id: '1', athleteId: '1', athleteName: 'Sopheap Chan', sportId: '4', sportName: 'Athletics', medalType: 'gold', province: 'Phnom Penh', awardedDate: '2025-01-15', event: '100m Sprint' },
  { id: '2', athleteId: '1', athleteName: 'Sopheap Chan', sportId: '4', sportName: 'Athletics', medalType: 'gold', province: 'Phnom Penh', awardedDate: '2025-01-16', event: '200m Sprint' },
  { id: '3', athleteId: '2', athleteName: 'Sreymom Pich', sportId: '3', sportName: 'Swimming', medalType: 'gold', province: 'Siem Reap', awardedDate: '2025-01-12', event: '100m Freestyle' },
  { id: '4', athleteId: '2', athleteName: 'Sreymom Pich', sportId: '3', sportName: 'Swimming', medalType: 'silver', province: 'Siem Reap', awardedDate: '2025-01-13', event: '200m Freestyle' },
  { id: '5', athleteId: '6', athleteName: 'Bopha Nguon', sportId: '3', sportName: 'Swimming', medalType: 'gold', province: 'Phnom Penh', awardedDate: '2025-01-14', event: '50m Butterfly' },
];

// ============================================
// RECENT REGISTRATIONS
// ============================================

export const mockRecentRegistrations: RecentRegistration[] = [
  { id: '5', athleteName: 'Virak Hem', sport: 'Boxing', province: 'Kampong Cham', registrationDate: '2025-01-08', status: 'pending' },
  { id: '4', athleteName: 'Channary Lim', sport: 'Badminton', province: 'Kandal', registrationDate: '2025-01-07', status: 'pending' },
  { id: '7', athleteName: 'Dara Kong', sport: 'Football', province: 'Siem Reap', registrationDate: '2025-01-06', status: 'approved' },
  { id: '1', athleteName: 'Sopheap Chan', sport: 'Football', province: 'Phnom Penh', registrationDate: '2025-01-05', status: 'approved' },
  { id: '2', athleteName: 'Sreymom Pich', sport: 'Swimming', province: 'Siem Reap', registrationDate: '2025-01-04', status: 'approved' },
];