import { Observable } from 'rxjs';
import {
  BookingStep,
  BranchInfo,
  ContactChannel,
  FaqItem,
  NavItem,
  PageContent,
  PortfolioCollection,
  PricingPlan,
  ServiceItem,
  StudioInfo,
  TestimonialItem,
  TrustMetric,
  WhyChooseItem,
  BlogPost
} from '../../models';

export interface StudioContentRepository {
  listPages(): Observable<PageContent[]>;
  getPageByPath(path: string): Observable<PageContent | null>;

  listServices(): Observable<ServiceItem[]>;
  getServiceBySlug(slug: string): Observable<ServiceItem | null>;

  listPricingPackages(): Observable<PricingPlan[]>;

  listPortfolioCollections(): Observable<PortfolioCollection[]>;
  getPortfolioCollectionBySlug(slug: string): Observable<PortfolioCollection | null>;

  listBlogPosts(): Observable<BlogPost[]>;
  getBlogPostBySlug(slug: string): Observable<BlogPost | null>;

  listFaqItems(): Observable<FaqItem[]>;
  listBranches(): Observable<BranchInfo[]>;
  listTestimonials(): Observable<TestimonialItem[]>;

  listNavItems(): Observable<NavItem[]>;
  getStudioInfo(): Observable<StudioInfo>;
  listContactChannels(): Observable<ContactChannel[]>;

  listTrustMetrics(): Observable<TrustMetric[]>;
  listWhyChooseItems(): Observable<WhyChooseItem[]>;
  listBookingSteps(): Observable<BookingStep[]>;
}
