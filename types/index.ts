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

// ============================================
// SCHEDULE TYPES (Task 9.2)
// ============================================

export interface Schedule {
  id: string;
  name: string;
  description?: string;
  sportId: string;
  sportName: string;
  startDate: string;
  endDate: string;
  venue: string;
  location?: string;
  status: 'scheduled' | 'ongoing' | 'completed' | 'cancelled';
  createdDate: string;
  updatedDate?: string;
}

export interface ScheduleEvent {
  id: string;
  scheduleId: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  participants: number;
  status: 'scheduled' | 'ongoing' | 'completed';
}

// ============================================
// EXPORT TYPES (Task 10.2)
// ============================================

export interface ExportData {
  id: string;
  type: 'athletes' | 'medals' | 'sports' | 'provinces' | 'schedules' | 'all';
  format: 'csv' | 'excel' | 'pdf';
  filename: string;
  createdDate: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  downloadUrl?: string;
  fileSize?: number;
  filters?: {
    province?: string;
    sport?: string;
    dateFrom?: string;
    dateTo?: string;
    status?: string;
  };
}

export interface ExportFormat {
  type: 'csv' | 'excel' | 'pdf';
  extension: string;
  mimeType: string;
}

export interface ExportPreview {
  id: string;
  type: string;
  format: string;
  recordCount: number;
  sampleData: any[];
  totalRecords: number;
}

// ============================================
// ADMIN TYPES (Task 11.2)
// ============================================

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'superadmin' | 'admin' | 'moderator';
  status: 'active' | 'inactive' | 'suspended';
  createdDate: string;
  lastLogin?: string;
  permissions: string[];
}

export interface SystemLog {
  id: string;
  userId: string;
  username: string;
  action: string;
  module: string;
  details?: string;
  timestamp: string;
  ipAddress?: string;
  status: 'success' | 'failed' | 'warning';
}

export interface ImportData {
  id: string;
  filename: string;
  fileType: 'csv' | 'excel';
  dataType: 'athletes' | 'sports' | 'provinces' | 'medals';
  uploadDate: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  totalRecords: number;
  successCount: number;
  failureCount: number;
  errorDetails?: string;
  uploadedBy: string;
}

export interface SubmissionHistory {
  id: string;
  type: 'athlete_registration' | 'medal_award' | 'sport_creation' | 'schedule_creation' | 'data_import';
  submittedBy: string;
  submissionDate: string;
  data: any;
  status: 'pending' | 'approved' | 'rejected';
  reviewedBy?: string;
  reviewDate?: string;
  notes?: string;
}
