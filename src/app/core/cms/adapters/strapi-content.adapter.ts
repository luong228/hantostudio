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
import { StrapiEntity } from '../models/cms-response.models';
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
      description: `${cms.title} at Lumen Atelier.`
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
      title: `${cms.name} | Lumen Atelier`,
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
      title: `${cms.name} Pricing | Lumen Atelier`,
      description: cms.summary
    })
  };
}

export function mapStrapiPortfolio(entity: StrapiEntity<CmsPortfolioCollection>): PortfolioCollection {
  const cms = entity.attributes;
  return {
    id: String(entity.id),
    slug: cms.slug,
    title: cms.title,
    category: cms.category,
    coverImage: cms.coverImage?.url ?? '',
    teaser: cms.teaser,
    story: cms.story,
    imageCount: cms.imageCount,
    seo: mapCmsSeoToSeoMeta(cms.seo, {
      title: `${cms.title} | Portfolio | Lumen Atelier`,
      description: cms.teaser,
      image: cms.coverImage?.url
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
      title: `${cms.title} | Journal | Lumen Atelier`,
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
      title: `${cms.question} | FAQ | Lumen Atelier`,
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
