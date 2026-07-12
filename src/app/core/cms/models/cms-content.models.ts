export interface CmsImageField {
  url: string;
  alt?: string;
}

export interface CmsSeoField {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalUrl?: string;
  ogImage?: CmsImageField;
}

export interface CmsPage {
  id: string;
  slug: string;
  path: string;
  title: string;
  seo?: CmsSeoField;
  home?: {
    hero?: {
      eyebrow?: string;
      headline?: string;
      subheadline?: string;
      trustLine?: string;
      primaryCtaLabel?: string;
      primaryCtaRoute?: string;
      secondaryCtaLabel?: string;
      secondaryCtaRoute?: string;
      heroImage?: CmsImageField;
    };
    finalCta?: {
      title?: string;
      subtitle?: string;
      primaryLabel?: string;
      primaryRoute?: string;
      secondaryLabel?: string;
      secondaryRoute?: string;
    };
  };
}

export interface CmsService {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  heroImage?: CmsImageField;
  gallery?: CmsImageField[];
  startingPrice: number;
  durationMinutes: number;
  badges?: string[];
  seo?: CmsSeoField;
}

export interface CmsPricingPackage {
  id: string;
  name: string;
  price: number;
  summary: string;
  idealFor: string;
  features?: string[];
  highlighted?: boolean;
  seo?: CmsSeoField;
}

export interface CmsPortfolioCollection {
  id: string;
  slug: string;
  title: string;
  category: 'portrait' | 'family' | 'maternity' | 'concept' | 'profile';
  coverImage?: CmsImageField;
  teaser: string;
  story: string;
  imageCount: number;
  seo?: CmsSeoField;
}

export interface CmsBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: CmsImageField;
  publishedAt: string;
  readingMinutes: number;
  tags?: string[];
  seo?: CmsSeoField;
}

export interface CmsFaqItem {
  id: string;
  question: string;
  answer: string;
  topic: 'booking' | 'session' | 'pricing' | 'delivery';
  seo?: CmsSeoField;
}

export interface CmsBranch {
  id: string;
  name: string;
  address: string;
  phone: string;
}

export interface CmsTestimonial {
  id: string;
  name: string;
  sessionType: string;
  quote: string;
  rating: number;
}
