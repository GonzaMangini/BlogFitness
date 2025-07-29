export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  animationType: 'fade-in' | 'slide-up' | 'scale-in';
  content?: string;
  author: string;
  readTime: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
