import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoMeta } from '../models/content.models';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(metaConfig: SeoMeta): void {
    this.title.setTitle(metaConfig.title);
    this.meta.updateTag({ name: 'description', content: metaConfig.description });

    if (metaConfig.keywords) {
      this.meta.updateTag({ name: 'keywords', content: metaConfig.keywords });
    }

    if (metaConfig.image) {
      this.meta.updateTag({ property: 'og:image', content: metaConfig.image });
    }

    this.meta.updateTag({ property: 'og:title', content: metaConfig.title });
    this.meta.updateTag({ property: 'og:description', content: metaConfig.description });

    if (metaConfig.canonicalUrl) {
      this.setCanonical(metaConfig.canonicalUrl);
    }
  }

  private setCanonical(url: string): void {
    const head = this.document.head;
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
