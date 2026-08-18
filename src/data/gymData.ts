import { LucideIcon, Dumbbell, Trophy, Users, ShieldCheck, Clock, Flame } from 'lucide-react';

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface FacilityFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  alt: string;
}

export const GYM_DETAILS = {
  name: 'Fitness First',
  registeredName: 'Fitness First®',
  tagline: 'Being Fit With Swapnil',
  founder: 'Swapnil',
  founderName: 'Swapnil',
  founderTitle: 'Founder & Head Fitness Coach',
  location: 'Rajarampuri, Kolhapur',
  address: 'Fitness First, 2nd Floor, Near City Hospital, Main Road, Rajarampuri, Kolhapur, Maharashtra 416008',
  phones: ['9876543210', '9123456780'],
  contactNumber: '+91 98765 43210',
  whatsappNumber: '919876543210',
  whatsappMessage: 'Hi Swapnil, I would like to inquire about joining Fitness First gym in Rajarampuri!',
  instagram: 'https://instagram.com/fitnessfirst_swapnil',
  instagramUrl: 'https://instagram.com/fitnessfirst_swapnil',
  mapsUrl: 'https://maps.google.com/?q=Rajarampuri+Kolhapur+Fitness+First',
  openingHours: '6:00 AM - 10:00 PM',
  workingHours: 'Monday - Saturday: 6:00 AM - 10:00 PM | Sunday: 7:00 AM - 1:00 PM',
};

export const GYM_INFO = GYM_DETAILS;

export const PROGRAMS: Program[] = [
  {
    id: 'weight-training',
    title: 'Weight Training',
    subtitle: 'Strength & Hypertrophy',
    description: 'Structured resistance training targeting muscular development and strength.',
    features: ['Compound Lifting Technique', 'Progressive Overload Tracking', 'Free Weights & Machines'],
  },
  {
    id: 'fat-loss-conditioning',
    title: 'Fat Loss & Conditioning',
    subtitle: 'High Energy & Stamina',
    description: 'High-intensity sessions designed to burn fat and increase cardiovascular output.',
    features: ['Agility & Turf Drills', 'Metabolic Conditioning', 'Caloric Expenditure Focus'],
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    subtitle: 'Custom Guidance',
    description: 'Focused guidance for individual goals.',
    features: ['1-on-1 Form Correction', 'Tailored Workout Routines', 'Consistency Accountability'],
  },
];

export const PROGRAMS_DATA = PROGRAMS;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'interior-turf-agility',
    title: 'Functional Turf & Agility Floor',
    category: 'Interior',
    imageUrl: '/images/gym-interior.jpg',
    alt: 'Fitness First Kolhapur gym interior showing functional turf, agility ladder, yellow hurdles and chevron LED ceiling lights',
  },
  {
    id: 'interior-strength-cardio',
    title: 'Strength Machines & Conditioning Floor',
    category: 'Interior',
    imageUrl: '/images/gym-strength-cardio.jpg',
    alt: 'Gym interior showing selectorized leg machine, strength training stations, and turf runway',
  },
  {
    id: 'interior-wide-arena',
    title: 'Turf Floor & Backlit Mirror Arena',
    category: 'Interior',
    imageUrl: '/images/gym-equipment.jpg',
    alt: 'Wide gym interior perspective showing green turf, concrete pillars, chevron ceiling lights, and backlit mirrors',
  },
  {
    id: 'gallery-strength',
    title: 'Strength & Heavy Resistance Zone',
    category: 'Strength',
    imageUrl: '/images/gym-strength-cardio.jpg',
    alt: 'Strength training machines, leg station, and weight workout area',
  },
  {
    id: 'gallery-cardio',
    title: 'Cardio & Machine Conditioning Floor',
    category: 'Cardio',
    imageUrl: '/images/gym-strength-cardio.jpg',
    alt: 'Cardio conditioning floor with machine stations and turf track',
  },
  {
    id: 'gallery-equipment',
    title: 'Turf Arena & Backlit Mirrors Equipment Space',
    category: 'Equipment',
    imageUrl: '/images/gym-equipment.jpg',
    alt: 'Wide perspective of turf floor, equipment pillars, chevron lighting, and back-lit mirrors',
  },
  {
    id: 'gallery-community',
    title: 'Fitness First Athletes & Community Floor',
    category: 'Community',
    imageUrl: '/images/gym-equipment.jpg',
    alt: 'Fitness First Athletes & Community training floor with spacious turf and backlit wall mirrors',
  },
  {
    id: 'gallery-2',
    title: 'Heavy Dumbbells & Free Weights Rack',
    category: 'Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Heavy dumbbell rack and strength training equipment',
  },
  {
    id: 'gallery-3',
    title: 'Barbell Strength & Squat Racks',
    category: 'Strength',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Barbell deadlift and squat training area',
  },
];
