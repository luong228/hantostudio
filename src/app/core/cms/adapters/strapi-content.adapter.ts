import {
  BlogPost,
  BranchInfo,
  FaqItem,
  FinalCtaContent,
  HomeHeroContent,
  PageContent,
  PricingPlan,
  ServiceItem,
  TestimonialItem
} from '../../models/content.models';
import {
  CmsBlogPost,
  CmsBranch,
  CmsFaqItem,
  CmsPage,
  CmsPricingPackage,
  CmsService,
  CmsTestimonial
} from '../models/cms-content.models';
import { StrapiEntity } from '../models/cms-response.models';
import { mapCmsSeoToSeoMeta } from './seo-mapping.util';

function heroDefaults(): HomeHeroContent {
  return {
    eyebrow: 'Studio chụp ảnh chân dung cao cấp',
    headline: 'Ảnh đẹp tự nhiên, rõ thần thái, dễ sử dụng ngay.',
    subheadline: 'Chân dung, gia đình, thai sản và concept với quy trình hỗ trợ trọn buổi.',
    trustLine: '4.9/5 đánh giá từ khách hàng thật và hơn 8.500 buổi chụp đã thực hiện.',
    primaryCtaLabel: 'Đặt lịch ngay',
    primaryCtaRoute: '/lien-he',
    secondaryCtaLabel: 'Xem bảng giá',
    secondaryCtaRoute: '/bang-gia',
    heroImage: '',
    heroImageAlt: ''
  };
}

function finalCtaDefaults(): FinalCtaContent {
  return {
    title: 'Sẵn sàng chốt lịch chụp?',
    subtitle: 'Gửi yêu cầu để studio tư vấn nhanh và đề xuất gói phù hợp.',
    primaryLabel: 'Đặt lịch với studio',
    primaryRoute: '/lien-he',
    secondaryLabel: 'Xem dịch vụ',
    secondaryRoute: '/dich-vu'
  };
}

export function mapStrapiPage(entity: StrapiEntity<CmsPage>): PageContent {
  const cms = entity.attributes;
  const hero = cms.home?.hero;
  const finalCta = cms.home?.finalCta;

  return {
    id: String(entity.id),
    slug: cms.slug,
    path: cms.path,
    title: cms.title,
    seo: mapCmsSeoToSeoMeta(cms.seo, {
      title: cms.title,
      description: `${cms.title} at HANTO Studio.`
    }),
    home: {
      hero: {
        ...heroDefaults(),
        eyebrow: hero?.eyebrow ?? heroDefaults().eyebrow,
        headline: hero?.headline ?? heroDefaults().headline,
        subheadline: hero?.subheadline ?? heroDefaults().subheadline,
        trustLine: hero?.trustLine ?? heroDefaults().trustLine,
        primaryCtaLabel: hero?.primaryCtaLabel ?? heroDefaults().primaryCtaLabel,
        primaryCtaRoute: hero?.primaryCtaRoute ?? heroDefaults().primaryCtaRoute,
        secondaryCtaLabel: hero?.secondaryCtaLabel ?? heroDefaults().secondaryCtaLabel,
        secondaryCtaRoute: hero?.secondaryCtaRoute ?? heroDefaults().secondaryCtaRoute,
        heroImage: hero?.heroImage?.url ?? heroDefaults().heroImage,
        heroImageAlt: hero?.heroImage?.alt ?? heroDefaults().heroImageAlt
      },
      finalCta: {
        ...finalCtaDefaults(),
        title: finalCta?.title ?? finalCtaDefaults().title,
        subtitle: finalCta?.subtitle ?? finalCtaDefaults().subtitle,
        primaryLabel: finalCta?.primaryLabel ?? finalCtaDefaults().primaryLabel,
        primaryRoute: finalCta?.primaryRoute ?? finalCtaDefaults().primaryRoute,
        secondaryLabel: finalCta?.secondaryLabel ?? finalCtaDefaults().secondaryLabel,
        secondaryRoute: finalCta?.secondaryRoute ?? finalCtaDefaults().secondaryRoute
      }
    }
  };
}

export function mapStrapiService(entity: StrapiEntity<CmsService>): ServiceItem {
  const cms = entity.attributes;
  return {
    id: String(entity.id),
    slug: cms.slug,
    name: cms.name,
    shortDescription: cms.shortDescription,
    description: cms.description,
    heroImage: cms.heroImage?.url ?? '',
    gallery: (cms.gallery ?? []).map((item) => item.url),
    startingPrice: cms.startingPrice,
    durationMinutes: cms.durationMinutes,
    badges: cms.badges ?? [],
    seo: mapCmsSeoToSeoMeta(cms.seo, {
      title: `${cms.name} | HANTO Studio`,
      description: cms.shortDescription,
      image: cms.heroImage?.url
    })
  };
}

export function mapStrapiPricing(entity: StrapiEntity<CmsPricingPackage>): PricingPlan {
  const cms = entity.attributes;
  return {
    id: String(entity.id),
    name: cms.name,
    price: cms.price,
    summary: cms.summary,
    idealFor: cms.idealFor,
    features: cms.features ?? [],
    highlighted: cms.highlighted,
    seo: mapCmsSeoToSeoMeta(cms.seo, {
      title: `${cms.name} Pricing | HANTO Studio`,
      description: cms.summary
    })
  };
}

export function mapStrapiBlog(entity: StrapiEntity<CmsBlogPost>): BlogPost {
  const cms = entity.attributes;
  return {
    id: String(entity.id),
    slug: cms.slug,
    title: cms.title,
    excerpt: cms.excerpt,
    content: cms.content,
    coverImage: cms.coverImage?.url ?? '',
    publishedAt: cms.publishedAt,
    readingMinutes: cms.readingMinutes,
    tags: cms.tags ?? [],
    seo: mapCmsSeoToSeoMeta(cms.seo, {
      title: `${cms.title} | Journal | HANTO Studio`,
      description: cms.excerpt,
      image: cms.coverImage?.url
    })
  };
}

export function mapStrapiFaq(entity: StrapiEntity<CmsFaqItem>): FaqItem {
  const cms = entity.attributes;
  return {
    id: String(entity.id),
    question: cms.question,
    answer: cms.answer,
    topic: cms.topic,
    seo: mapCmsSeoToSeoMeta(cms.seo, {
      title: `${cms.question} | FAQ | HANTO Studio`,
      description: cms.answer
    })
  };
}

export function mapStrapiBranch(entity: StrapiEntity<CmsBranch>): BranchInfo {
  const cms = entity.attributes;
  return {
    name: cms.name,
    address: cms.address,
    phone: cms.phone
  };
}

export function mapStrapiTestimonial(entity: StrapiEntity<CmsTestimonial>): TestimonialItem {
  const cms = entity.attributes;
  return {
    name: cms.name,
    sessionType: cms.sessionType,
    quote: cms.quote,
    rating: cms.rating
  };
}
