# Payload Integration Notes

## Recommended Angular consumption mode
- Prefer REST collection endpoints for predictable querying and easy SSR hydration.

## REST endpoint patterns
- List: `GET /api/{collection}`
- Detail by slug: `GET /api/{collection}?where[slug][equals]={slug}`
- Page by path: `GET /api/pages?where[path][equals]=/contact`

## Mapping strategy in this app
- Payload documents are mapped through [src/app/core/cms/adapters/payload-content.adapter.ts](src/app/core/cms/adapters/payload-content.adapter.ts).
- Common SEO normalization uses [src/app/core/cms/adapters/seo-mapping.util.ts](src/app/core/cms/adapters/seo-mapping.util.ts).
- Repository abstraction keeps UI unchanged across providers.

## Payload collection recommendations
- Collections: `pages`, `services`, `pricing-packages`, `portfolio-collections`, `blog-posts`, `faq-items`, `branches`, `testimonials`.
- Shared SEO block with `metaTitle`, `metaDescription`, `metaKeywords`, `canonicalUrl`, `ogImage`.
- Add `slug` index and uniqueness on route-driven collections.
- Add access control rules so marketing editors can update content safely without touching code.
