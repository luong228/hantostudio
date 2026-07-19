import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  BlogPost,
  BookingStep,
  BranchInfo,
  ContactChannel,
  FaqItem,
  HomePageContent,
  NavItem,
  PageContent,
  PricingPlan,
  SeoMeta,
  ServiceItem,
  StudioInfo,
  TestimonialItem,
  TrustMetric,
  WhyChooseItem
} from '../models';
import { STUDIO_CONTENT_REPOSITORY } from '../cms/repositories/studio-content.repository.token';
import { resolveDetailSeo, resolvePageSeo } from './seo-content.util';

const DEFAULT_STUDIO_INFO: StudioInfo = {
  brandName: 'HANTO Studio',
  tagline: '',
  address: '',
  openingHours: '',
  phone: '',
  email: ''
};

@Injectable({ providedIn: 'root' })
export class ContentRepositoryService {
  private readonly repository = inject(STUDIO_CONTENT_REPOSITORY);

  readonly pages = toSignal(this.repository.listPages(), { initialValue: [] as PageContent[] });
  readonly navItems = toSignal(this.repository.listNavItems(), { initialValue: [] as NavItem[] });
  readonly studioInfo = toSignal(this.repository.getStudioInfo(), { initialValue: DEFAULT_STUDIO_INFO });
  readonly contactChannels = toSignal(this.repository.listContactChannels(), { initialValue: [] as ContactChannel[] });
  readonly branches = toSignal(this.repository.listBranches(), { initialValue: [] as BranchInfo[] });
  readonly services = toSignal(this.repository.listServices(), { initialValue: [] as ServiceItem[] });
  readonly pricingPlans = toSignal(this.repository.listPricingPackages(), { initialValue: [] as PricingPlan[] });
  readonly blogPosts = toSignal(this.repository.listBlogPosts(), { initialValue: [] as BlogPost[] });
  readonly faqItems = toSignal(this.repository.listFaqItems(), { initialValue: [] as FaqItem[] });
  readonly trustMetrics = toSignal(this.repository.listTrustMetrics(), { initialValue: [] as TrustMetric[] });
  readonly whyChooseItems = toSignal(this.repository.listWhyChooseItems(), { initialValue: [] as WhyChooseItem[] });
  readonly bookingSteps = toSignal(this.repository.listBookingSteps(), { initialValue: [] as BookingStep[] });
  readonly testimonials = toSignal(this.repository.listTestimonials(), { initialValue: [] as TestimonialItem[] });

  readonly homePageContent = computed<HomePageContent | null>(() => {
    return this.pageByPath('/')?.home ?? null;
  });

  pageByPath(path: string): PageContent | null {
    return this.pages().find((item) => item.path === path) ?? null;
  }

  serviceBySlug(slug: string): ServiceItem | null {
    return this.services().find((item) => item.slug === slug) ?? null;
  }

  postBySlug(slug: string): BlogPost | null {
    return this.blogPosts().find((item) => item.slug === slug) ?? null;
  }

  seoForPath(path: string, fallback: SeoMeta): SeoMeta {
    return resolvePageSeo(this.pageByPath(path), fallback);
  }

  seoForServiceSlug(slug: string, fallback: SeoMeta): SeoMeta {
    return resolveDetailSeo(fallback, this.serviceBySlug(slug)?.seo);
  }

  seoForBlogSlug(slug: string, fallback: SeoMeta): SeoMeta {
    return resolveDetailSeo(fallback, this.postBySlug(slug)?.seo);
  }
}
