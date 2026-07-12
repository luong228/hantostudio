import { CmsSeoField } from '../models/cms-content.models';
import { SeoMeta } from '../../models/content.models';

export function mapCmsSeoToSeoMeta(cmsSeo: CmsSeoField | undefined, fallback: SeoMeta): SeoMeta {
  if (!cmsSeo) {
    return fallback;
  }

  return {
    title: cmsSeo.metaTitle ?? fallback.title,
    description: cmsSeo.metaDescription ?? fallback.description,
    keywords: cmsSeo.metaKeywords ?? fallback.keywords,
    canonicalUrl: cmsSeo.canonicalUrl ?? fallback.canonicalUrl,
    image: cmsSeo.ogImage?.url ?? fallback.image
  };
}
