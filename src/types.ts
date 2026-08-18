export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  alt: string;
}

export interface GymContactInfo {
  name: string;
  registeredName: string;
  tagline: string;
  heroSlogan: string;
  founderName: string;
  founderTitle: string;
  locationName: string;
  address: string;
  city: string;
  pincode: string;
  openingHours: string;
  phones: string[];
  primaryPhone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  mapsUrl: string;
  instagramUrl: string;
}
