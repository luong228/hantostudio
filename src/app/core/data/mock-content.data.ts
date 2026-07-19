import {
  BlogPost,
  BookingStep,
  BranchInfo,
  ContactChannel,
  FaqItem,
  PageContent,
  PortfolioCollection,
  PricingPlan,
  ServiceItem,
  StudioInfo,
  TestimonialItem,
  TrustMetric,
  WhyChooseItem
} from '../models/content.models';
import { NavItem } from '../models/site.models';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dich Vu', route: '/dich-vu' },
  { label: 'Bang Gia', route: '/bang-gia' },
  { label: 'Bo Suu Tap', route: '/bo-suu-tap' },
  { label: 'Blog', route: '/blog' },
  { label: 'Cau Hoi Thuong Gap', route: '/cau-hoi-thuong-gap' },
  { label: 'Lien He', route: '/lien-he' }
];

export const PAGES: PageContent[] = [
  {
    id: 'page-home',
    slug: 'home',
    path: '/',
    title: 'Lumen Atelier | Premium Portrait And Family Photography Studio',
    seo: {
      title: 'Lumen Atelier | Premium Portrait And Family Photography Studio',
      description: 'Premium portrait, profile, family, maternity, and concept photography crafted with warmth and precision.',
      keywords: 'portrait studio, family photography, maternity photos, profile photo studio'
    },
    home: {
      hero: {
        eyebrow: 'Studio chup anh chan dung cao cap',
        headline: 'Anh dep tu nhien, ro than thai, de ung dung ngay cho cong viec va ky niem gia dinh.',
        subheadline:
          'Ban khong can biet tao dang. Doi ngu se huong dan posing, makeup, styling va flow buoi chup de anh vua dep vua that nhu ban.',
        trustLine: '4.9/5 danh gia tu khach hang that, hon 8,500 buoi chup da thuc hien.',
        primaryCtaLabel: 'Dat lich ngay',
        primaryCtaRoute: '/lien-he',
        secondaryCtaLabel: 'Xem bang gia',
        secondaryCtaRoute: '/bang-gia',
        heroImage:
          'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
        heroImageAlt: 'Client portrait during a premium studio photography session'
      },
      finalCta: {
        title: 'San sang chot lich chup phu hop voi ban?',
        subtitle:
          'Nhan tu van nhanh trong ngay de chon goi, concept va khung gio toi uu cho muc tieu cua ban.',
        primaryLabel: 'Dat lich voi studio',
        primaryRoute: '/lien-he',
        secondaryLabel: 'Xem toan bo dich vu',
        secondaryRoute: '/dich-vu'
      }
    }
  },
  {
    id: 'page-services',
    slug: 'services',
    path: '/dich-vu',
    title: 'Photography Services | Lumen Atelier',
    seo: {
      title: 'Photography Services | Lumen Atelier',
      description: 'Explore premium photography services tailored for portraits, family stories, maternity moments, and personal branding.'
    }
  },
  {
    id: 'page-pricing',
    slug: 'pricing',
    path: '/bang-gia',
    title: 'Session Pricing | Lumen Atelier',
    seo: {
      title: 'Session Pricing | Lumen Atelier',
      description: 'Transparent package pricing for premium photography sessions with styling and retouching.'
    }
  },
  {
    id: 'page-portfolio',
    slug: 'portfolio',
    path: '/bo-suu-tap',
    title: 'Portfolio Collections | Lumen Atelier',
    seo: {
      title: 'Portfolio Collections | Lumen Atelier',
      description: 'Browse curated studio collections featuring portrait, family, maternity, and creative concept sessions.'
    }
  },
  {
    id: 'page-about',
    slug: 'about',
    path: '/about',
    title: 'About The Studio | Lumen Atelier',
    seo: {
      title: 'About The Studio | Lumen Atelier',
      description: 'Meet the team and philosophy behind our warm, premium photography experience.'
    }
  },
  {
    id: 'page-blog',
    slug: 'blog',
    path: '/blog',
    title: 'Photography Journal | Lumen Atelier',
    seo: {
      title: 'Photography Journal | Lumen Atelier',
      description: 'Practical insights and inspiration for preparing elegant, meaningful photo sessions.'
    }
  },
  {
    id: 'page-faq',
    slug: 'faq',
    path: '/cau-hoi-thuong-gap',
    title: 'Frequently Asked Questions | Lumen Atelier',
    seo: {
      title: 'Frequently Asked Questions | Lumen Atelier',
      description: 'Find answers on booking, session flow, pricing, and delivery timelines.'
    }
  },
  {
    id: 'page-contact',
    slug: 'contact',
    path: '/lien-he',
    title: 'Contact And Booking | Lumen Atelier',
    seo: {
      title: 'Contact And Booking | Lumen Atelier',
      description: 'Start your booking inquiry and plan a photography session with our studio team.'
    }
  }
];

export const STUDIO_INFO: StudioInfo = {
  brandName: 'Lumen Atelier',
  tagline: 'A portrait studio where emotional honesty meets editorial craft.',
  address: 'Tầng 3 T12-06, Khu Manhattan, Vinhomes Grand Park, Thủ Đức, Hồ Chí Minh, Việt Nam',
  openingHours: 'Tue-Sun, 09:00-19:00',
  phone: '0396 887 597',
  email: 'hello@lumenatelier.vn'
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  { label: 'Phone', value: STUDIO_INFO.phone, href: 'tel:0396887597' },
  { label: 'Email', value: STUDIO_INFO.email, href: 'mailto:hello@lumenatelier.vn' },
  { label: 'Zalo', value: '@lumenatelier.studio', href: 'https://zalo.me/0396887597' },
  { label: 'Facebook', value: 'Lumen Atelier Studio', href: 'https://facebook.com' }
];

export const BRANCHES: BranchInfo[] = [
  {
    name: 'TP Hồ Chí Minh Studio',
    address: 'Tầng 3 T12-06, Khu Manhattan, Vinhomes Grand Park, Thủ Đức, Hồ Chí Minh, Việt Nam',
    phone: '0396 887 597'
  }
];

export const TRUST_METRICS: TrustMetric[] = [
  { label: 'Client satisfaction', value: '4.9 / 5', detail: 'from verified reviews and referral clients' },
  { label: 'Years in studio craft', value: '11+', detail: 'directing portrait-led sessions every week' },
  { label: 'Sessions delivered', value: '8,500+', detail: 'professionals, families, founders, and creatives' },
  { label: 'Operating studios', value: '2', detail: 'designed for controlled light and quiet workflow' }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: 'Direction that feels natural on camera',
    description: 'You are coached in small, clear prompts so expression stays authentic, never forced.'
  },
  {
    title: 'Pre-session styling guidance',
    description: 'We help you plan wardrobe tones, textures, and combinations that photograph beautifully.'
  },
  {
    title: 'Refined retouch without plastic skin',
    description: 'Skin texture stays believable while color, contrast, and distractions are cleaned with care.'
  },
  {
    title: 'Clear timeline and communication',
    description: 'No guesswork between booking and delivery. We keep every milestone visible and on schedule.'
  }
];

export const BOOKING_STEPS: BookingStep[] = [
  {
    step: '01',
    title: 'Consult and align vision',
    description: 'We map your purpose, preferred mood, and intended use of images before booking.'
  },
  {
    step: '02',
    title: 'Session day with guided pacing',
    description: 'You are directed through expression, movement, and posture while staying fully comfortable.'
  },
  {
    step: '03',
    title: 'Select and receive final set',
    description: 'Pick your favorite frames from preview proofing and receive polished finals on timeline.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Minh Chau',
    sessionType: 'Maternity Glow Session',
    quote: 'I was guided clearly but never overwhelmed. The final set felt elegant and truly personal.',
    rating: 5
  },
  {
    name: 'Hoang Nam',
    sessionType: 'Profile Portrait Session',
    quote: 'I came for business portraits and ended up with images I now use everywhere. Process was incredibly smooth.',
    rating: 5
  },
  {
    name: 'Gia Bao Family',
    sessionType: 'Family Heirloom Session',
    quote: 'Our kids settled quickly and the team handled every moment calmly. The gallery feels alive and timeless.',
    rating: 5
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'svc-portrait-signature',
    slug: 'chan-dung',
    name: 'Chup Anh Chan Dung',
    shortDescription: 'Chan dung editorial cho profile ca nhan, thuong hieu ca nhan va ky niem cot moc.',
    description:
      'Goi chan dung chu luc voi quy trinh makeup, styling, huong dan tao dang va retouch cao cap de ban len hinh tu nhien, sang va dung than thai.',
    heroImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1100&q=80'
    ],
    startingPrice: 4200000,
    durationMinutes: 90,
    badges: ['Dat nhieu nhat', 'Ho tro styling']
  },
  {
    id: 'svc-family-heirloom',
    slug: 'gia-dinh',
    name: 'Chup Anh Gia Dinh',
    shortDescription: 'Anh gia dinh tu nhien, cam xuc va de tre nho hop tac trong buoi chup.',
    description:
      'Dich vu danh cho gia dinh muon giu lai khoanh khac that, doi ngu dieu tiet nhan do va nhac nhip de anh dep ma van tu nhien.',
    heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1519340333755-c5ac7d0f7f7e?auto=format&fit=crop&w=1100&q=80'
    ],
    startingPrice: 5600000,
    durationMinutes: 120,
    badges: ['Pho bien', 'San sang len album']
  },
  {
    id: 'svc-maternity-glow',
    slug: 'ao-dai-thai-san-concept',
    name: 'Ao Dai / Thai San / Concept',
    shortDescription: 'Nhom buoi chup concept voi trang phuc, bo canh va cau chuyen duoc thiet ke rieng.',
    description:
      'Phu hop voi khach hang muon bo anh mang tinh chu de ro rang: ao dai, thai san hoac concept nghe thuat voi quy trinh san xuat tron goi.',
    heroImage: 'https://images.unsplash.com/photo-1494790108755-2616c5e4f49c?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1100&q=80'
    ],
    startingPrice: 4800000,
    durationMinutes: 100,
    badges: ['Concept theo yeu cau', 'Tron goi styling']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'price-essential',
    name: 'KHOANH KHẮC',
    price: 3800000,
    summary: 'Ghi lại một khoảnh khắc đẹp – nhẹ nhàng, trọn vẹn',
    idealFor: 'Chụp cá nhân, chân dung cơ bản',
    features: [
      '1 layout makeup và làm tóc dành cho nữ',
      '1 layout trang phục của Gạo Nâu chuẩn bị và phụ kiện kèm theo concept',
      '10 ảnh chỉnh sửa kỹ lưỡng',
      '1 background của Gạo Nâu khách hàng lựa chọn',
      'Dịch vụ chăm sóc trước buổi chụp (đắp mặt nạ & massage chân)',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Không gian và bối cảnh chụp',
      'Toàn bộ ảnh gốc',
      'Trả toàn bộ file ảnh gốc trong ngày'
    ]
  },
  {
    id: 'price-signature',
    name: 'CÂU CHUYỆN',
    price: 4800000,
    summary: 'Kể câu chuyện của bạn qua từng khung hình tinh tế',
    idealFor: 'Kể câu chuyện sâu sắc hơn, nhiều góc cạnh',
    features: [
      '1 layout makeup và làm tóc dành cho nữ',
      '1 layout trang phục của Gạo Nâu chuẩn bị và phụ kiện kèm theo concept',
      '10 ảnh chỉnh sửa kỹ lưỡng',
      '1 background của Gạo Nâu khách hàng lựa chọn',
      'Dịch vụ chăm sóc trước buổi chụp (đắp mặt nạ & massage chân)',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Không gian và bối cảnh chụp',
      'Toàn bộ ảnh gốc',
      'Trả toàn bộ file ảnh gốc trong ngày'
    ],
    highlighted: true
  },
  {
    id: 'price-legacy',
    name: 'DI SẢN',
    price: 6800000,
    summary: 'Tác phẩm để lưu giữ – không chỉ cho hôm nay',
    idealFor: 'Gói cao cấp hoàn hảo cho chân dung nghệ thuật',
    features: [
      '1 layout makeup và làm tóc CAO CẤP dành cho nữ',
      '1 layout trang phục của Gạo Nâu chuẩn bị và phụ kiện kèm theo concept',
      '10 ảnh chỉnh sửa kỹ lưỡng',
      '1 background của Gạo Nâu khách hàng lựa chọn',
      'Dịch vụ chăm sóc trước buổi chụp (đắp mặt nạ & massage chân)',
      'Kíp hỗ trợ tạo dáng, chọn góc xuyên suốt buổi chụp',
      'Không gian và bối cảnh chụp',
      'Toàn bộ ảnh gốc',
      'Trả toàn bộ file ảnh gốc trong ngày'
    ]
  }
];

export const PORTFOLIO_COLLECTIONS: PortfolioCollection[] = [
  {
    id: 'pf-city-editorial',
    slug: 'city-editorial',
    title: 'City Editorial Light',
    category: 'portrait',
    coverImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=80',
    teaser: 'Soft urban tones with confident, modern styling.',
    story: 'Built around architecture and natural reflections, this collection highlights structured lines and expressive portraits.',
    imageCount: 42
  },
  {
    id: 'pf-home-warmth',
    slug: 'home-warmth',
    title: 'Home Warmth Family Story',
    category: 'family',
    coverImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=80',
    teaser: 'Everyday affection captured in golden window light.',
    story: 'A home-based family session that celebrates tenderness, playful chaos, and intergenerational connection.',
    imageCount: 57
  },
  {
    id: 'pf-silhouette-bloom',
    slug: 'silhouette-bloom',
    title: 'Silhouette Bloom',
    category: 'maternity',
    coverImage: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=1400&q=80',
    teaser: 'Minimalist silhouettes with poetic mood and grace.',
    story: 'A calm studio concept focused on shape, posture, and the emotional anticipation of new life.',
    imageCount: 36
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-what-to-wear',
    slug: 'what-to-wear-for-portrait-session',
    title: 'What To Wear For A Portrait Session That Feels Timeless',
    excerpt: 'A practical framework for choosing outfits that elevate your photos without feeling overstyled.',
    content:
      'Choose textures over loud prints, coordinate tones rather than matching exactly, and prioritize silhouettes you can move in naturally. Bring one structured look and one relaxed look for visual depth.',
    coverImage: 'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1400&q=80',
    publishedAt: '2026-06-02',
    readingMinutes: 6,
    tags: ['styling', 'portrait', 'preparation']
  },
  {
    id: 'blog-family-session-flow',
    slug: 'family-session-flow-with-kids',
    title: 'How We Keep Family Sessions Relaxed Even With Little Kids',
    excerpt: 'Our session flow is designed to preserve energy, mood, and genuine moments.',
    content:
      'We begin with movement, then pause for close portraits, and finish with playful interactions. This rhythm helps children settle naturally and keeps expressions authentic.',
    coverImage: 'https://images.unsplash.com/photo-1519340333755-c5ac7d0f7f7e?auto=format&fit=crop&w=1400&q=80',
    publishedAt: '2026-05-12',
    readingMinutes: 5,
    tags: ['family', 'behind-the-scenes']
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-booking-deposit',
    question: 'Dat lich chup nhu the nao?',
    answer: 'Dat coc 30% de giu lich. Studio se khoa khung gio va gui checklist chuan bi ngay sau khi xac nhan.',
    topic: 'booking'
  },
  {
    id: 'faq-session-duration',
    question: 'Co can dat coc truoc khong?',
    answer: 'Co. Muc coc 30% giup studio bo tri ekip, makeup va set chup theo lich cua ban.',
    topic: 'pricing'
  },
  {
    id: 'faq-turnaround',
    question: 'Bao lau nhan anh?',
    answer: 'Anh preview gui sau 2-3 ngay. Anh retouch ban chinh duoc ban giao trong 7-10 ngay lam viec.',
    topic: 'delivery'
  },
  {
    id: 'faq-locations',
    question: 'Studio co chup o dau?',
    answer: 'Hien co 2 chi nhanh tai Quan 3 va Thu Duc, dong thoi ho tro concept ngoai canh theo yeu cau.',
    topic: 'session'
  }
];
