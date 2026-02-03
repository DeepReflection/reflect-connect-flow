import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ProfileData, DEFAULT_PROFILE, SocialLink } from '@/types/profile';
import { AgendaEvent, Product, Service, Reflection } from '@/themes/types';

const STORAGE_KEY = 'profile-data';

interface ProfileContextType {
  profile: ProfileData;
  updateProfile: (updates: Partial<ProfileData>) => void;
  updateName: (name: string) => void;
  updateDescription: (description: string) => void;
  updateAvatar: (avatarUrl: string) => void;
  updateBanner: (bannerUrl: string) => void;
  // Social Links
  addSocialLink: (link: Omit<SocialLink, 'id'>) => void;
  updateSocialLink: (id: string, updates: Partial<SocialLink>) => void;
  removeSocialLink: (id: string) => void;
  // Agenda Events
  addAgendaEvent: (event: AgendaEvent) => void;
  updateAgendaEvent: (index: number, updates: Partial<AgendaEvent>) => void;
  removeAgendaEvent: (index: number) => void;
  // Products
  addProduct: (product: Product) => void;
  updateProduct: (index: number, updates: Partial<Product>) => void;
  removeProduct: (index: number) => void;
  // Services
  addService: (service: Service) => void;
  updateService: (index: number, updates: Partial<Service>) => void;
  removeService: (index: number) => void;
  // Reflections
  addReflection: (reflection: Reflection) => void;
  updateReflection: (index: number, updates: Partial<Reflection>) => void;
  removeReflection: (index: number) => void;
  // Reset
  resetToDefault: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [profile, setProfile] = useState<ProfileData>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          return DEFAULT_PROFILE;
        }
      }
    }
    return DEFAULT_PROFILE;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (updates: Partial<ProfileData>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const updateName = (name: string) => updateProfile({ name });
  const updateDescription = (description: string) => updateProfile({ description });
  const updateAvatar = (avatarUrl: string) => updateProfile({ avatarUrl });
  const updateBanner = (bannerUrl: string) => updateProfile({ bannerUrl });

  // Social Links
  const addSocialLink = (link: Omit<SocialLink, 'id'>) => {
    const newLink: SocialLink = { ...link, id: Date.now().toString() };
    setProfile(prev => ({
      ...prev,
      socialLinks: [...prev.socialLinks, newLink],
    }));
  };

  const updateSocialLink = (id: string, updates: Partial<SocialLink>) => {
    setProfile(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.map(link =>
        link.id === id ? { ...link, ...updates } : link
      ),
    }));
  };

  const removeSocialLink = (id: string) => {
    setProfile(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.filter(link => link.id !== id),
    }));
  };

  // Agenda Events
  const addAgendaEvent = (event: AgendaEvent) => {
    setProfile(prev => ({
      ...prev,
      agendaEvents: [...prev.agendaEvents, event],
    }));
  };

  const updateAgendaEvent = (index: number, updates: Partial<AgendaEvent>) => {
    setProfile(prev => ({
      ...prev,
      agendaEvents: prev.agendaEvents.map((event, i) =>
        i === index ? { ...event, ...updates } : event
      ),
    }));
  };

  const removeAgendaEvent = (index: number) => {
    setProfile(prev => ({
      ...prev,
      agendaEvents: prev.agendaEvents.filter((_, i) => i !== index),
    }));
  };

  // Products
  const addProduct = (product: Product) => {
    setProfile(prev => ({
      ...prev,
      products: [...prev.products, product],
    }));
  };

  const updateProduct = (index: number, updates: Partial<Product>) => {
    setProfile(prev => ({
      ...prev,
      products: prev.products.map((product, i) =>
        i === index ? { ...product, ...updates } : product
      ),
    }));
  };

  const removeProduct = (index: number) => {
    setProfile(prev => ({
      ...prev,
      products: prev.products.filter((_, i) => i !== index),
    }));
  };

  // Services
  const addService = (service: Service) => {
    setProfile(prev => ({
      ...prev,
      services: [...prev.services, service],
    }));
  };

  const updateService = (index: number, updates: Partial<Service>) => {
    setProfile(prev => ({
      ...prev,
      services: prev.services.map((service, i) =>
        i === index ? { ...service, ...updates } : service
      ),
    }));
  };

  const removeService = (index: number) => {
    setProfile(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index),
    }));
  };

  // Reflections
  const addReflection = (reflection: Reflection) => {
    setProfile(prev => ({
      ...prev,
      reflections: [...prev.reflections, reflection],
    }));
  };

  const updateReflection = (index: number, updates: Partial<Reflection>) => {
    setProfile(prev => ({
      ...prev,
      reflections: prev.reflections.map((reflection, i) =>
        i === index ? { ...reflection, ...updates } : reflection
      ),
    }));
  };

  const removeReflection = (index: number) => {
    setProfile(prev => ({
      ...prev,
      reflections: prev.reflections.filter((_, i) => i !== index),
    }));
  };

  const resetToDefault = () => {
    setProfile(DEFAULT_PROFILE);
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        updateName,
        updateDescription,
        updateAvatar,
        updateBanner,
        addSocialLink,
        updateSocialLink,
        removeSocialLink,
        addAgendaEvent,
        updateAgendaEvent,
        removeAgendaEvent,
        addProduct,
        updateProduct,
        removeProduct,
        addService,
        updateService,
        removeService,
        addReflection,
        updateReflection,
        removeReflection,
        resetToDefault,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
