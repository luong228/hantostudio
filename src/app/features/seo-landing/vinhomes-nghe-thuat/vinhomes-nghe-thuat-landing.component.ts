import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-vinhomes-nghe-thuat-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vinhomes-nghe-thuat-landing.component.html',
  styleUrl: './vinhomes-nghe-thuat-landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VinhomesNgheThuatLandingComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Studio Chụp Ảnh Nghệ Thuật Tại Vinhomes Grand Park – HANTO Studio',
      description: 'HANTO Studio – studio chụp ảnh nghệ thuật cao cấp ngay trong Vinhomes Grand Park, Quận 9. Chân dung cá nhân, gia đình, couple. Ánh sáng chuyên nghiệp, concept riêng, retouch tinh tế.',
      keywords: 'studio chụp ảnh vinhomes grand park, studio chụp ảnh quận 9, HANTO Studio vinhomes grand park, chụp ảnh chân dung nghệ thuật vinhomes, chụp ảnh gia đình vinhomes grand park, chụp ảnh couple quận 9',
      canonicalUrl: `${environment.appBaseUrl}/studio-chup-anh-nghe-thuat-vinhomes-grand-park`,
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80'
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: 'Studio Chụp Ảnh Nghệ Thuật Tại Vinhomes Grand Park – HANTO Studio',
          description: 'HANTO Studio – studio chụp ảnh nghệ thuật cao cấp ngay trong Vinhomes Grand Park, Quận 9.',
          author: { '@type': 'Organization', name: 'HANTO Studio' },
          publisher: {
            '@type': 'Organization',
            name: 'HANTO Studio',
            url: `${environment.appBaseUrl}`
          },
          datePublished: '2026-07-22',
          dateModified: '2026-07-22',
          url: `${environment.appBaseUrl}/studio-chup-anh-nghe-thuat-vinhomes-grand-park`,
          image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80'
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${environment.appBaseUrl}/` },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${environment.appBaseUrl}/blog` },
            { '@type': 'ListItem', position: 3, name: 'Studio chụp ảnh nghệ thuật tại Vinhomes Grand Park' }
          ]
        }
      ]
    });
  }
}
