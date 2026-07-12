import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  BLOG_POSTS,
  BOOKING_STEPS,
  BRANCHES,
  CONTACT_CHANNELS,
  FAQ_ITEMS,
  NAV_ITEMS,
  PAGES,
  PORTFOLIO_COLLECTIONS,
  PRICING_PLANS,
  SERVICES,
  STUDIO_INFO,
  TESTIMONIALS,
  TRUST_METRICS,
  WHY_CHOOSE_ITEMS
} from '../../data/mock-content.data';
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
import { StudioContentRepository } from './studio-content.repository';

@Injectable()
export class MockStudioContentRepository implements StudioContentRepository {
  listPages(): Observable<PageContent[]> {
    return of(PAGES);
  }

  getPageByPath(path: string): Observable<PageContent | null> {
    return of(PAGES.find((page) => page.path === path) ?? null);
  }

  listServices(): Observable<ServiceItem[]> {
    return of(SERVICES);
  }

  getServiceBySlug(slug: string): Observable<ServiceItem | null> {
    return of(SERVICES.find((item) => item.slug === slug) ?? null);
  }

  listPricingPackages(): Observable<PricingPlan[]> {
    return of(PRICING_PLANS);
  }

  listPortfolioCollections(): Observable<PortfolioCollection[]> {
    return of(PORTFOLIO_COLLECTIONS);
  }

  getPortfolioCollectionBySlug(slug: string): Observable<PortfolioCollection | null> {
    return of(PORTFOLIO_COLLECTIONS.find((item) => item.slug === slug) ?? null);
  }

  listBlogPosts(): Observable<BlogPost[]> {
    return of(BLOG_POSTS);
  }

  getBlogPostBySlug(slug: string): Observable<BlogPost | null> {
    return of(BLOG_POSTS.find((item) => item.slug === slug) ?? null);
  }

  listFaqItems(): Observable<FaqItem[]> {
    return of(FAQ_ITEMS);
  }

  listBranches(): Observable<BranchInfo[]> {
    return of(BRANCHES);
  }

  listTestimonials(): Observable<TestimonialItem[]> {
    return of(TESTIMONIALS);
  }

  listNavItems(): Observable<NavItem[]> {
    return of(NAV_ITEMS);
  }

  getStudioInfo(): Observable<StudioInfo> {
    return of(STUDIO_INFO);
  }

  listContactChannels(): Observable<ContactChannel[]> {
    return of(CONTACT_CHANNELS);
  }

  listTrustMetrics(): Observable<TrustMetric[]> {
    return of(TRUST_METRICS);
  }

  listWhyChooseItems(): Observable<WhyChooseItem[]> {
    return of(WHY_CHOOSE_ITEMS);
  }

  listBookingSteps(): Observable<BookingStep[]> {
    return of(BOOKING_STEPS);
  }
}
