import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { HomeBookingProcessComponent } from '../../components/home-booking-process/home-booking-process.component';
import { HomeBranchesContactComponent } from '../../components/home-branches-contact/home-branches-contact.component';
import { HomeFaqPreviewComponent } from '../../components/home-faq-preview/home-faq-preview.component';
import { HomeFeaturedServicesComponent } from '../../components/home-featured-services/home-featured-services.component';
import { HomeAllServicesComponent } from '../../components/home-all-services/home-all-services.component';
import { HomeFinalCtaComponent } from '../../components/home-final-cta/home-final-cta.component';
import { HomeHeroSectionComponent } from '../../components/home-hero-section/home-hero-section.component';
import { HomePricingTeaserComponent } from '../../components/home-pricing-teaser/home-pricing-teaser.component';
import { HomeTestimonialsComponent } from '../../components/home-testimonials/home-testimonials.component';
import { HomeWhyChooseComponent } from '../../components/home-why-choose/home-why-choose.component';
import { ContactFormComponent } from '../../../../shared/ui/contact-form/contact-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HomeHeroSectionComponent,
    HomePricingTeaserComponent,
    HomeFeaturedServicesComponent,
    HomeAllServicesComponent,
    HomeWhyChooseComponent,
    HomeTestimonialsComponent,
    HomeFaqPreviewComponent,
    HomeBranchesContactComponent,
    ContactFormComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);
  protected readonly featuredServices = computed(() => this.repo.services().slice(0, 3));
  protected readonly featuredPlans = computed(() => this.repo.pricingPlans());
  protected readonly featuredFaqs = computed(() => this.repo.faqItems().slice(0, 4));
  protected readonly heroMetrics = computed(() => this.repo.trustMetrics().slice(0, 4));
  protected readonly homeContent = computed(() => this.repo.homePageContent());
  protected readonly heroContent = computed(() => this.homeContent()?.hero);
  protected readonly finalCtaContent = computed(() => this.homeContent()?.finalCta);

  constructor() {
    this.seo.update(this.repo.seoForPath('/', {
      title: 'HANTO Studio | Studio Chụp Ảnh Chân Dung & Gia Đình Cao Cấp',
      description:
        'Chụp ảnh chân dung, hồ sơ cá nhân, gia đình, mẹ bầu và concept được thực hiện với sự ấm áp và tỉ mỉ từng chi tiết.'
    }));
  }
}
