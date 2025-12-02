import React from 'react'
export interface FormData {
  province: string | null
  department: string | null
  eventType: string | null
  typeOfSport: string | null
  selectedSport: string | null
  firstName: string
  lastName: string
  nationalID: string
  dateOfBirth: string
  position: string | null
  phoneNumber: string
  photoUpload: File | null
  category?: string | null
}

export type RegistrationType = 'leader' | 'athletes'

export interface FormErrors {
  province?: string
  department?: string
  eventType?: string
  typeOfSport?: string
  selectedSport?: string
  firstName?: string
  lastName?: string
  nationalID?: string
  dateOfBirth?: string
  position?: string
  phoneNumber?: string
  photoUpload?: string
}

export type OnFieldChange = <K extends keyof FormData>(
  field: K,
  value: FormData[K]
) => void

export interface SportCategory {
  id: string
  name: string
  icon: string
}

export interface SelectOption {
  value: string
  label: string
}

export interface HeaderButtonProps {
  variant?: 'primary' | 'outline'
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export interface FormSectionProps {
  formData: FormData
  handleChange: OnFieldChange
  errors?: FormErrors
}

export interface FormInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
  required?: boolean
  error?: string
}

export interface FormSelectProps {
  label: string
  value: string | null
  onChange: (value: string | null) => void
  options: SelectOption[]
  required?: boolean
  error?: string
  disabled?: boolean
}

export interface LogEntry {
  id: number;
  action: string;
  timestamp: string;
}


export interface Athlete {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  province: string;
  sports: string[];
  email: string;
  phone: string;
  photoUrl?: string;
  registrationDate: string;
  status: 'pending' | 'approved' | 'rejected';
  medals?: {
    gold: number;
    silver: number;
    bronze: number;
  };
}

export interface Sport {
  id: string;
  name: string;
  category: string;
  description: string;
  maxParticipants: number;
  currentParticipants: number;
  startDate: string;
  endDate: string;
  venue: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  icon?: string;
}

export interface Medal {
  id: string;
  athleteId: string;
  athleteName: string;
  sportId: string;
  sportName: string;
  medalType: 'gold' | 'silver' | 'bronze';
  province: string;
  awardedDate: string;
  event: string;
}

export interface Province {
  id: string;
  name: string;
  code: string;
  athleteCount: number;
  medals: {
    gold: number;
    silver: number;
    bronze: number;
    total: number;
  };
  rank?: number;
}

export interface DashboardStats {
  totalAthletes: number;
  totalSports: number;
  totalProvinces: number;
  totalMedals: number;
  activeCompetitions: number;
  pendingRegistrations: number;
}

export interface RecentRegistration {
  id: string;
  athleteName: string;
  sport: string;
  province: string;
  registrationDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface TableColumn<T = any> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  width?: string;
  render?: (value: any, row: T) => React.ReactNode;
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface FilterState {
  search: string;
  status?: string;
  province?: string;
  sport?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface SortState {
  key: string;
  direction: 'asc' | 'desc';
}

// ============================================
// CHART DATA TYPES
// ============================================

export interface ChartData {
  label: string;
  value: number;
  color?: string;
}

export interface MedalChartData {
  province: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}
