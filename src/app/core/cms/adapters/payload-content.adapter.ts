import {
  BlogPost,
  BranchInfo,
  FaqItem,
  FinalCtaContent,
  HomeHeroContent,
  PageContent,
  PortfolioCollection,
  PricingPlan,
  ServiceItem,
  TestimonialItem
} from '../../models/content.models';
import {
  CmsBlogPost,
  CmsBranch,
  CmsFaqItem,
  CmsPage,
  CmsPortfolioCollection,
  CmsPricingPackage,
  CmsService,
  CmsTestimonial
} from '../models/cms-content.models';
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

export function mapPayloadPage(doc: CmsPage): PageContent {
  const hero = doc.home?.hero;
  const finalCta = doc.home?.finalCta;

  return {
    id: doc.id,
    slug: doc.slug,
    path: doc.path,
    title: doc.title,
    seo: mapCmsSeoToSeoMeta(doc.seo, {
      title: doc.title,
      description: `${doc.title} at HANTO Studio.`
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

export function mapPayloadService(doc: CmsService): ServiceItem {
  return {
    id: doc.id,
    slug: doc.slug,
    name: doc.name,
    shortDescription: doc.shortDescription,
    description: doc.description,
    heroImage: doc.heroImage?.url ?? '',
    gallery: (doc.gallery ?? []).map((item) => item.url),
    startingPrice: doc.startingPrice,
    durationMinutes: doc.durationMinutes,
    badges: doc.badges ?? [],
    seo: mapCmsSeoToSeoMeta(doc.seo, {
      title: `${doc.name} | HANTO Studio`,
      description: doc.shortDescription,
      image: doc.heroImage?.url
    })
  };
}

export function mapPayloadPricing(doc: CmsPricingPackage): PricingPlan {
  return {
    id: doc.id,
    name: doc.name,
    price: doc.price,
    summary: doc.summary,
    idealFor: doc.idealFor,
    features: doc.features ?? [],
    highlighted: doc.highlighted,
    seo: mapCmsSeoToSeoMeta(doc.seo, {
      title: `${doc.name} Pricing | HANTO Studio`,
      description: doc.summary
    })
  };
}

export function mapPayloadPortfolio(doc: CmsPortfolioCollection): PortfolioCollection {
  return {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    category: doc.category,
    coverImage: doc.coverImage?.url ?? '',
    teaser: doc.teaser,
    story: doc.story,
    imageCount: doc.imageCount,
    seo: mapCmsSeoToSeoMeta(doc.seo, {
      title: `${doc.title} | Portfolio | HANTO Studio`,
      description: doc.teaser,
      image: doc.coverImage?.url
    })
  };
}

export function mapPayloadBlog(doc: CmsBlogPost): BlogPost {
  return {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt,
    content: doc.content,
    coverImage: doc.coverImage?.url ?? '',
    publishedAt: doc.publishedAt,
    readingMinutes: doc.readingMinutes,
    tags: doc.tags ?? [],
    seo: mapCmsSeoToSeoMeta(doc.seo, {
      title: `${doc.title} | Journal | HANTO Studio`,
      description: doc.excerpt,
      image: doc.coverImage?.url
    })
  };
}

export function mapPayloadFaq(doc: CmsFaqItem): FaqItem {
  return {
    id: doc.id,
    question: doc.question,
    answer: doc.answer,
    topic: doc.topic,
    seo: mapCmsSeoToSeoMeta(doc.seo, {
      title: `${doc.question} | FAQ | HANTO Studio`,
      description: doc.answer
    })
  };
}

export function mapPayloadBranch(doc: CmsBranch): BranchInfo {
  return {
    name: doc.name,
    address: doc.address,
    phone: doc.phone
  };
}

export function mapPayloadTestimonial(doc: CmsTestimonial): TestimonialItem {
  return {
    name: doc.name,
    sessionType: doc.sessionType,
    quote: doc.quote,
    rating: doc.rating
  };
}
