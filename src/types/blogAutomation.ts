export type RecurrenceType = 'daily' | 'weekly' | 'biweekly' | 'monthly';

export type ProjectStatus = 'active' | 'paused' | 'draft';

export type SocialMediaType = 'YOUTUBE' | 'FACEBOOK' | 'INSTAGRAM' | 'TWITTER' | 'LINKEDIN' | 'TIKTOK';

export const socialMediaLabels: Record<SocialMediaType, string> = {
  INSTAGRAM: 'Instagram',
  FACEBOOK: 'Facebook',
  YOUTUBE: 'YouTube',
  TIKTOK: 'TikTok',
  LINKEDIN: 'LinkedIn',
  TWITTER: 'X / Twitter',
};

export interface AutomationProject {
  id: string;
  name: string;
  theme: string;
  description: string;
  recurrence: RecurrenceType;
  scheduledDays?: number[]; // 0-6 for weekly (Sunday-Saturday)
  scheduledTime: string; // HH:MM format
  socialNetworks: SocialMediaType[];
  status: ProjectStatus;
  postsGenerated: number;
  nextRunDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const recurrenceLabels: Record<RecurrenceType, string> = {
  daily: 'Diário',
  weekly: 'Semanal',
  biweekly: 'Quinzenal',
  monthly: 'Mensal',
};

export const statusLabels: Record<ProjectStatus, string> = {
  active: 'Ativo',
  paused: 'Pausado',
  draft: 'Rascunho',
};

export const statusColors: Record<ProjectStatus, string> = {
  active: 'bg-green-500/20 text-green-400 border-green-500/30',
  paused: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  draft: 'bg-muted text-muted-foreground border-border',
};
