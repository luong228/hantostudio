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
    eyebrow: 'Studio chup anh chan dung cao cap',
    headline: 'Anh dep tu nhien, ro than thai, de su dung ngay.',
    subheadline: 'Chan dung, gia dinh, thai san va concept voi quy trinh ho tro tron buoi.',
    trustLine: '4.9/5 danh gia tu khach hang that va hon 8,500 buoi chup da thuc hien.',
    primaryCtaLabel: 'Dat lich ngay',
    primaryCtaRoute: '/lien-he',
    secondaryCtaLabel: 'Xem bang gia',
    secondaryCtaRoute: '/bang-gia',
    heroImage: '',
    heroImageAlt: ''
  };
}

function finalCtaDefaults(): FinalCtaContent {
  return {
    title: 'San sang chot lich chup?',
    subtitle: 'Gui yeu cau de studio tu van nhanh va de xuat goi phu hop.',
    primaryLabel: 'Dat lich voi studio',
    primaryRoute: '/lien-he',
    secondaryLabel: 'Xem dich vu',
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
      description: `${doc.title} at Lumen Atelier.`
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
      title: `${doc.name} | Lumen Atelier`,
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
      title: `${doc.name} Pricing | Lumen Atelier`,
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
      title: `${doc.title} | Portfolio | Lumen Atelier`,
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
      title: `${doc.title} | Journal | Lumen Atelier`,
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
      title: `${doc.question} | FAQ | Lumen Atelier`,
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
