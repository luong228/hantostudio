import { PageContent, SeoMeta } from '../models';

export function resolvePageSeo(page: PageContent | null, fallback: SeoMeta): SeoMeta {
  if (!page) {
    return fallback;
  }

  return {
    title: page.seo.title || fallback.title,
    description: page.seo.description || fallback.description,
    keywords: page.seo.keywords ?? fallback.keywords,
    image: page.seo.image ?? fallback.image,
    canonicalUrl: page.seo.canonicalUrl ?? fallback.canonicalUrl
  };
}

export function resolveDetailSeo(base: SeoMeta, fromContent?: SeoMeta): SeoMeta {
  if (!fromContent) {
    return base;
  }

  return {
    title: fromContent.title || base.title,
    description: fromContent.description || base.description,
    keywords: fromContent.keywords ?? base.keywords,
    image: fromContent.image ?? base.image,
    canonicalUrl: fromContent.canonicalUrl ?? base.canonicalUrl
  };
}
