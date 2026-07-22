import { environment } from '../../../environments/environment';
import {
  BlogPost,
  BookingStep,
  BranchInfo,
  ContactChannel,
  FaqItem,
  PageContent,
  PricingPlan,
  ServiceItem,
  StudioInfo,
  TestimonialItem,
  TrustMetric,
  WhyChooseItem
} from '../models/content.models';
import { NavItem } from '../models/site.models';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dịch Vụ', route: '/dich-vu' },
  { label: 'Bảng Giá', route: '/bang-gia' },
  { label: 'Blog', route: '/blog' },
  { label: 'Câu Hỏi Thường Gặp', route: '/cau-hoi-thuong-gap' },
  { label: 'Liên Hệ', route: '/lien-he' }
];

export const PAGES: PageContent[] = [
  {
    id: 'page-home',
    slug: 'home',
    path: '/',
    title: 'HANTO Studio | Studio Chụp Ảnh Chân Dung Và Gia Đình Cao Cấp',
    seo: {
      title: 'HANTO Studio | Studio Chụp Ảnh Chân Dung Và Gia Đình Cao Cấp',
      description: 'Studio chụp ảnh chân dung, profile, gia đình, mẹ bầu và concept cao cấp với sự ấm áp và tinh tế.',
      keywords: 'studio chụp ảnh chân dung, chụp ảnh gia đình, ảnh mẹ bầu, studio chụp ảnh profile',
      canonicalUrl: `${environment.appBaseUrl}/`
    },
    home: {
      hero: {
        eyebrow: 'HANTO STUDIO',
        headline: 'Lưu Giữ Vẻ Đẹp',
        subheadline:
          'Mỗi bức ảnh là một dấu ấn của cảm xúc, được tạo nên bằng sự tinh tế và nghệ thuật.',
        trustLine: 'bằng giá trị vượt thời gian',
        primaryCtaLabel: 'Đặt lịch ngay',
        primaryCtaRoute: '/lien-he',
        secondaryCtaLabel: 'Xem bảng giá',
        secondaryCtaRoute: '/bang-gia',
        heroImage:
          'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
        heroImageAlt: 'Chân dung khách hàng trong buổi chụp ảnh studio cao cấp'
      },
      finalCta: {
        title: 'Sẵn sàng chốt lịch chụp phù hợp với bạn?',
        subtitle:
          'Nhận tư vấn nhanh trong ngày để chọn gói, concept và khung giờ tối ưu cho mục tiêu của bạn.',
        primaryLabel: 'Đặt lịch với studio',
        primaryRoute: '/lien-he',
        secondaryLabel: 'Xem toàn bộ dịch vụ',
        secondaryRoute: '/dich-vu'
      }
    }
  },
  {
    id: 'page-services',
    slug: 'services',
    path: '/dich-vu',
    title: 'Dịch Vụ Chụp Ảnh | HANTO Studio',
    seo: {
      title: 'Dịch Vụ Chụp Ảnh | HANTO Studio',
      description: 'Khám phá các dịch vụ chụp ảnh cao cấp được thiết kế riêng cho chân dung, câu chuyện gia đình, khoảnh khắc mẹ bầu và thương hiệu cá nhân.',
      canonicalUrl: `${environment.appBaseUrl}/dich-vu`
    }
  },
  {
    id: 'page-pricing',
    slug: 'pricing',
    path: '/bang-gia',
    title: 'Bảng Giá | HANTO Studio',
    seo: {
      title: 'Bảng Giá | HANTO Studio',
      description: 'Bảng giá minh bạch cho các gói chụp ảnh cao cấp bao gồm styling và chỉnh sửa ảnh.',
      canonicalUrl: `${environment.appBaseUrl}/bang-gia`
    }
  },
  {
    id: 'page-about',
    slug: 'about',
    path: '/about',
    title: 'Về Studio | HANTO Studio',
    seo: {
      title: 'Về Studio | HANTO Studio',
      description: 'Gặp gỡ đội ngũ và triết lý đằng sau trải nghiệm chụp ảnh ấm áp và cao cấp của chúng tôi.',
      canonicalUrl: `${environment.appBaseUrl}/about`
    }
  },
  {
    id: 'page-blog',
    slug: 'blog',
    path: '/blog',
    title: 'Nhật Ký Nhiếp Ảnh | HANTO Studio',
    seo: {
      title: 'Nhật Ký Nhiếp Ảnh | HANTO Studio',
      description: 'Những chia sẻ thực tế và cảm hứng để chuẩn bị cho buổi chụp ảnh thanh lịch và ý nghĩa.',
      canonicalUrl: `${environment.appBaseUrl}/blog`
    }
  },
  {
    id: 'page-faq',
    slug: 'faq',
    path: '/cau-hoi-thuong-gap',
    title: 'Câu Hỏi Thường Gặp | HANTO Studio',
    seo: {
      title: 'Câu Hỏi Thường Gặp | HANTO Studio',
      description: 'Tìm câu trả lời về đặt lịch, quy trình buổi chụp, bảng giá và thời gian giao ảnh.',
      canonicalUrl: `${environment.appBaseUrl}/cau-hoi-thuong-gap`
    }
  },
  {
    id: 'page-contact',
    slug: 'contact',
    path: '/lien-he',
    title: 'Liên Hệ Và Đặt Lịch | HANTO Studio',
    seo: {
      title: 'Liên Hệ Và Đặt Lịch | HANTO Studio',
      description: 'Bắt đầu yêu cầu đặt lịch và lên kế hoạch cho buổi chụp ảnh với đội ngũ studio của chúng tôi.',
      canonicalUrl: `${environment.appBaseUrl}/lien-he`
    }
  }
];

export const STUDIO_INFO: StudioInfo = {
  brandName: 'HANTO Studio',
  tagline: 'Studio chân dung nơi sự chân thật cảm xúc gặp gỡ nghệ thuật editorial.',
  address: 'Tầng 3 T12-06, Khu Manhattan, Vinhomes Grand Park, Thủ Đức, Hồ Chí Minh, Việt Nam',
  openingHours: 'Thứ 2 - Chủ Nhật, 09:00-19:00',
  phone: '0396 887 597',
  email: 'hantostudiobyhangtu@gmail.com'
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  { label: 'Điện thoại', value: STUDIO_INFO.phone, href: 'tel:0396887597' },
  { label: 'Email', value: STUDIO_INFO.email, href: 'mailto:hantostudiobyhangtu@gmail.com' },
  { label: 'Zalo', value: '@hantostudio', href: 'https://zalo.me/0396887597' },
  { label: 'Facebook', value: 'HANTO Studio Studio', href: 'https://www.facebook.com/profile.php?id=61591415732605' }
];

export const BRANCHES: BranchInfo[] = [
  {
    name: 'Vinhomes Grand Park, Thủ Đức',
    address: 'Cơ sở Vinhomes Grand Park',
    phone: '0396 887 597'
  }
];

export const TRUST_METRICS: TrustMetric[] = [
  { label: 'Mức độ hài lòng', value: '4.9 / 5', detail: 'từ đánh giá thực và khách hàng giới thiệu' },
  { label: 'Năm kinh nghiệm', value: '11+', detail: 'trực tiếp dẫn dắt buổi chụp chân dung mỗi tuần' },
  { label: 'Buổi chụp đã thực hiện', value: '8.500+', detail: 'chuyên gia, gia đình, nhà sáng lập và người sáng tạo' },
  { label: 'Studio đang hoạt động', value: '2', detail: 'được thiết kế cho ánh sáng kiểm soát và quy trình yên tĩnh' }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: 'Dẫn dáng & biểu cảm tự nhiên',
    description: 'Ekip hướng dẫn nhẹ nhàng qua từng giai đoạn để bạn luôn thoải mái, tự nhiên trước ống kính. Ảnh đẹp bắt đầu từ cảm xúc thật.',
    tag: 'Posing & Direction',
    stat: 'Hướng dẫn tận tâm suốt buổi chụp, giúp bạn tỏa sáng theo cách riêng.'
  },
  {
    title: 'Tư vấn trang phục trước buổi chụp',
    description: 'Gợi ý trang phục phù hợp với phong cách và concept, giúp bạn tự tin và nổi bật nhất trong từng khung hình.',
    tag: 'Styling Guidance',
    stat: 'Checklist trang phục cá nhân hóa được gửi trước buổi chụp.'
  },
  {
    title: 'Retouch tinh tế, giữ nét thật',
    description: 'Hậu kỳ kỹ lưỡng nhưng vẫn giữ trọn vẹp đẹp tự nhiên của bạn. Da mịn màng, bố cục hài hòa, mà vẫn là bạn — rạng rỡ và chân thật.',
    tag: 'Post-Production',
    stat: 'Mỗi ảnh đều được chỉnh sửa cẩn thận qua ít nhất 3 vòng kiểm tra chất lượng.'
  },
  {
    title: 'Quy trình rõ ràng, giao ảnh đúng hẹn',
    description: 'Lịch trình minh bạch từ lúc đặt lịch đến khi nhận ảnh. Chúng tôi luôn chủ động thông báo để bạn dễ dàng sắp xếp.',
    tag: 'Timeline & Delivery',
    stat: 'Preview trong 48h — nhận trọn bộ ảnh chỉ sau 7 ngày.'
  }
];

export const BOOKING_STEPS: BookingStep[] = [
  {
    step: '01',
    title: 'Tư vấn và thống nhất ý tưởng',
    description: 'Chúng tôi lắng nghe câu chuyện và mong muốn của bạn, từ đó tư vấn concept, phong cách và lên kế hoạch chụp phù hợp nhất.'
  },
  {
    step: '02',
    title: 'Ngày chụp với ekip hướng dẫn chi tiết',
    description: 'Ekip hỗ trợ từ trang phục, tạo dáng đến cảm xúc, giúp bạn thoải mái và tự tin để có những khoảnh khắc tự nhiên, đẹp nhất.'
  },
  {
    step: '03',
    title: 'Chọn ảnh và nhận bộ ảnh hoàn thiện',
    description: 'Bạn được xem và chọn những bức ảnh yêu thích. Chúng tôi chỉnh sửa tỉ mỉ và bàn giao sản phẩm chỉnh chu, đúng hẹn.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Nguyễn Thảo Linh',
    sessionType: 'Chụp Beauty',
    tag: 'Beauty',
    quote: 'Ảnh chụp lên quá đẹp và tự nhiên, đúng mood mình mong muốn. Ekip nhiệt tình, hướng dẫn rất nhẹ nhàng dù mình không biết tạo dáng.',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWkuY20VotlrKEjbx33BgPxkki4qowloKF_Roz006wSfZl_Xwy5=w72-h72-p-rp-mo-br100'
  },
  {
    name: 'Xuân Thu',
    sessionType: 'Chụp Gia đình',
    tag: 'Gia đình',
    quote: 'Cả gia đình mình đều rất thích không khí buổi chụp, các bé được chơi thoải mái mà vẫn có những khoảnh khắc đẹp tự nhiên.',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjVYiLZGcCxv04EDLX9oC7SoNQ-QZybLCjT2ohytTlAsePDDMIfh=w72-h72-p-rp-mo-br100'
  },
  {
    name: 'Huỳnh Thiên Long',
    sessionType: 'Chụp Profile',
    tag: 'Profile',
    quote: 'Ảnh profile rất ưng, sắc nét và chuyên nghiệp. Tư vấn trang phục, concept phù hợp với công việc mình theo đuổi.',
    rating: 5,
    image: '/images/ca-nhan.jpg'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'svc-portrait-signature',
    slug: 'chan-dung',
    name: 'Chụp Ảnh Chân Dung',
    shortDescription: 'Chân dung editorial — profile & thương hiệu.',
    description:
      'Gói chân dung chủ lực với quy trình makeup, styling, hướng dẫn tạo dáng và retouch cao cấp để bạn lên hình tự nhiên, sáng và đúng thần thái.',
    heroImage: '/images/chan-dung2.jpg',
    gallery: [
      '/images/chan-dung.jpg',
      '/images/chan-dung1.jpg',
    ],
    startingPrice: 1299000,
    durationMinutes: 90,
    badges: ['Chân dung']
  },
  {
    id: 'svc-doanh-nhan',
    slug: 'doanh-nhan',
    name: 'Doanh Nhân',
    shortDescription: 'Ảnh profile doanh nhân — tự tin, chuyên nghiệp, đúng tầm vóc.',
    description:
      'Gói chụp ảnh chuyên biệt cho doanh nhân, giám đốc và chuyên gia muốn có bộ ảnh profile thương hiệu cá nhân cao cấp. Tư vấn concept riêng theo lĩnh vực, ánh sáng editorial, retouch tinh tế giữ nguyên thần thái. Phù hợp cho LinkedIn, website công ty, hồ sơ năng lực và tài liệu truyền thông.',
    heroImage: '/images/doanh-nhan.jpg',
    gallery: [
      '/images/doanh-nhan1.jpg',
    ],
    startingPrice: 1299000,
    durationMinutes: 90,
    badges: ['Doanh nhân', 'Profile']
  },
  {
    id: 'svc-family-heirloom',
    slug: 'gia-dinh',
    name: 'Chụp Ảnh Gia Đình',
    shortDescription: 'Ảnh gia đình tự nhiên, thân thiện trẻ nhỏ.',
    description:
      'Dịch vụ dành cho gia đình muốn giữ lại khoảnh khắc thật, đội ngũ điều tiết nhịp độ và nhịp điệu để ảnh đẹp mà vẫn tự nhiên.',
    heroImage: '/images/me-bau1.jpg',
    gallery: [
     '/images/me-bau1.jpg',
    ],
    startingPrice: 1299000,
    durationMinutes: 120,
    badges: ['Gia đình']
  },
  {
    id: 'svc-profile',
    slug: 'profile-ca-nhan',
    name: 'Profile Cá Nhân',
    shortDescription: 'Ảnh profile chuyên nghiệp cho cá nhân & website.',
    description:
      'Buổi chụp ngắn gọn, tập trung vào 1–2 bộ trang phục, ánh sáng phòng thu và góc khuôn mặt tốt nhất. Kết quả là bộ ảnh tự tin, thân thiện và đáng tin cậy.',
    heroImage: '/images/ca-nhan.jpg',
    gallery: [
      '/images/ca-nhan1.jpg',
    ],
    startingPrice: 1299000,
    durationMinutes: 60,
    badges: ['Profile', 'Cá nhân']
  },
  {
    id: 'svc-concept-art',
    slug: 'concept-nghe-thuat',
    name: 'Concept Nghệ Thuật',
    shortDescription: 'Bộ ảnh theo concept & chủ đề riêng.',
    description:
      'Đội ngũ lên concept, chuẩn bị phục trang và bối cảnh theo yêu cầu. Phù hợp với khách hàng muốn một bộ ảnh mang dấu ấn nghệ thuật rõ ràng, không theo khuôn mẫu.',
    heroImage: '/images/nghe-thuat.jpg',
    gallery: [
      
    ],
    startingPrice: 1299000,
    durationMinutes: 150,
    badges: ['Concept', 'Nghệ thuật']
  },
  {
    id: 'svc-maternity-glow',
    slug: 'thai-san',
    name: 'Mẹ bầu',
    shortDescription: 'Ảnh mẹ bầu nhẹ nhàng, đầy cảm xúc.',
    description:
      'Phù hợp với khách hàng muốn bộ ảnh mang tính chủ đề rõ ràng: áo dài, mẹ bầu hoặc concept nghệ thuật với quy trình sản xuất trọn gói.',
    heroImage: '/images/me-bau.jpg',
    gallery: [
      '/images/me-bau1.jpg',
      '/images/me-bau2.jpg'
    ],
    startingPrice: 1299000,
    durationMinutes: 100,
    badges: ['Mẹ bầu']
  },
  {
    id: 'svc-sinh-nhat',
    slug: 'sinh-nhat',
    name: 'Sinh nhật',
    shortDescription: 'Ảnh sinh nhật đẹp trước ngày trọng đại.',
    description:
      'Buổi chụp sinh nhật tập trung vào sự kết nối và cảm xúc thật của hai người. Studio hỗ trợ từ chọn concept, phối trang phục đến dẫn dắt tương tác tự nhiên trước ống kính.',
      heroImage: '/images/sinh-nhat.jpg',
      gallery: [
      '/images/sinh-nhat1.jpg',
    ],
    startingPrice: 1299000,
    durationMinutes: 180,
    badges: ['Sinh nhật']
  },
  
];

export const PRICING_PLANS: PricingPlan[] = [
  // ── Nữ ──────────────────────────────────────────────────────────────────
  {
    id: 'nu-basic',
    name: 'BASIC',
    price: 1299000,
    summary: 'Ghi lại những khoảnh khắc đẹp tự nhiên, nhẹ nhàng và trong trẻo.',
    idealFor: 'Chụp cá nhân, chân dung cơ bản',
    category: 'nu',
    features: [
      'Chụp <mark>120 - 160 ảnh</mark>',
      'Layout makeup và làm tóc dành cho nữ <mark>TIÊU CHUẨN</mark>',
      '<mark>1 layout</mark> trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '<mark>08 ảnh</mark> chỉnh sửa kỹ lưỡng',
      '1 background của HANTO Studio khách hàng lựa chọn',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Toàn bộ ảnh gốc',
      'Phụ kiện <mark>TIÊU CHUẨN</mark>',
    ],
  },
  {
    id: 'nu-vip',
    name: 'VIP',
    price: 2299000,
    summary: 'Kể câu chuyện của bạn qua từng khung hình tinh tế và cảm xúc.',
    idealFor: 'Kể câu chuyện sâu sắc hơn, nhiều góc cạnh',
    category: 'nu',
    highlighted: true,
    features: [
      'Chụp <mark>160 - 250 ảnh</mark>',
      'Layout makeup và làm tóc dành cho nữ <mark>CHUYÊN NGHIỆP</mark>',
      '<mark>1 layout</mark> trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '<mark>15 ảnh</mark> chỉnh sửa kỹ lưỡng',
      '1 background của HANTO Studio khách hàng lựa chọn',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Toàn bộ ảnh gốc',
      'Phụ kiện <mark>CAO CẤP</mark>',
      'Tặng kèm <mark>Nail hoặc Lens</mark>',
      'Tặng kèm <mark>Bộ ảnh beauty</mark>'
    ],
  },
  {
    id: 'nu-luxury',
    name: 'LUXURY',
    price: 3999000,
    summary: 'Trải nghiệm cao cấp – Tôn vinh vẻ đẹp rạng rỡ và đẳng cấp của bạn.',
    idealFor: 'Gói cao cấp hoàn hảo cho chân dung nghệ thuật',
    category: 'nu',
    features: [
      'Chụp ảnh <mark>không giới hạn</mark>',
      'Layout makeup và làm tóc <mark>CAO CẤP</mark> dành cho nữ <mark>THEO YÊU CẦU</mark>',
      '<mark>2 layout</mark> trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '<mark>22 ảnh</mark> chỉnh sửa kỹ lưỡng',
      '1 background của HANTO Studio khách hàng lựa chọn',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Toàn bộ ảnh gốc',
      '<mark>Clip quay hậu trường đã edit</mark>',
      'Phụ kiện <mark>CAO CẤP</mark>',
      'Tặng kèm <mark>Nail + Lens</mark>',
      'Tặng kèm <mark>bộ ảnh beauty</mark>'
    ],
  },

  // ── Nam ──────────────────────────────────────────────────────────────────
  {
    id: 'nam-vip',
    name: 'VIP',
    price: 999000,
    summary: 'Phong cách nam tính, tự tin – từng khoảnh khắc đều toát lên cá tính.',
    idealFor: 'Chụp cá nhân, chân dung nam chuyên nghiệp',
    category: 'nam',
    features: [
      'Chụp <mark>80 - 120 ảnh</mark>',
      'Layout makeup và làm tóc dành cho nam <mark>TIÊU CHUẨN</mark>',
      'Layout trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '<mark>08 ảnh</mark> chỉnh sửa kỹ lưỡng',
      '1 background của HANTO Studio khách hàng lựa chọn',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Phụ kiện <mark>TIÊU CHUẨN</mark>',
      'Toàn bộ ảnh gốc',
    ],
  },
  {
    id: 'nam-luxury',
    name: 'LUXURY',
    price: 1599000,
    summary: 'Đẳng cấp và tinh tế – tôn vinh phong thái riêng của người đàn ông.',
    idealFor: 'Gói cao cấp cho chân dung nam nghệ thuật',
    category: 'nam',
    highlighted: true,
    features: [
      'Chụp <mark>120-180 ảnh</mark>',
      'Layout makeup và làm tóc dành cho nam <mark>CHUYÊN NGHIỆP</mark>',
      'Layout trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '<mark>15 ảnh</mark> chỉnh sửa kỹ lưỡng',
      '1 background của HANTO Studio khách hàng lựa chọn',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Phụ kiện <mark>CAO CẤP</mark>',
      'Toàn bộ ảnh gốc',
      '<mark>Clip quay hậu trường đã edit</mark>',
    ],
  },

  // ── Gia đình ─────────────────────────────────────────────────────────────
  {
    id: 'giadinh-2',
    name: '2 NGƯỜI',
    price: 2239000,
    summary: 'Khoảnh khắc ngọt ngào của hai trái tim trong cùng một khung hình.',
    idealFor: 'Cặp đôi, gia đình 2 thành viên',
    category: 'gia-dinh',
    features: [
      'Chụp <mark>80 - 120 ảnh</mark>',
      '<mark>2 layout</mark> makeup và làm tóc <mark>CHUYÊN NGHIỆP</mark>',
      '<mark>2 layout</mark> trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '<mark>15 ảnh</mark> chỉnh sửa kỹ lưỡng',
      '<mark>2 background</mark> của HANTO Studio khách hàng lựa chọn',
      '<mark>Miễn phí chỉnh trang cho bé dưới 7 tuổi</mark>',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Phụ kiện <mark>TIÊU CHUẨN</mark>',
      'Toàn bộ ảnh gốc',
      'Tặng kèm <mark>1 ảnh in 30x40cm</mark>',
      'Tặng kèm <mark>1 khung gỗ</mark>'
    ],
  },
  {
    id: 'giadinh-3',
    name: '3 NGƯỜI',
    price: 3239000,
    summary: 'Yêu thương trọn vẹn – lưu giữ từng khoảnh khắc của cả gia đình.',
    idealFor: 'Gia đình 3 thành viên',
    category: 'gia-dinh',
    highlighted: true,
    features: [
      'Chụp <mark>120 - 160 ảnh</mark>',
      '<mark>3 layout</mark> makeup và làm tóc <mark>CHUYÊN NGHIỆP</mark>',
      '<mark>3 layout</mark> trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '<mark>15 ảnh</mark> chỉnh sửa kỹ lưỡng',
      '<mark>3 background</mark> của HANTO Studio khách hàng lựa chọn',
      '<mark>Miễn phí chỉnh trang cho bé dưới 7 tuổi</mark>',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Phụ kiện <mark>TIÊU CHUẨN</mark>',
      'Toàn bộ ảnh gốc',
      'Tặng kèm <mark>1 ảnh in 30x40cm</mark>',
      'Tặng kèm <mark>1 khung gỗ</mark>'
    ],
  },
  {
    id: 'giadinh-4',
    name: '4 NGƯỜI',
    price: 4239000,
    summary: 'Ký ức gia đình đong đầy cảm xúc – trân trọng từng khoảnh khắc bên nhau.',
    idealFor: 'Gia đình 4 thành viên trở lên',
    category: 'gia-dinh',
    features: [
      'Chụp ảnh <mark>không giới hạn</mark>',
      '<mark>4 layout</mark> makeup và làm tóc <mark>CHUYÊN NGHIỆP</mark>',
      '<mark>4 layout</mark> trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '<mark>15 ảnh</mark> chỉnh sửa kỹ lưỡng',
      '<mark>4 background</mark> của HANTO Studio khách hàng lựa chọn',
      '<mark>Miễn phí chỉnh trang cho bé dưới 7 tuổi</mark>',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Phụ kiện <mark>TIÊU CHUẨN</mark>',
      'Toàn bộ ảnh gốc',
      'Tặng kèm <mark>2 ảnh in 30x40cm</mark>',
      'Tặng kèm <mark>2 khung gỗ</mark>'
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  // ── SEO landing pages ────────────────────────────────────────────────────────
  {
    id: 'seo-vinhomes-dep',
    slug: 'studio-chup-anh-dep-vinhomes-grand-park',
    title: 'Studio Chụp Ảnh Đẹp Ở Vinhomes Grand Park — Hướng Dẫn Đầy Đủ',
    excerpt:
      'Tất cả những gì bạn cần biết trước khi đặt lịch tại studio chụp ảnh đẹp ở Vinhomes Grand Park: ánh sáng, makeup, tạo dáng và cách chọn gói phù hợp.',
    content: '',
    coverImage:
      'https://s6.imgcdn.dev/YHNyi0.jpg',
    publishedAt: '2026-07-22',
    readingMinutes: 8,
    tags: ['vinhomes', 'hướng-dẫn', 'địa-điểm'],
    route: '/studio-chup-anh-dep-vinhomes-grand-park'
  },
  {
    id: 'seo-vinhomes-nghe-thuat',
    slug: 'studio-chup-anh-nghe-thuat-vinhomes-grand-park',
    title: 'Studio Chụp Ảnh Nghệ Thuật Tại Vinhomes Grand Park – HANTO Studio',
    excerpt:
      'HANTO Studio – studio chụp ảnh nghệ thuật cao cấp ngay trong Vinhomes Grand Park, Quận 9. Chân dung cá nhân, gia đình, couple. Ánh sáng chuyên nghiệp, concept riêng, retouch tinh tế.',
    content: '',
    coverImage:
      'https://s6.imgcdn.dev/YHNyi0.jpg',
    publishedAt: '2026-07-22',
    readingMinutes: 8,
    tags: ['vinhomes', 'nghệ-thuật', 'chân-dung', 'gia-đình'],
    route: '/studio-chup-anh-nghe-thuat-vinhomes-grand-park'
  },
  {
    id: 'seo-vinhomes-gia-dinh',
    slug: 'chup-anh-gia-dinh-vinhomes-grand-park',
    title: 'Chụp Ảnh Gia Đình Tại Vinhomes Grand Park – HANTO Studio',
    excerpt:
      'HANTO Studio – studio chụp ảnh gia đình tại Vinhomes Grand Park, Quận 9. Lưu giữ khoảnh khắc cả nhà bằng ảnh nghệ thuật ấm áp, chân thực. Ekip kiên nhẫn, phù hợp cả trẻ nhỏ.',
    content: '',
    coverImage:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1400&q=80',
    publishedAt: '2026-07-22',
    readingMinutes: 9,
    tags: ['vinhomes', 'gia-đình', 'kỷ-niệm', 'trẻ-em'],
    route: '/chup-anh-gia-dinh-vinhomes-grand-park'
  },
  {
    id: 'seo-profile-quan-9',
    slug: 'chup-anh-profile-ca-nhan-quan-9',
    title: 'Chụp Ảnh Profile Cá Nhân Tại Quận 9 – HANTO Studio',
    excerpt:
      'HANTO Studio – chụp ảnh profile cá nhân, doanh nhân cao cấp tại Quận 9. Ảnh LinkedIn, thương hiệu cá nhân, đồng bộ team. Concept riêng, retouch tinh tế. Đặt lịch ngay.',
    content: '',
    coverImage:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=80',
    publishedAt: '2026-07-22',
    readingMinutes: 8,
    tags: ['profile', 'doanh-nhân', 'linkedin', 'thương-hiệu-cá-nhân'],
    route: '/chup-anh-profile-ca-nhan-quan-9'
  },
  {
    id: 'seo-doanh-nhan-vinhomes',
    slug: 'chup-anh-doanh-nhan-vinhomes-grand-park',
    title: 'Chụp Ảnh Doanh Nhân Tại Vinhomes Grand Park – HANTO Studio',
    excerpt:
      'HANTO Studio – chụp ảnh doanh nhân, CEO, founder tại Vinhomes Grand Park. Bộ ảnh thương hiệu cá nhân cao cấp — editorial, concept riêng, tone nhất quán. Đặt lịch ngay.',
    content: '',
    coverImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=80',
    publishedAt: '2026-07-22',
    readingMinutes: 9,
    tags: ['doanh-nhân', 'vinhomes', 'thương-hiệu-cá-nhân', 'executive'],
    route: '/chup-anh-doanh-nhan-vinhomes-grand-park'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-booking-deposit',
    question: 'Đặt lịch chụp như thế nào?',
    answer: 'Đặt cọc 30% để giữ lịch. Studio sẽ khóa khung giờ và gửi checklist chuẩn bị ngay sau khi xác nhận.',
    topic: 'booking'
  },
  {
    id: 'faq-session-duration',
    question: 'Có cần đặt cọc trước không?',
    answer: 'Có. Mức cọc 30% giúp studio bố trí ekip, makeup và set chụp theo lịch của bạn.',
    topic: 'pricing'
  },
  {
    id: 'faq-turnaround',
    question: 'Bao lâu nhận ảnh?',
    answer: 'Ảnh preview gửi sau 2-3 ngày. Ảnh retouch bản chính được bàn giao trong 7-10 ngày làm việc.',
    topic: 'delivery'
  },
  {
    id: 'faq-locations',
    question: 'Studio có chụp ở đâu?',
    answer: 'Hiện có 1 chi nhánh tại Vinhomes Grand Park Quận 9, đồng thời hỗ trợ concept ngoại cảnh theo yêu cầu.',
    topic: 'session'
  }
];
