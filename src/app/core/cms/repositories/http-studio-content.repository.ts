import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  BlogPost,
  BookingStep,
  BranchInfo,
  ContactChannel,
  FaqItem,
  NavItem,
  PageContent,
  PricingPlan,
  ServiceItem,
  StudioInfo,
  TestimonialItem,
  TrustMetric,
  WhyChooseItem
} from '../../models';
import {
  mapPayloadBlog,
  mapPayloadBranch,
  mapPayloadFaq,
  mapPayloadPage,
  mapPayloadPricing,
  mapPayloadService,
  mapPayloadTestimonial
} from '../adapters/payload-content.adapter';
import {
  mapStrapiBlog,
  mapStrapiBranch,
  mapStrapiFaq,
  mapStrapiPage,
  mapStrapiPricing,
  mapStrapiService,
  mapStrapiTestimonial
} from '../adapters/strapi-content.adapter';
import {
  CmsBlogPost,
  CmsBranch,
  CmsFaqItem,
  CmsPage,
  CmsPricingPackage,
  CmsService,
  CmsTestimonial
} from '../models/cms-content.models';
import { PayloadCollectionResponse, StrapiCollectionResponse } from '../models/cms-response.models';
import { StudioContentRepository } from './studio-content.repository';

@Injectable()
export class HttpStudioContentRepository implements StudioContentRepository {
  private readonly http = inject(HttpClient);
  private readonly provider = environment.cms.provider;
  private readonly apiBaseUrl = environment.cms.apiBaseUrl;

  listPages(): Observable<PageContent[]> {
    if (this.provider === 'strapi') {
      return this.fetchStrapiCollection<CmsPage, PageContent>('pages', mapStrapiPage);
    }
    return this.fetchPayloadCollection<CmsPage, PageContent>('pages', mapPayloadPage);
  }

  getPageByPath(path: string): Observable<PageContent | null> {
    return this.listPages().pipe(map((items) => items.find((item) => item.path === path) ?? null));
  }

  listServices(): Observable<ServiceItem[]> {
    if (this.provider === 'strapi') {
      return this.fetchStrapiCollection<CmsService, ServiceItem>('services', mapStrapiService);
    }
    return this.fetchPayloadCollection<CmsService, ServiceItem>('services', mapPayloadService);
  }

  getServiceBySlug(slug: string): Observable<ServiceItem | null> {
    return this.listServices().pipe(map((items) => items.find((item) => item.slug === slug) ?? null));
  }

  listPricingPackages(): Observable<PricingPlan[]> {
    if (this.provider === 'strapi') {
      return this.fetchStrapiCollection<CmsPricingPackage, PricingPlan>('pricing-packages', mapStrapiPricing);
    }
    return this.fetchPayloadCollection<CmsPricingPackage, PricingPlan>('pricing-packages', mapPayloadPricing);
  }

  listBlogPosts(): Observable<BlogPost[]> {
    if (this.provider === 'strapi') {
      return this.fetchStrapiCollection<CmsBlogPost, BlogPost>('blog-posts', mapStrapiBlog);
    }
    return this.fetchPayloadCollection<CmsBlogPost, BlogPost>('blog-posts', mapPayloadBlog);
  }

  getBlogPostBySlug(slug: string): Observable<BlogPost | null> {
    return this.listBlogPosts().pipe(map((items) => items.find((item) => item.slug === slug) ?? null));
  }

  listFaqItems(): Observable<FaqItem[]> {
    if (this.provider === 'strapi') {
      return this.fetchStrapiCollection<CmsFaqItem, FaqItem>('faq-items', mapStrapiFaq);
    }
    return this.fetchPayloadCollection<CmsFaqItem, FaqItem>('faq-items', mapPayloadFaq);
  }

  listBranches(): Observable<BranchInfo[]> {
    if (this.provider === 'strapi') {
      return this.fetchStrapiCollection<CmsBranch, BranchInfo>('branches', mapStrapiBranch);
    }
    return this.fetchPayloadCollection<CmsBranch, BranchInfo>('branches', mapPayloadBranch);
  }

  listTestimonials(): Observable<TestimonialItem[]> {
    if (this.provider === 'strapi') {
      return this.fetchStrapiCollection<CmsTestimonial, TestimonialItem>('testimonials', mapStrapiTestimonial);
    }
    return this.fetchPayloadCollection<CmsTestimonial, TestimonialItem>('testimonials', mapPayloadTestimonial);
  }

  listNavItems(): Observable<NavItem[]> {
    return this.placeholder('navigation collection', [] as NavItem[]);
  }

  getStudioInfo(): Observable<StudioInfo> {
    return this.placeholder('studio information single type', {
      brandName: 'HANTO Studio',
      tagline: '',
      address: '',
      openingHours: '',
      phone: '',
      email: ''
    });
  }

  listContactChannels(): Observable<ContactChannel[]> {
    return this.placeholder('contact channels collection', [] as ContactChannel[]);
  }

  listTrustMetrics(): Observable<TrustMetric[]> {
    return this.placeholder('trust metrics collection', [] as TrustMetric[]);
  }

  listWhyChooseItems(): Observable<WhyChooseItem[]> {
    return this.placeholder('why choose us collection', [] as WhyChooseItem[]);
  }

  listBookingSteps(): Observable<BookingStep[]> {
    return this.placeholder('booking steps collection', [] as BookingStep[]);
  }

  private fetchStrapiCollection<TCms, TView>(
    endpoint: string,
    mapper: (item: { id: number; attributes: TCms }) => TView
  ): Observable<TView[]> {
    const params = new HttpParams().set('populate', 'deep');
    return this.http
      .get<StrapiCollectionResponse<TCms>>(`${this.apiBaseUrl}/${endpoint}`, { params })
      .pipe(
        map((response) => response.data.map(mapper)),
        catchError(() => of([]))
      );
  }

  private fetchPayloadCollection<TCms, TView>(endpoint: string, mapper: (doc: TCms) => TView): Observable<TView[]> {
    return this.http.get<PayloadCollectionResponse<TCms>>(`${this.apiBaseUrl}/${endpoint}`).pipe(
      map((response) => response.docs.map(mapper)),
      catchError(() => of([]))
    );
  }

  private placeholder<T>(source: string, fallback: T): Observable<T> {
    console.warn(`HTTP repository placeholder: map ${source} before disabling mock mode.`);
    return of(fallback);
  }
}
