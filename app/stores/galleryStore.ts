import { create } from 'zustand';
import { certificates } from '../constants/certificates';

type Certificate = typeof certificates[0];

interface GalleryStore {
  selectedCert: Certificate | null;
  setSelectedCert: (cert: Certificate | null) => void;
}

export const useGalleryStore = create<GalleryStore>((set) => ({
  selectedCert: null,
  setSelectedCert: (cert) => set({ selectedCert: cert }),
}));

// modifed by shaurya
