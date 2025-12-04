## FOLDER STRUCTURE

```text
/app
  /(auth)
    /login
    /logout
   
  /(dashboard)
    /overview                   # Main dashboard
   
  /athletes                     # Athlete Microservice
    /page.tsx                   # List all athletes 
    /register
      /page.tsx                 # Register new athlete
    /[id]
      /page.tsx                 # Athlete detail
      /edit
        /page.tsx               # Edit athlete
   
  /medals                       # Medal Microservice
    /page.tsx                   # Medal leaderboard
    /award
      /page.tsx                 # Award medal
    /province-rankings
      /page.tsx                 # Province medal rankings
    /history
      /page.tsx                 # Medal history
   
  /sports                       # Sport Microservice
    /page.tsx                   # Sport categories list
    /[id]
      /page.tsx                 # Sport detail + events
      /events
        /[eventId]
          /page.tsx             # Event detail
   
  /schedules                    # Schedule Microservice
    /page.tsx                   # Schedule overview
    /create
      /page.tsx                 # Create schedule
    /[id]
      /edit
        /page.tsx               # Edit schedule
   
  /provinces                    # Province Microservice
    /page.tsx                   # Province list
    /[id]
      /page.tsx                 # Province detail
      /athletes
        /page.tsx               # Province athletes
      /medals
        /page.tsx               # Province medals
   
  /exports                      # Export Microservice
    /page.tsx                   # Export center
    /preview
      /[type]
        /page.tsx               # Export preview
   
  /admin                        # Admin Microservice
    /page.tsx                   # Admin dashboard
    /logs
      /page.tsx                 # System logs
    /imports
      /page.tsx                 # CSV import
    /history
      /page.tsx                 # Submission history

/components
  /common                       # Shared across all services
    /Button
    /Input
    /Table
    /Card
    /Modal
    /Pagination
    /SearchBar
    /LoadingSpinner
   
  /layout                       # Layout components
    /Header
    /Sidebar
    /Footer
    /PageWrapper
   
  /athletes                     # Athlete service components
    /AthleteTable
    /AthleteCard
    /AthleteFilters
    /RegistrationForm
   
  /medals                       # Medal service components
    /MedalLeaderboard
    /MedalAwardForm
    /ProvinceMedalCard
   
  /sports                       # Sport service components
    /SportList
    /EventList
   
  /schedules                    # Schedule service components
    /ScheduleCalendar
    /ScheduleForm
   
  /provinces                    # Province service components
    /ProvinceCard
    /ProvinceStats
   
  /exports                      # Export service components
    /ExportForm
    /ExportPreview
   
  /admin                        # Admin service components
    /LogTable
    /ImportForm

/services                       # API adapters (one per microservice)
  /athleteAPI.ts
  /medalAPI.ts
  /sportAPI.ts
  /scheduleAPI.ts
  /provinceAPI.ts
  /exportAPI.ts
  /adminAPI.ts
  /apiClient.ts                 # Base HTTP client

/hooks                          # Data hooks (organized by service)
  /athletes
    /useAthletes.ts
    /useAthlete.ts
    /useRegisterAthlete.ts
  /medals
    /useMedals.ts
    /useAwardMedal.ts
  /sports
    /useSports.ts
  /schedules
    /useSchedules.ts
  /provinces
    /useProvinces.ts
  /common
    /usePagination.ts
    /useFilters.ts

/types                          # TypeScript types (one per service)
  /athlete.ts
  /medal.ts
  /sport.ts
  /schedule.ts
  /province.ts
  /common.ts

/utils                          # Utility functions
  /validation.ts
  /formatting.ts
  /dateHelpers.ts
  /exportHelpers.ts

/styles
  /globals.css                  # Global elderly-friendly styles
  /theme.css                    # Color theme, typography scale

/config
  /api.config.ts                # API endpoints configuration
  /app.config.ts                # App-wide configuration

  # Project Task Checklist: Sports Management System
**Focus:** Elderly-Friendly Accessibility & Microservice Architecture

## Recent changes (2025-12-01)
- Added API adapters: `athleteApi`, `registrationApi`, `medalApi`, `adminApi`, `scheduleApi`, `exportApi`, `provinceApi` under `src/services`
- Added hooks: `useAthlete`, `useRegisterAthlete` under `src/hooks`
- Added layout: `components/layout/DashboardLayout.tsx` and `components/layout/PageWrapper.tsx`
- Added common UI components: `Card`, `Table`, `Checkbox`, `Radio` under `components/common` and exported in `components/common/index.ts`


## PHASE 1: Foundation Setup

## PHASE 2: Core Layout System
- [x] **Task 2.1: Create PageWrapper component**
    - [x] Build container with consistent padding
    - [x] Add max-width constraints
    - [x] Include page title area 
    - [x] Add breadcrumb support 
- [x] **Task 2.2: Build Sidebar navigation**
    - [x] Implement text-only navigation (NO icons)
    - [x] Create clickable areas 
    - [x] Add high contrast active state
    - [x] List routes: Dashboard, Athletes, Medals, Sports, Schedules, Provinces, Exports, Admin
    - [x] Add collapsible sub-menus
- [x] **Task 2.5: Create root layout**
    - [x] Integrate Header, Sidebar, Footer
    - [x] Setup main content area
    - [x] Add error boundary
    - [x] Configure metadata

## PHASE 3: Shared Component Library
- [x] **Task 3.1: Build Button component**
    - [ ] Set size by default 
    - [ ] Apply contrast colors
    - [ ] Ensure clear text labels (no icons)
    - [ ] Add Loading/Disabled states
- [x] **Task 3.2: Build Input component**
    - [ ] Set input fields 
    - [ ] Set label text
    - [ ] Add contrast borders and error states
- [x] **Task 3.3: Build Table component**
    - [ ] Set text in cells 
    - [ ] Set generous cell padding 
    - [ ] Add alternating row colors and sort indicators 
- [x] **Task 3.4: Build Card component**
    - [ ] White background, grey border, padding
- [x] **Task 3.5: Build Modal component**
    - [ ] size, high contrast overlay, "Close" text button
- [x] **Task 3.6: Build Pagination component**
    - [ ] page numbers, text-based "Next/Previous" buttons
    - [ ] Range display ("Showing 1-20")
- [x] **Task 3.7: Build SearchBar component**
    - [ ] input, "Search" text button, "Clear" text button
- [x] **Task 3.8: Build LoadingSpinner component**
    - [ ] Text-based indicator ("Loading...")
- [x] **Task 3.9: Build Select/Dropdown component**
    - [ ] options, keyboard navigable
- [x] **Task 3.10: Build Checkbox and Radio components**
    - [ ] clickable areas, high contrast state indicators

## PHASE 4: Common Hooks
- [ ] **Task 4.1: Create usePagination hook**
- [ ] **Task 4.2: Create useFilters hook**
- [ ] **Task 4.3: Create useSort hook**
- [ ] **Task 4.4: Create useDebounce hook**
- [ ] **Task 4.5: Create useLocalStorage hook**

## PHASE 5: Athlete Microservice (High Priority)
- [x] **Task 5.1: Create Athlete API adapter**
    - [ ] `getAthletes`, `getAthlete`, `createAthlete`, `updateAthlete`, `deleteAthlete`, `searchAthletes`
- [x] **Task 5.2: Define Athlete TypeScript types**
- [x] **Task 5.3: Create Athlete data hooks**
    - [x] `useAthletes`
    - [x] `useAthlete`, `useRegisterAthlete`
    - [ ] `useUpdateAthlete`, `useDeleteAthlete`
- [x] **Task 5.4: Build AthleteTable component**
    - [ ] Columns: Name, Province, Sport, Gender, Status
    - [ ] Actions: View, Edit
- [ ] **Task 5.5: Build AthleteFilters component**
- [x] **Task 5.6: Build Athlete List Page** (`/athletes/page.tsx`)
- [ ] **Task 5.7: Build AthleteCard component**
- [x] **Task 5.8: Build Athlete Detail Page** (`/athletes/[id]/page.tsx`)
- [ ] **Task 5.9: Build RegistrationForm component (Multi-step)**
    - [ ] **5.9.1:** Design form structure (4 steps)
    - [ ] **5.9.2:** Build Step 1 (Personal Info - Name, DOB, Gender)
    - [ ] **5.9.3:** Build Step 2 (Contact Info - Phone, Emergency)
    - [ ] **5.9.4:** Build Step 3 (Sport Info - Province, Sport, Category)
    - [ ] **5.9.5:** Build Step 4 (Review and Submit)
    - [ ] **5.9.6:** Implement form state management
    - [ ] **5.9.7:** Implement validation  error text
    - [ ] **5.9.8:** Implement submission handling
- [ ] **Task 5.10: Build Athlete Registration Page** (`/athletes/register/page.tsx`)
- [ ] **Task 5.11: Build EditAthleteForm component**
- [ ] **Task 5.12: Build Athlete Edit Page** (`/athletes/[id]/edit/page.tsx`)
- [ ] **Task 5.13: Add athlete utilities** (`utils/athleteHelpers.ts`)
- [ ] **Task 5.14: Test Athlete Microservice** (Flows, validation, accessibility)

## PHASE 6: Sport Microservice
 - [x] **Task 6.1: Create Sport API adapter**
 - [x] **Task 6.2: Define Sport TypeScript types**
- [ ] **Task 6.3: Create Sport data hooks**
- [ ] **Task 6.4: Build SportCard component**
 - [x] **Task 6.5: Build Sport List Page** (`/sports/page.tsx`)
- [ ] **Task 6.6: Build SportDetailPage** (`/sports/[id]/page.tsx`)
- [ ] **Task 6.7: Build EventList component**
- [ ] **Task 6.8: Build CreateSportForm component**
- [ ] **Task 6.9: Build CreateEventForm component**

## PHASE 7: Province Microservice
 - [x] **Task 7.1: Create Province API adapter**
 - [x] **Task 7.2: Define Province TypeScript types**
- [ ] **Task 7.3: Create Province data hooks**
 - [x] **Task 7.4: Build ProvinceCard component**
 - [x] **Task 7.5: Build Province List Page** (`/provinces/page.tsx`)
- [ ] **Task 7.6: Build Province Detail Page** (`/provinces/[id]/page.tsx`)
- [ ] **Task 7.7: Build Province Athletes Page**
- [ ] **Task 7.8: Build Province Medals Page**

## PHASE 8: Medal Microservice (High Priority)
 - [x] **Task 8.1: Create Medal API adapter**
 - [x] **Task 8.2: Define Medal TypeScript types**
- [ ] **Task 8.3: Create Medal data hooks**
- [ ] **Task 8.4: Build MedalLeaderboardTable component**
    - [ ] numbers, color coding for top 3
 - [x] **Task 8.5: Build Medal Leaderboard Page** (`/medals/page.tsx`)
- [ ] **Task 8.6: Build AwardMedalForm component**
- [ ] **Task 8.7: Build Award Medal Page** (`/medals/award/page.tsx`)
- [ ] **Task 8.8: Build ProvinceMedalRankingTable component**
- [ ] **Task 8.9: Build Province Medal Rankings Page**
- [ ] **Task 8.10: Build MedalHistoryTable component**
- [ ] **Task 8.11: Build Medal History Page**

## PHASE 9: Schedule Microservice
- [x] **Task 9.1: Create Schedule API adapter**
- [ ] **Task 9.2: Define Schedule TypeScript types**
- [ ] **Task 9.3: Create Schedule data hooks**
- [ ] **Task 9.4: Build ScheduleTable component**
- [ ] **Task 9.5: Build Schedule Overview Page** (`/schedules/page.tsx`)
- [ ] **Task 9.6: Build CreateScheduleForm component**
- [ ] **Task 9.7: Build Create Schedule Page**
- [ ] **Task 9.8: Build EditScheduleForm component**
- [ ] **Task 9.9: Build Edit Schedule Page**
- [ ] **Task 9.10: Build DailyScheduleView component**

## PHASE 10: Export Microservice
 - [x] **Task 10.1: Create Export API adapter**
- [ ] **Task 10.2: Define Export TypeScript types**
- [ ] **Task 10.3: Create Export data hooks**
- [ ] **Task 10.4: Build ExportForm component**
- [ ] **Task 10.5: Build Export Center Page** (`/exports/page.tsx`)
- [ ] **Task 10.6: Build ExportPreview component**
- [ ] **Task 10.7: Build Export Preview Page**
- [ ] **Task 10.8: Build ExportStatus component**

## PHASE 11: Admin Microservice
 - [x] **Task 11.1: Create Admin API adapter**
- [ ] **Task 11.2: Define Admin TypeScript types**
- [ ] **Task 11.3: Create Admin data hooks**
- [ ] **Task 11.4: Build LogTable component**
- [ ] **Task 11.5: Build Logs Page** (`/admin/logs/page.tsx`)
- [ ] **Task 11.6: Build ImportForm component**
- [ ] **Task 11.7: Build Import Page** (`/admin/imports/page.tsx`)
- [ ] **Task 11.8: Build SubmissionHistoryTable component**
- [ ] **Task 11.9: Build Submission History Page**
- [ ] **Task 11.10: Build Admin Dashboard Page**

## PHASE 12: Dashboard Microservice
 - [x] **Task 12.1: Create Dashboard API adapter**
 - [x] **Task 12.2: Build StatCard component**
 - [x] **Task 12.3: Build Dashboard Overview Page** (`/overview/page.tsx`)

## PHASE 13: Testing & Quality Assurance
- [ ] **Task 13.1: Accessibility testing**
    - [ ] Screen reader
    - [ ] Keyboard navigation
    - [ ] Focus indicators
    - [ ] Contrast ratios
    - [ ] Browser zoom (150%+)
- [ ] **Task 13.2: Cross-browser testing**
- [ ] **Task 13.3: Performance testing**
- [ ] **Task 13.4: User acceptance testing (Elderly officers)**

## INTEGRATION: Existing Registration Form
- [ ] **Task RF.1:** Audit existing registration form
- [ ] **Task RF.2:** Map fields to new Athlete structure
- [ ] **Task RF.3:** Restructure into multi-step format
 - [x] **Task RF.4:** Integrate with `useRegisterAthlete` hook
- [ ] **Task RF.5:** Enhance accessibility (Font size 18px+, clear labels)

> NOTE: Basic integration implemented: registration now emits a dashboard refresh event on success which triggers `useDashboard` to refetch dashboard data. This is implemented via `src/lib/eventBus.ts` and `useDashboard`'s event listener. Remaining RF tasks require multi-step rework and accessibility adjustments.
