interface NewsListModel {
  article_id: string;
  title: string;
  link: string;
  keywords?: null;
  creator?: string[] | null;
  video_url?: null;
  description: string;
  content: string;
  pubDate: string;
  image_url: string;
  source_id: string;
  source_priority: number;
  source_url: string;
  source_icon: string;
  language: string;
  country?: string[] | null;
  category?: string[] | null;
  ai_tag: string;
  sentiment: string;
  sentiment_stats: string;
  ai_region: string;
  ai_org: string;
}

export type {NewsListModel};
