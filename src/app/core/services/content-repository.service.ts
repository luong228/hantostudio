import { Injectable, WritableSignal, computed, inject, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  BlogPost,
  BookingStep,
  BranchInfo,
  ContactChannel,
  FaqItem,
  HomePageContent,
  NavItem,
  PageContent,
  PortfolioCollection,
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

@Injectable({ providedIn: 'root' })
export class ContentRepositoryService {
  private readonly repository = inject(STUDIO_CONTENT_REPOSITORY);

  private readonly pagesState = signal<PageContent[]>([]);
  private readonly servicesState = signal<ServiceItem[]>([]);
  private readonly pricingState = signal<PricingPlan[]>([]);
  private readonly portfolioState = signal<PortfolioCollection[]>([]);
  private readonly blogState = signal<BlogPost[]>([]);
  private readonly faqState = signal<FaqItem[]>([]);
  private readonly branchesState = signal<BranchInfo[]>([]);
  private readonly navState = signal<NavItem[]>([]);
  private readonly contactChannelsState = signal<ContactChannel[]>([]);
  private readonly trustMetricsState = signal<TrustMetric[]>([]);
  private readonly whyChooseState = signal<WhyChooseItem[]>([]);
  private readonly bookingStepsState = signal<BookingStep[]>([]);
  private readonly testimonialsState = signal<TestimonialItem[]>([]);
  private readonly studioInfoState = signal<StudioInfo>({
    brandName: 'Lumen Atelier',
    tagline: '',
    address: '',
    openingHours: '',
    phone: '',
    email: ''
  });

  readonly pages = computed(() => this.pagesState());
  readonly navItems = computed(() => this.navState());
  readonly studioInfo = computed(() => this.studioInfoState());
  readonly contactChannels = computed(() => this.contactChannelsState());
  readonly branches = computed(() => this.branchesState());

  readonly services = computed(() => this.servicesState());
  readonly pricingPlans = computed(() => this.pricingState());
  readonly portfolioCollections = computed(() => this.portfolioState());
  readonly blogPosts = computed(() => this.blogState());
  readonly faqItems = computed(() => this.faqState());
  readonly trustMetrics = computed(() => this.trustMetricsState());
  readonly whyChooseItems = computed(() => this.whyChooseState());
  readonly bookingSteps = computed(() => this.bookingStepsState());
  readonly testimonials = computed(() => this.testimonialsState());

  readonly homePageContent = computed<HomePageContent | null>(() => {
    return this.pageByPath('/')?.home ?? null;
  });

  constructor() {
    this.connect(this.repository.listPages(), this.pagesState, []);
    this.connect(this.repository.listServices(), this.servicesState, []);
    this.connect(this.repository.listPricingPackages(), this.pricingState, []);
    this.connect(this.repository.listPortfolioCollections(), this.portfolioState, []);
    this.connect(this.repository.listBlogPosts(), this.blogState, []);
    this.connect(this.repository.listFaqItems(), this.faqState, []);
    this.connect(this.repository.listBranches(), this.branchesState, []);
    this.connect(this.repository.listNavItems(), this.navState, []);
    this.connect(this.repository.listContactChannels(), this.contactChannelsState, []);
    this.connect(this.repository.listTrustMetrics(), this.trustMetricsState, []);
    this.connect(this.repository.listWhyChooseItems(), this.whyChooseState, []);
    this.connect(this.repository.listBookingSteps(), this.bookingStepsState, []);
    this.connect(this.repository.listTestimonials(), this.testimonialsState, []);
    this.repository.getStudioInfo().subscribe((value) => this.studioInfoState.set(value));
  }

  serviceBySlug(slug: string) {
    return this.servicesState().find((item) => item.slug === slug) ?? null;
  }

  portfolioBySlug(slug: string) {
    return this.portfolioState().find((item) => item.slug === slug) ?? null;
  }

  postBySlug(slug: string) {
    return this.blogState().find((item) => item.slug === slug) ?? null;
  }

  pageByPath(path: string): PageContent | null {
    return this.pagesState().find((item) => item.path === path) ?? null;
  }

  prefetchServiceBySlug(slug: string): void {
    this.repository.getServiceBySlug(slug).subscribe((item) => this.upsertBySlug(this.servicesState, item));
  }

  prefetchPortfolioBySlug(slug: string): void {
    this.repository
      .getPortfolioCollectionBySlug(slug)
      .subscribe((item) => this.upsertBySlug(this.portfolioState, item));
  }

  prefetchBlogBySlug(slug: string): void {
    this.repository.getBlogPostBySlug(slug).subscribe((item) => this.upsertBySlug(this.blogState, item));
  }

  seoForPath(path: string, fallback: SeoMeta): SeoMeta {
    return resolvePageSeo(this.pageByPath(path), fallback);
  }

  seoForServiceSlug(slug: string, fallback: SeoMeta): SeoMeta {
    return resolveDetailSeo(fallback, this.serviceBySlug(slug)?.seo);
  }

  seoForPortfolioSlug(slug: string, fallback: SeoMeta): SeoMeta {
    return resolveDetailSeo(fallback, this.portfolioBySlug(slug)?.seo);
  }

  seoForBlogSlug(slug: string, fallback: SeoMeta): SeoMeta {
    return resolveDetailSeo(fallback, this.postBySlug(slug)?.seo);
  }

  pageSeo$(path: string, fallback: SeoMeta): Observable<SeoMeta> {
    return this.repository.getPageByPath(path).pipe(map((page) => resolvePageSeo(page, fallback)));
  }

  serviceSeo$(slug: string, fallback: SeoMeta): Observable<SeoMeta> {
    return this.repository.getServiceBySlug(slug).pipe(map((item) => resolveDetailSeo(fallback, item?.seo)));
  }

  portfolioSeo$(slug: string, fallback: SeoMeta): Observable<SeoMeta> {
    return this.repository
      .getPortfolioCollectionBySlug(slug)
      .pipe(map((item) => resolveDetailSeo(fallback, item?.seo)));
  }

  blogSeo$(slug: string, fallback: SeoMeta): Observable<SeoMeta> {
    return this.repository.getBlogPostBySlug(slug).pipe(map((item) => resolveDetailSeo(fallback, item?.seo)));
  }

  private connect<T>(source$: Observable<T>, target: WritableSignal<T>, fallback: T): void {
    source$.subscribe({
      next: (value) => target.set(value),
      error: () => target.set(fallback)
    });
  }

  private upsertBySlug<T extends { slug: string }>(state: WritableSignal<T[]>, item: T | null): void {
    if (!item) {
      return;
    }

    const current = state();
    const existingIndex = current.findIndex((entry) => entry.slug === item.slug);

    if (existingIndex === -1) {
      state.set([...current, item]);
      return;
    }

    const copy = [...current];
    copy[existingIndex] = item;
    state.set(copy);
  }
}
