export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  canonicalUrl?: string;
}

export interface HomeHeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  trustLine: string;
  primaryCtaLabel: string;
  primaryCtaRoute: string;
  secondaryCtaLabel: string;
  secondaryCtaRoute: string;
  heroImage: string;
  heroImageAlt?: string;
}

export interface FinalCtaContent {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryRoute: string;
  secondaryLabel: string;
  secondaryRoute: string;
}

export interface HomePageContent {
  hero: HomeHeroContent;
  finalCta: FinalCtaContent;
}

export interface PageContent {
  id: string;
  slug: string;
  path: string;
  title: string;
  seo: SeoMeta;
  home?: HomePageContent;
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  gallery: string[];
  startingPrice: number;
  durationMinutes: number;
  badges: string[];
  seo?: SeoMeta;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  summary: string;
  idealFor: string;
  features: string[];
  highlighted?: boolean;
  seo?: SeoMeta;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  readingMinutes: number;
  tags: string[];
  seo?: SeoMeta;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  topic: 'booking' | 'session' | 'pricing' | 'delivery';
  seo?: SeoMeta;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}

export interface StudioInfo {
  brandName: string;
  tagline: string;
  address: string;
  openingHours: string;
  phone: string;
  email: string;
}

export interface TrustMetric {
  label: string;
  value: string;
  detail: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  tag?: string;
  stat?: string;
}

export interface BookingStep {
  step: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  sessionType: string;
  quote: string;
  rating: number;
}

export interface BranchInfo {
  name: string;
  address: string;
  phone: string;
}
