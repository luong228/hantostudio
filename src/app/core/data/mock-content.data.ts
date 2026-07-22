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
      keywords: 'studio chụp ảnh chân dung, chụp ảnh gia đình, ảnh mẹ bầu, studio chụp ảnh profile'
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
      description: 'Khám phá các dịch vụ chụp ảnh cao cấp được thiết kế riêng cho chân dung, câu chuyện gia đình, khoảnh khắc mẹ bầu và thương hiệu cá nhân.'
    }
  },
  {
    id: 'page-pricing',
    slug: 'pricing',
    path: '/bang-gia',
    title: 'Bảng Giá | HANTO Studio',
    seo: {
      title: 'Bảng Giá | HANTO Studio',
      description: 'Bảng giá minh bạch cho các gói chụp ảnh cao cấp bao gồm styling và chỉnh sửa ảnh.'
    }
  },
  {
    id: 'page-about',
    slug: 'about',
    path: '/about',
    title: 'Về Studio | HANTO Studio',
    seo: {
      title: 'Về Studio | HANTO Studio',
      description: 'Gặp gỡ đội ngũ và triết lý đằng sau trải nghiệm chụp ảnh ấm áp và cao cấp của chúng tôi.'
    }
  },
  {
    id: 'page-blog',
    slug: 'blog',
    path: '/blog',
    title: 'Nhật Ký Nhiếp Ảnh | HANTO Studio',
    seo: {
      title: 'Nhật Ký Nhiếp Ảnh | HANTO Studio',
      description: 'Những chia sẻ thực tế và cảm hứng để chuẩn bị cho buổi chụp ảnh thanh lịch và ý nghĩa.'
    }
  },
  {
    id: 'page-faq',
    slug: 'faq',
    path: '/cau-hoi-thuong-gap',
    title: 'Câu Hỏi Thường Gặp | HANTO Studio',
    seo: {
      title: 'Câu Hỏi Thường Gặp | HANTO Studio',
      description: 'Tìm câu trả lời về đặt lịch, quy trình buổi chụp, bảng giá và thời gian giao ảnh.'
    }
  },
  {
    id: 'page-contact',
    slug: 'contact',
    path: '/lien-he',
    title: 'Liên Hệ Và Đặt Lịch | HANTO Studio',
    seo: {
      title: 'Liên Hệ Và Đặt Lịch | HANTO Studio',
      description: 'Bắt đầu yêu cầu đặt lịch và lên kế hoạch cho buổi chụp ảnh với đội ngũ studio của chúng tôi.'
    }
  }
];

export const STUDIO_INFO: StudioInfo = {
  brandName: 'HANTO Studio',
  tagline: 'Studio chân dung nơi sự chân thật cảm xúc gặp gỡ nghệ thuật editorial.',
  address: 'Tầng 3 T12-06, Khu Manhattan, Vinhomes Grand Park, Thủ Đức, Hồ Chí Minh, Việt Nam',
  openingHours: 'Thứ 3 - Chủ Nhật, 09:00-19:00',
  phone: '0396 887 597',
  email: 'hello@hantostudio.vn'
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  { label: 'Điện thoại', value: STUDIO_INFO.phone, href: 'tel:0396887597' },
  { label: 'Email', value: STUDIO_INFO.email, href: 'mailto:hello@hantostudio.vn' },
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
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Trần Minh Khôi',
    sessionType: 'Chụp Gia đình',
    tag: 'Gia đình',
    quote: 'Cả gia đình mình đều rất thích không khí buổi chụp, các bé được chơi thoải mái mà vẫn có những khoảnh khắc đẹp tự nhiên.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Lê Hoàng Nam',
    sessionType: 'Chụp Profile',
    tag: 'Profile',
    quote: 'Ảnh profile rất ưng, sắc nét và chuyên nghiệp. Tư vấn trang phục, concept phù hợp với công việc mình theo đuổi.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'svc-portrait-signature',
    slug: 'chan-dung',
    name: 'Chụp Ảnh Chân Dung',
    shortDescription: 'Chân dung editorial cho profile cá nhân, thương hiệu cá nhân và kỷ niệm cột mốc.',
    description:
      'Gói chân dung chủ lực với quy trình makeup, styling, hướng dẫn tạo dáng và retouch cao cấp để bạn lên hình tự nhiên, sáng và đúng thần thái.',
    heroImage: '/images/chan-dung.png',
    gallery: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1100&q=80'
    ],
    startingPrice: 1290000,
    durationMinutes: 90,
    badges: ['Chân dung']
  },
  {
    id: 'svc-family-heirloom',
    slug: 'gia-dinh',
    name: 'Chụp Ảnh Gia Đình',
    shortDescription: 'Ảnh gia đình tự nhiên, cảm xúc và dễ để trẻ nhỏ hợp tác trong buổi chụp.',
    description:
      'Dịch vụ dành cho gia đình muốn giữ lại khoảnh khắc thật, đội ngũ điều tiết nhịp độ và nhịp điệu để ảnh đẹp mà vẫn tự nhiên.',
    heroImage: '/images/gia-dinh.png',
    gallery: [
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1519340333755-c5ac7d0f7f7e?auto=format&fit=crop&w=1100&q=80'
    ],
    startingPrice: 1290000,
    durationMinutes: 120,
    badges: ['Gia đình']
  },
  {
    id: 'svc-maternity-glow',
    slug: 'thai-san',
    name: 'Mẹ bầu',
    shortDescription: 'Nhóm buổi chụp concept với trang phục, bối cảnh và câu chuyện được thiết kế riêng.',
    description:
      'Phù hợp với khách hàng muốn bộ ảnh mang tính chủ đề rõ ràng: áo dài, mẹ bầu hoặc concept nghệ thuật với quy trình sản xuất trọn gói.',
    heroImage: '/images/thai-san.png',
    gallery: [
      'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1100&q=80'
    ],
    startingPrice: 1290000,
    durationMinutes: 100,
    badges: ['Mẹ bầu']
  },
  {
    id: 'svc-profile-linkedin',
    slug: 'profile-ca-nhan',
    name: 'Profile Cá Nhân & LinkedIn',
    shortDescription: 'Ảnh profile chuyên nghiệp dùng được ngay cho LinkedIn, website và hồ sơ doanh nghiệp.',
    description:
      'Buổi chụp ngắn gọn, tập trung vào 1–2 bộ trang phục, ánh sáng phòng thu và góc khuôn mặt tốt nhất. Kết quả là bộ ảnh tự tin, thân thiện và đáng tin cậy.',
    heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=80'
    ],
    startingPrice: 1290000,
    durationMinutes: 60,
    badges: ['Profile', 'Cá nhân']
  },
  {
    id: 'svc-concept-art',
    slug: 'concept-nghe-thuat',
    name: 'Concept Nghệ Thuật',
    shortDescription: 'Bộ ảnh mang chủ đề riêng biệt — áo dài, vintage, tối giản hay câu chuyện bạn muốn kể.',
    description:
      'Đội ngũ lên concept, chuẩn bị phục trang và bối cảnh theo yêu cầu. Phù hợp với khách hàng muốn một bộ ảnh mang dấu ấn nghệ thuật rõ ràng, không theo khuôn mẫu.',
    heroImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1100&q=80'
    ],
    startingPrice: 1290000,
    durationMinutes: 150,
    badges: ['Concept', 'Nghệ thuật']
  },
  {
    id: 'svc-pre-wedding',
    slug: 'pre-wedding',
    name: 'Pre-Wedding',
    shortDescription: 'Bộ ảnh cưới lãng mạn, tự nhiên — ghi lại cảm xúc trước ngày trọng đại.',
    description:
      'Buổi chụp pre-wedding tập trung vào sự kết nối và cảm xúc thật của hai người. Studio hỗ trợ từ chọn concept, phối trang phục đến dẫn dắt tương tác tự nhiên trước ống kính.',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1100&q=80'
    ],
    startingPrice: 1290000,
    durationMinutes: 180,
    badges: ['Cưới', 'Pre-wedding']
  }
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
      'Chụp 120 - 160 ảnh',
      '1 layout makeup và làm tóc dành cho nữ TIÊU CHUẨN',
      '1 layout trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '08 ảnh chỉnh sửa kỹ lưỡng',
      '1 background của HANTO Studio khách hàng lựa chọn',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Không gian và bối cảnh chụp',
      'Phụ kiện TIÊU CHUẨN',
      'Toàn bộ ảnh gốc',
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
      'Chụp 160 - 250 ảnh',
      '1 layout makeup và làm tóc dành cho nữ CHUYÊN NGHIỆP',
      '1 layout trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '15 ảnh chỉnh sửa kỹ lưỡng',
      '1 background của HANTO Studio khách hàng lựa chọn',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Không gian và bối cảnh chụp',
      'Toàn bộ ảnh gốc',
      'Phụ kiện CAO CẤP',
      'Tặng kèm Nail hoặc Lens + Bộ ảnh beauty'
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
      'Chụp ảnh không giới hạn',
      '1 layout makeup và làm tóc CAO CẤP dành cho nữ THEO YÊU CẦU',
      '2 layout trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '22 ảnh chỉnh sửa kỹ lưỡng',
      '1 background của HANTO Studio khách hàng lựa chọn',
      'Clip quay hậu trường đã edit',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Không gian và bối cảnh chụp',
      'Toàn bộ ảnh gốc',
      'Phụ kiện CAO CẤP',
      'Tặng kèm Nail + Lens',
      'Tặng kèm bộ ảnh beauty'
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
      'Chụp 80 - 120 ảnh',
      '1 layout makeup và làm tóc dành cho nam TIÊU CHUẨN',
      '1 layout trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '08 ảnh chỉnh sửa kỹ lưỡng',
      '1 background của HANTO Studio khách hàng lựa chọn',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Không gian và bối cảnh chụp',
      'Phụ kiện tiêu chuẩn',
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
      'Chụp 120-180 ảnh',
      '1 layout makeup và làm tóc dành cho nam CHUYÊN NGHIỆP',
      '1 layout trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '15 ảnh chỉnh sửa kỹ lưỡng',
      '1 background của HANTO Studio khách hàng lựa chọn',
      'Miễn phí chỉnh trang cho bé dưới 7 tuổi',
      'Clip quay hậu trường đã edit',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Không gian và bối cảnh chụp',
      'Phụ kiện CAO CẤP',
      'Toàn bộ ảnh gốc',
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
      'Chụp 80 - 120 ảnh',
      '2 layout makeup và làm tóc CHUYÊN NGHIỆP',
      '2 layout trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '15 ảnh chỉnh sửa kỹ lưỡng',
      '2 background của HANTO Studio khách hàng lựa chọn',
      'Miễn phí chỉnh trang cho bé dưới 7 tuổi',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Không gian và bối cảnh chụp',
      'Phụ kiện TIÊU CHUẨN',
      'Toàn bộ ảnh gốc',
      'Tặng kèm 1 ảnh in 30x40cm và 1 khung gỗ'
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
      'Chụp 120 - 160 ảnh',
      '3 layout makeup và làm tóc CHUYÊN NGHIỆP',
      '3 layout trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '15 ảnh chỉnh sửa kỹ lưỡng',
      '3 background của HANTO Studio khách hàng lựa chọn',
      'Miễn phí chỉnh trang cho bé dưới 7 tuổi',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Không gian và bối cảnh chụp',
      'Phụ kiện TIÊU CHUẨN',
      'Toàn bộ ảnh gốc',
      'Tặng kèm 1 ảnh in 30x40cm và 1 khung gỗ'
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
      'Chụp ảnh không giới hạn',
      '4 layout makeup và làm tóc CHUYÊN NGHIỆP',
      '4 layout trang phục của HANTO Studio chuẩn bị và phụ kiện kèm theo concept',
      '15 ảnh chỉnh sửa kỹ lưỡng',
      '4 background của HANTO Studio khách hàng lựa chọn',
      'Dịch vụ chăm sóc trước buổi chụp',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Không gian và bối cảnh chụp',
      'Phụ kiện TIÊU CHUẨN',
      'Toàn bộ ảnh gốc',
      'Tặng kèm 2 ảnh in 30x40cm và 2 khung gỗ'
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
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1400&q=80',
    publishedAt: '2026-07-22',
    readingMinutes: 8,
    tags: ['vinhomes', 'hướng-dẫn', 'địa-điểm'],
    route: '/studio-chup-anh-dep-vinhomes-grand-park'
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
