import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-vinhomes-gia-dinh-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vinhomes-gia-dinh-landing.component.html',
  styleUrl: './vinhomes-gia-dinh-landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VinhomesGiaDinhLandingComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Chụp Ảnh Gia Đình Tại Vinhomes Grand Park – HANTO Studio',
      description:
        'HANTO Studio – studio chụp ảnh gia đình tại Vinhomes Grand Park, Quận 9. Lưu giữ khoảnh khắc cả nhà bằng ảnh nghệ thuật ấm áp, chân thực. Đặt lịch ngay.',
      keywords:
        'chụp ảnh gia đình vinhomes grand park, chụp ảnh kỷ niệm cư dân vinhomes grand park, studio chụp ảnh gia đình quận 9, chụp ảnh gia đình thủ đức, HANTO Studio vinhomes grand park',
      canonicalUrl: `${environment.appBaseUrl}/chup-anh-gia-dinh-vinhomes-grand-park`,
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1200&q=80'
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: 'Chụp Ảnh Gia Đình Tại Vinhomes Grand Park – HANTO Studio',
          description:
            'HANTO Studio – studio chụp ảnh gia đình tại Vinhomes Grand Park, Quận 9. Lưu giữ khoảnh khắc cả nhà bằng ảnh nghệ thuật ấm áp, chân thực.',
          author: { '@type': 'Organization', name: 'HANTO Studio' },
          publisher: {
            '@type': 'Organization',
            name: 'HANTO Studio',
            url: `${environment.appBaseUrl}`
          },
          datePublished: '2026-07-22',
          dateModified: '2026-07-22',
          url: `${environment.appBaseUrl}/chup-anh-gia-dinh-vinhomes-grand-park`,
          image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1200&q=80'
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Chụp ảnh gia đình tại studio có cần đặt trước không?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Có. Đặt lịch trước ít nhất 3–5 ngày làm việc, đặt cọc 30% để giữ khung giờ.'
              }
            },
            {
              '@type': 'Question',
              name: 'Một buổi chụp ảnh gia đình kéo dài bao lâu?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Gói Basic khoảng 60–90 phút. Gói VIP và Luxury từ 90–150 phút, linh hoạt với gia đình có bé nhỏ.'
              }
            },
            {
              '@type': 'Question',
              name: 'Studio có chụp nhóm gia đình đông người không?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Có. HANTO Studio chụp được nhóm gia đình từ 2 đến 8–10 người, bao gồm cả gia đình 3 thế hệ.'
              }
            }
          ]
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${environment.appBaseUrl}/` },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${environment.appBaseUrl}/blog` },
            { '@type': 'ListItem', position: 3, name: 'Chụp ảnh gia đình tại Vinhomes Grand Park' }
          ]
        }
      ]
    });
  }
}
