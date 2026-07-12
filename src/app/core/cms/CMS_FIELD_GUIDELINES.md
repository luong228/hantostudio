# CMS Field Guidelines

## Required content types and fields

### Page
- id, slug, path, title
- seo: metaTitle, metaDescription, metaKeywords, canonicalUrl, ogImage
- optional home blocks: hero and finalCta

### Service
- id, slug, name
- shortDescription, description
- heroImage, gallery[]
- startingPrice, durationMinutes, badges[]
- seo block

### PricingPackage
- id, name, price, summary, idealFor
- features[]
- highlighted
- seo block (optional)

### PortfolioCollection
- id, slug, title, category
- coverImage, teaser, story
- imageCount
- seo block

### BlogPost
- id, slug, title
- excerpt, content
- coverImage
- publishedAt, readingMinutes, tags[]
- seo block

### FAQItem
- id, question, answer, topic
- seo block (optional)

### Branch
- id, name, address, phone

### Testimonial
- id, name, sessionType, quote, rating

## CMS-managed vs frontend-managed
- CMS-managed: all route copy, SEO metadata, service/pricing/blog/portfolio/FAQ/testimonial content, branch details, hero/final CTA copy.
- Frontend-managed: route composition, animation timings, UI component variants, accessibility behavior, fallback defaults when CMS fields are missing.
