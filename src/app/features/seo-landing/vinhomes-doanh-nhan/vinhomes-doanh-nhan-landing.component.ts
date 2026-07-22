import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-vinhomes-doanh-nhan-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vinhomes-doanh-nhan-landing.component.html',
  styleUrl: './vinhomes-doanh-nhan-landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VinhomesDoanhNhanLandingComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Chụp Ảnh Doanh Nhân Tại Vinhomes Grand Park – HANTO Studio',
      description:
        'HANTO Studio – chụp ảnh doanh nhân tại Vinhomes Grand Park. Bộ ảnh thương hiệu cá nhân cho CEO, founder, chuyên gia tại Quận 9. Concept riêng, editorial. Đặt lịch ngay.',
      keywords:
        'chụp ảnh doanh nhân vinhomes grand park, chụp ảnh doanh nhân quận 9, chụp ảnh CEO founder thủ đức, ảnh thương hiệu cá nhân vinhomes, HANTO Studio vinhomes grand park',
      canonicalUrl: `${environment.appBaseUrl}/chup-anh-doanh-nhan-vinhomes-grand-park`,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80'
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: 'Chụp Ảnh Doanh Nhân Tại Vinhomes Grand Park – Khi Hình Ảnh Là Một Phần Của Sự Nghiệp',
          description:
            'HANTO Studio – chụp ảnh doanh nhân tại Vinhomes Grand Park. Bộ ảnh thương hiệu cá nhân cho CEO, founder, chuyên gia tại Quận 9.',
          author: { '@type': 'Organization', name: 'HANTO Studio' },
          publisher: {
            '@type': 'Organization',
            name: 'HANTO Studio',
            url: `${environment.appBaseUrl}`
          },
          datePublished: '2026-07-22',
          dateModified: '2026-07-22',
          url: `${environment.appBaseUrl}/chup-anh-doanh-nhan-vinhomes-grand-park`,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80'
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Chụp ảnh doanh nhân tại HANTO Studio khác gì ảnh thẻ thông thường?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ảnh doanh nhân tại HANTO Studio được chụp theo phong cách editorial — concept riêng theo lĩnh vực nghề nghiệp, ánh sáng và góc máy thiết kế để toát lên vị thế và thần thái. Khác hoàn toàn với ảnh thẻ hay ảnh selfie.'
              }
            },
            {
              '@type': 'Question',
              name: 'Tôi có thể chụp ảnh doanh nhân buổi tối hoặc cuối tuần không?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Có. HANTO Studio mở cửa từ 09:00 đến 19:00 thứ 2 đến chủ nhật, kể cả cuối tuần — phù hợp với lịch bận rộn của doanh nhân.'
              }
            },
            {
              '@type': 'Question',
              name: 'Bộ ảnh doanh nhân có thể dùng cho mục đích gì?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'LinkedIn, website cá nhân, hồ sơ năng lực, pitch deck, tài liệu truyền thông, báo chí, mạng xã hội và bất kỳ kênh nào cần đại diện hình ảnh chuyên nghiệp.'
              }
            }
          ]
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${environment.appBaseUrl}/` },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${environment.appBaseUrl}/blog` },
            { '@type': 'ListItem', position: 3, name: 'Chụp ảnh doanh nhân tại Vinhomes Grand Park' }
          ]
        }
      ]
    });
  }
}
