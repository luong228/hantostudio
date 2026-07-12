# Strapi Integration Notes

## Recommended Angular consumption modes
- REST mode: use collection endpoints like `/api/services`, `/api/blog-posts` with `populate=deep` when media and nested SEO blocks are needed.
- GraphQL mode: use the Strapi GraphQL plugin and request only fields needed by each route to minimize payload size.

## REST endpoint patterns
- List: `GET /api/{collection}?populate=deep`
- Detail by slug: `GET /api/{collection}?filters[slug][$eq]={slug}&populate=deep`
- Single type page by path: `GET /api/pages?filters[path][$eq]=/services&populate=deep`

## Mapping strategy in this app
- Raw Strapi entities are mapped through [src/app/core/cms/adapters/strapi-content.adapter.ts](src/app/core/cms/adapters/strapi-content.adapter.ts).
- SEO is normalized through [src/app/core/cms/adapters/seo-mapping.util.ts](src/app/core/cms/adapters/seo-mapping.util.ts).
- Repository contract consumed by UI is [src/app/core/cms/repositories/studio-content.repository.ts](src/app/core/cms/repositories/studio-content.repository.ts).

## Strapi content-model recommendations
- Use `collection types` for Service, PricingPackage, PortfolioCollection, BlogPost, FAQItem, Branch, Testimonial.
- Use `collection type` Page for route pages (`path` and `slug` fields) and optional home blocks.
- Add a reusable component for SEO fields (metaTitle, metaDescription, metaKeywords, canonicalUrl, ogImage).
- Add `slug` with unique constraint for detail routes.
- Add Draft/Publish and locale support if multilingual pages are needed.
