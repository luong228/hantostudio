import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-vinhomes-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vinhomes-landing.component.html',
  styleUrl: './vinhomes-landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VinhomesLandingComponent {
  private readonly seo = inject(SeoService);

  readonly faqs = [
    {
      q: 'Studio chụp hình tại Vinhomes Grand Park ở địa chỉ nào?',
      a: 'HANTO Studio đặt tại Tầng 3, T12-06, Khu Manhattan, Vinhomes Grand Park, Thủ Đức, TP.HCM — ngay trong khuôn viên khu đô thị, không cần di chuyển xa.'
    },
    {
      q: 'Chụp hình studio tại Vinhomes Grand Park giá bao nhiêu?',
      a: 'HANTO Studio có 3 gói: BASIC từ 1.299.000đ, VIP từ 2.299.000đ và LUXURY từ 3.999.000đ. Tất cả bao gồm makeup, styling, trang phục và ảnh đã retouch hoàn chỉnh.'
    },
    {
      q: 'Có cần đặt lịch trước khi đến chụp không?',
      a: 'Có, bạn nên đặt lịch trước để studio chuẩn bị ekip makeup, trang phục và set chụp phù hợp với nhu cầu của bạn. Đặt cọc 30% để giữ khung giờ.'
    },
    {
      q: 'Chụp hình studio tại Vinhomes Grand Park mất bao lâu?',
      a: 'Tùy gói: gói BASIC khoảng 90 phút, gói VIP khoảng 2 tiếng, gói LUXURY không giới hạn thời gian. Thời gian đã bao gồm makeup và thay trang phục.'
    },
    {
      q: 'Bao lâu thì nhận được ảnh sau buổi chụp?',
      a: 'Ảnh preview gửi sau 48 giờ để bạn chọn. Ảnh retouch hoàn chỉnh bàn giao trong 7 ngày làm việc kể từ khi xác nhận chọn ảnh.'
    },
    {
      q: 'Studio chụp được loại ảnh nào tại Vinhomes Grand Park?',
      a: 'HANTO Studio chuyên chụp chân dung cá nhân, profile LinkedIn/doanh nhân, ảnh gia đình, mẹ bầu, concept nghệ thuật và pre-wedding — tất cả trong môi trường studio kiểm soát ánh sáng chuyên nghiệp.'
    },
    {
      q: 'HANTO Studio có hỗ trợ trang phục và makeup không?',
      a: 'Có. Tất cả gói đều bao gồm trang phục từ tủ đồ studio và hướng dẫn styling. Gói VIP và LUXURY có thêm dịch vụ makeup chuyên nghiệp tại chỗ.'
    },
    {
      q: 'Chụp hình studio tại Vinhomes Grand Park có phù hợp với trẻ em không?',
      a: 'Rất phù hợp. Đội ngũ HANTO Studio có kinh nghiệm dẫn dắt trẻ em và gia đình có con nhỏ. Studio thiết kế quy trình linh hoạt để trẻ thoải mái và tự nhiên trong suốt buổi chụp.'
    }
  ];

  constructor() {
    this.seo.update({
      title: 'Chụp Hình Studio Tại Vinhomes Grand Park – HANTO Studio Thủ Đức',
      description: 'Studio chụp hình chuyên nghiệp tại Vinhomes Grand Park, Thủ Đức. Chụp chân dung, gia đình, profile, mẹ bầu, concept. Gói từ 1.299.000đ. Đặt lịch: 0396 887 597.',
      keywords: 'chụp hình studio vinhomes grand park, studio chụp ảnh vinhomes grand park, chụp ảnh thủ đức, studio chụp ảnh quận 9, chụp hình chân dung vinhomes',
      canonicalUrl: 'https://hantostudio.vn/chup-hinh-studio-vinhomes-grand-park',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80'
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://hantostudio.vn/#business',
          name: 'HANTO Studio',
          alternateName: 'HANTO Photography Studio',
          description: 'Studio chụp ảnh chân dung cao cấp tại Vinhomes Grand Park, Thủ Đức, TP.HCM. Chuyên chụp chân dung, gia đình, mẹ bầu, profile và concept.',
          url: 'https://hantostudio.vn',
          telephone: '+84396887597',
          email: 'hello@hantostudio.vn',
          image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
          priceRange: '₫₫',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Tầng 3, T12-06, Khu Manhattan',
            addressLocality: 'Vinhomes Grand Park',
            addressRegion: 'Thủ Đức, Hồ Chí Minh',
            postalCode: '700000',
            addressCountry: 'VN'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 10.845,
            longitude: 106.827
          },
          openingHoursSpecification: [
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '09:00', closes: '19:00' }
          ],
          hasMap: 'https://maps.google.com/?q=Vinhomes+Grand+Park+Thu+Duc',
          sameAs: ['https://www.facebook.com/profile.php?id=61591415732605']
        },
        {
          '@type': 'FAQPage',
          mainEntity: this.faqs.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a }
          }))
        },
        {
          '@type': 'Service',
          name: 'Chụp Hình Studio Tại Vinhomes Grand Park',
          provider: { '@type': 'LocalBusiness', name: 'HANTO Studio' },
          areaServed: 'Vinhomes Grand Park, Thủ Đức, TP.HCM',
          description: 'Dịch vụ chụp hình studio chuyên nghiệp: chân dung, gia đình, mẹ bầu, profile, concept nghệ thuật.',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '1299000',
            highPrice: '3999000',
            priceCurrency: 'VND',
            offerCount: '3'
          }
        }
      ]
    });
  }
}
