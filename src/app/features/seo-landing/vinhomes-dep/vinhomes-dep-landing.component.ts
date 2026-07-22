import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-vinhomes-dep-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vinhomes-dep-landing.component.html',
  styleUrl: './vinhomes-dep-landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VinhomesDepLandingComponent {
  private readonly seo = inject(SeoService);

  readonly faqs = [
    {
      q: 'Studio chụp ảnh đẹp ở Vinhomes Grand Park ở đâu?',
      a: 'HANTO Studio nằm tại Tầng 3, T12-06, Khu Manhattan, Vinhomes Grand Park, Thủ Đức - studio ánh sáng chuyên nghiệp ngay trong khu đô thị, không cần di chuyển xa để có bộ ảnh đẹp chuẩn chỉnh.'
    },
    {
      q: 'Điều gì làm cho ảnh chụp tại HANTO Studio đẹp hơn ngoài trời?',
      a: 'Ánh sáng studio được kiểm soát hoàn toàn, loại bỏ bóng cứng và màu sắc không đồng đều. Kết hợp với backdrop chuyên dụng và ekip dẫn dắt tạo dáng, từng khung hình đều cân xứng, sắc nét và đúng thần thái nhân vật.'
    },
    {
      q: 'Ảnh tại HANTO Studio được retouch như thế nào để đẹp?',
      a: 'Retouch tại HANTO Studio giữ làn da tự nhiên, không xóa quá tay - chỉnh màu theo tone nhất quán, làm mịn nhẹ và cân chỉnh sáng theo từng ảnh. Bạn nhận ảnh đẹp mà vẫn là chính mình.'
    },
    {
      q: 'Mình không biết tạo dáng thì có chụp ảnh đẹp được không?',
      a: 'Hoàn toàn được. Nhiếp ảnh gia HANTO Studio hướng dẫn góc mặt, dáng đứng và biểu cảm từng bước trong suốt buổi chụp. Đa số khách hàng không có kinh nghiệm chụp ảnh vẫn nhận được bộ ảnh đẹp tự nhiên, không gượng gạo.'
    },
    {
      q: 'Makeup ảnh hưởng thế nào đến việc ảnh có đẹp hay không?',
      a: 'Makeup phù hợp ánh sáng studio rất khác makeup ngoài trời. HANTO Studio có makeup artist chuyên làm makeup "for camera" - tông màu, highlight và contour được điều chỉnh để lens ghi lại chuẩn nhất, tránh bị bóng hoặc mất chi tiết.'
    },
    {
      q: 'Bao nhiêu ảnh đẹp tôi nhận được sau buổi chụp tại Vinhomes Grand Park?',
      a: 'Gói BASIC: 08 ảnh retouch hoàn chỉnh. Gói VIP: 15 ảnh retouch + bộ ảnh beauty. Gói LUXURY: 22 ảnh retouch + bộ ảnh beauty. Toàn bộ ảnh gốc (raw/JPEG) cũng được bàn giao để bạn lưu trữ.'
    },
    {
      q: 'Studio chụp ảnh đẹp ở Vinhomes Grand Park có nhiều kiểu phong cách không?',
      a: 'HANTO Studio có đa dạng backdrop và concept: tone sáng minimalist, tone trầm editorial, concept áo dài truyền thống, vintage, hiện đại tối giản và nhiều phong cách theo yêu cầu. Tư vấn viên sẽ giúp bạn chọn phong cách phù hợp nhất với mục đích sử dụng ảnh.'
    },
    {
      q: 'Chụp ảnh gia đình ở studio Vinhomes Grand Park có đẹp không khi có trẻ nhỏ?',
      a: 'Rất đẹp và tự nhiên. Ekip HANTO Studio có kinh nghiệm dẫn dắt trẻ em và gia đình - biết cách tạo không khí vui, thoải mái để trẻ không căng thẳng trước máy ảnh. Những khoảnh khắc tự nhiên nhất thường cho ra ảnh đẹp nhất.'
    }
  ];

  constructor() {
    this.seo.update({
      title: 'Studio Chụp Ảnh Đẹp Ở Vinhomes Grand Park – HANTO Studio',
      description: 'Studio chụp ảnh đẹp tại Vinhomes Grand Park, Thủ Đức. Ánh sáng chuyên nghiệp, makeup for camera, retouch tự nhiên. Ảnh chân dung, gia đình, profile. Từ 1.299.000đ.',
      keywords: 'studio chụp ảnh đẹp vinhomes grand park, chụp ảnh đẹp thủ đức, studio ảnh đẹp vinhomes, chụp hình đẹp vinhomes grand park, studio ảnh nghệ thuật vinhomes',
      canonicalUrl: 'https://hantostudio.vn/studio-chup-anh-dep-vinhomes-grand-park',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80'
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://hantostudio.vn/#business',
          name: 'HANTO Studio',
          alternateName: 'HANTO Photography Studio',
          description: 'Studio chụp ảnh đẹp chuyên nghiệp tại Vinhomes Grand Park, Thủ Đức, TP.HCM. Ánh sáng kiểm soát hoàn toàn, makeup for camera, retouch tự nhiên.',
          url: 'https://hantostudio.vn',
          telephone: '+84396887597',
          email: 'hantostudiobyhangtu@gmail.com',
          image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80',
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
          name: 'Studio Chụp Ảnh Đẹp Tại Vinhomes Grand Park',
          provider: { '@type': 'LocalBusiness', name: 'HANTO Studio' },
          areaServed: 'Vinhomes Grand Park, Thủ Đức, TP.HCM',
          description: 'Dịch vụ chụp ảnh đẹp tại studio: ánh sáng chuyên nghiệp, makeup for camera, retouch tự nhiên cho chân dung, gia đình, profile và concept nghệ thuật.',
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
