export const PROVINCES = [
  { value: 'Phnom Penh', label: 'Phnom Penh' },
  { value: 'Banteay Meanchey', label: 'Banteay Meanchey' },
  { value: 'Battambang', label: 'Battambang' },
  { value: 'Kampong Cham', label: 'Kampong Cham' },
  { value: 'Kampong Chhnang', label: 'Kampong Chhnang' },
  { value: 'Kampong Speu', label: 'Kampong Speu' },
  { value: 'Kampong Thom', label: 'Kampong Thom' },
  { value: 'Kampot', label: 'Kampot' },
  { value: 'Kandal', label: 'Kandal' },
  { value: 'Kep', label: 'Kep' },
  { value: 'Koh Kong', label: 'Koh Kong' },
  { value: 'Kratie', label: 'Kratie' },
  { value: 'Mondulkiri', label: 'Mondulkiri' },
  { value: 'Oddar Meanchey', label: 'Oddar Meanchey' },
  { value: 'Pailin', label: 'Pailin' },
  { value: 'Preah Vihear', label: 'Preah Vihear' },
  { value: 'Prey Veng', label: 'Prey Veng' },
  { value: 'Pursat', label: 'Pursat' },
  { value: 'Ratanakiri', label: 'Ratanakiri' },
  { value: 'Siem Reap', label: 'Siem Reap' },
  { value: 'Preah Sihanouk', label: 'Preah Sihanouk' },
  { value: 'Stung Treng', label: 'Stung Treng' },
  { value: 'Svay Rieng', label: 'Svay Rieng' },
  { value: 'Takeo', label: 'Takeo' },
  { value: 'Tbong Khmum', label: 'Tbong Khmum' }
]

export const DEPARTMENTS = [
  { value: 'Department 1', label: 'Department 1' },
  { value: 'Department 2', label: 'Department 2' },
  { value: 'Department 3', label: 'Department 3' },
]

export const EVENT_TYPES = [
  { value: 'Event Type 1', label: 'Event Type 1' },
  { value: 'Event Type 2', label: 'Event Type 2' },
  { value: 'Event Type 3', label: 'Event Type 3' },
]

export const POSITIONS = [
  { value: 'player', label: 'Player' },
  { value: 'coach', label: 'Coach' },
  { value: 'manager', label: 'Manager' },
  { value: 'referee', label: 'Referee' },
]

export const SPORT_CATEGORIES = [
  { id: 'traditional', name: 'Tranditional Sport' },
  { id: 'ball', name: 'Ball Games' },
  { id: 'martial', name: 'Martial Arts' },
  { id: 'athletics', name: 'Athletics' },
  { id: 'indoor', name: 'Recreational Sport' },
]

export const SPORTS = [
  // Tranditional Sport
  { value: 'chol-chhoung', label: 'Chol Chhoung', category: 'Tranditional Sport' },
  { value: 'leak-kanseng', label: 'Leak Kanseng', category: 'Tranditional Sport' },
  { value: 'teanh-prot', label: 'Teanh Prot', category: 'Tranditional Sport' },
  { value: 'bos-angkunh', label: 'Bos Angkunh', category: 'Tranditional Sport' },
  { value: 'bay-khom', label: 'Bay Khom', category: 'Tranditional Sport' },
  { value: 'ouk-chatrang', label: 'Ouk Chatrang (Khmer Chess)', category: 'Tranditional Sport' },
  { value: 'klah-klok', label: 'Klah Klok', category: 'Tranditional Sport' },

  // Ball Games
  { value: 'football', label: 'Football', category: 'Ball Games' },
  { value: 'volleyball', label: 'Volleyball', category: 'Ball Games' },
  { value: 'basketball', label: 'Basketball', category: 'Ball Games' },
  { value: 'petanque', label: 'Petanque', category: 'Ball Games' },
  { value: 'sepak-takraw', label: 'Sepak Takraw', category: 'Ball Games' },
  { value: 'table-tennis-ball', label: 'Table Tennis', category: 'Ball Games' },
  { value: 'handball', label: 'Handball', category: 'Ball Games' },

  // Martial Arts
  { value: 'bokator', label: 'Bokator', category: 'Martial Arts' },
  { value: 'kun-khmer', label: 'Kun Khmer', category: 'Martial Arts' },
  { value: 'taekwondo', label: 'Taekwondo', category: 'Martial Arts' },
  { value: 'karate', label: 'Karate', category: 'Martial Arts' },
  { value: 'judo', label: 'Judo', category: 'Martial Arts' },
  { value: 'wrestling', label: 'Wrestling', category: 'Martial Arts' },

  // Athletics
  { value: 'running', label: 'Running', category: 'Athletics' },
  { value: 'cycling', label: 'Cycling', category: 'Athletics' },
  { value: 'swimming', label: 'Swimming', category: 'Athletics' },
  { value: 'badminton-outdoor', label: 'Badminton (Outdoor)', category: 'Athletics' },
  { value: 'hiking', label: 'Hiking', category: 'Athletics' },
  { value: 'archery', label: 'Archery', category: 'Athletics' },
  { value: 'boat-racing', label: 'Boat Racing', category: 'Athletics' },
  { value: 'tennis', label: 'Tennis', category: 'Athletics' },
  { value: 'golf', label: 'Golf', category: 'Athletics' },

  // Recreational Sport
  { value: 'badminton-indoor', label: 'Badminton (Indoor)', category: 'Recreational Sport' },
  { value: 'table-tennis-indoor', label: 'Table Tennis', category: 'Recreational Sport' },
  { value: 'bowling', label: 'Bowling', category: 'Recreational Sport' },
  { value: 'chess', label: 'Chess', category: 'Recreational Sport' },
  { value: 'billiards', label: 'Billiards', category: 'Recreational Sport' },
  { value: 'e-sports', label: 'E-sports', category: 'Recreational Sport' },
  { value: 'gym-fitness', label: 'Gym & Fitness', category: 'Recreational Sport' },
  { value: 'yoga', label: 'Yoga', category: 'Recreational Sport' },
  { value: 'dance-fitness', label: 'Dance Fitness', category: 'Recreational Sport' },
  { value: 'indoor-climbing', label: 'Indoor Climbing', category: 'Recreational Sport' },
]

// Note: sportsByCategory is now deprecated, use SPORTS array with category property instead
export const sportsByCategory: Record<string, string[]> = {
  'Tranditional Sport': ['Chol Chhoung', 'Leak Kanseng', 'Teanh Prot', 'Bos Angkunh', 'Bay Khom', 'Ouk Chatrang (Khmer Chess)', 'Klah Klok'],
  'Ball Games': ['Football', 'Volleyball', 'Basketball', 'Petanque', 'Sepak Takraw', 'Table Tennis', 'Handball'],
  'Martial Arts': ['Bokator', 'Kun Khmer', 'Taekwondo', 'Karate', 'Judo', 'Wrestling', 'Muay Thai'],
  'Athletics': ['Running', 'Cycling', 'Swimming', 'Badminton (Outdoor)', 'Hiking', 'Archery', 'Boat Racing', 'Tennis', 'Golf'],
  'Recreational Sport': ['Badminton (Indoor)', 'Table Tennis', 'Bowling', 'Chess', 'Billiards', 'E-sports', 'Gym & Fitness', 'Yoga', 'Dance Fitness', 'Indoor Climbing'],
}

export const HEADER_BUTTONS = [
  { id: 'leader', label: 'Register as Leader', variant: 'outline' as const },
  { id: 'player', label: 'Register as Player', variant: 'primary' as const },
]

export const LANGUAGES = [
  { code: 'kh', label: 'ភាសាខ្មែរ' },
  { code: 'en', label: 'English' },
]
