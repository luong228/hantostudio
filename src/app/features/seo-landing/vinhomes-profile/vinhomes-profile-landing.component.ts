import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-vinhomes-profile-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vinhomes-profile-landing.component.html',
  styleUrl: './vinhomes-profile-landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VinhomesProfileLandingComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Chụp Ảnh Profile Cá Nhân Tại Quận 9 – HANTO Studio',
      description:
        'HANTO Studio – chụp ảnh profile cá nhân, doanh nhân cao cấp tại Quận 9, Vinhomes Grand Park. Ảnh LinkedIn, thương hiệu cá nhân, doanh nghiệp. Concept riêng. Đặt lịch ngay.',
      keywords:
        'chụp ảnh profile tại quận 9, chụp ảnh doanh nhân quận 9, chụp ảnh doanh nghiệp vinhomes grand park, chụp ảnh linkedin quận 9, HANTO Studio vinhomes grand park, chụp ảnh thương hiệu cá nhân thủ đức',
      canonicalUrl: `${environment.appBaseUrl}/chup-anh-profile-ca-nhan-quan-9`,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80'
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: 'Chụp Ảnh Profile Cá Nhân Tại Quận 9 – Bộ Ảnh Doanh Nhân Xứng Với Tầm Vóc Của Bạn',
          description:
            'HANTO Studio – chụp ảnh profile cá nhân, doanh nhân cao cấp tại Quận 9, Vinhomes Grand Park. Ảnh LinkedIn, thương hiệu cá nhân, doanh nghiệp.',
          author: { '@type': 'Organization', name: 'HANTO Studio' },
          publisher: {
            '@type': 'Organization',
            name: 'HANTO Studio',
            url: `${environment.appBaseUrl}`
          },
          datePublished: '2026-07-22',
          dateModified: '2026-07-22',
          url: `${environment.appBaseUrl}/chup-anh-profile-ca-nhan-quan-9`,
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80'
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Chụp ảnh profile doanh nhân mất bao lâu?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Một buổi chụp ảnh profile cá nhân tại HANTO Studio thường kéo dài 60–90 phút tùy gói. Bao gồm tư vấn concept, makeup và thời gian dẫn dắt tạo dáng.'
              }
            },
            {
              '@type': 'Question',
              name: 'Ảnh profile dùng cho LinkedIn có cần retouch không?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Có. Tất cả gói tại HANTO Studio đều bao gồm ảnh retouch hoàn chỉnh - chỉnh sáng, màu da, chi tiết nhỏ - nhưng giữ nguyên thần thái tự nhiên, không làm mất nhận diện của bạn.'
              }
            },
            {
              '@type': 'Question',
              name: 'HANTO Studio có chụp ảnh profile đồng bộ cho cả team công ty không?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Có. Studio nhận chụp ảnh profile đồng bộ cho team từ 3 người trở lên với gói doanh nghiệp riêng. Tất cả ảnh được retouch đồng bộ tone màu để sử dụng nhất quán trên website và tài liệu công ty.'
              }
            }
          ]
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${environment.appBaseUrl}/` },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${environment.appBaseUrl}/blog` },
            { '@type': 'ListItem', position: 3, name: 'Chụp ảnh profile cá nhân tại Quận 9' }
          ]
        }
      ]
    });
  }
}
