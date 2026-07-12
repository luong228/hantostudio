import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { HomeBookingProcessComponent } from '../../components/home-booking-process/home-booking-process.component';
import { HomeBranchesContactComponent } from '../../components/home-branches-contact/home-branches-contact.component';
import { HomeFaqPreviewComponent } from '../../components/home-faq-preview/home-faq-preview.component';
import { HomeFeaturedServicesComponent } from '../../components/home-featured-services/home-featured-services.component';
import { HomeFinalCtaComponent } from '../../components/home-final-cta/home-final-cta.component';
import { HomeHeroSectionComponent } from '../../components/home-hero-section/home-hero-section.component';
import { HomePortfolioPreviewComponent } from '../../components/home-portfolio-preview/home-portfolio-preview.component';
import { HomePricingTeaserComponent } from '../../components/home-pricing-teaser/home-pricing-teaser.component';
import { HomeTestimonialsComponent } from '../../components/home-testimonials/home-testimonials.component';
import { HomeWhyChooseComponent } from '../../components/home-why-choose/home-why-choose.component';
import { ContactFormComponent } from '../../../../shared/ui/contact-form/contact-form.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HomeHeroSectionComponent,
    HomePricingTeaserComponent,
    HomeFeaturedServicesComponent,
    HomeWhyChooseComponent,
    HomePortfolioPreviewComponent,
    HomeTestimonialsComponent,
    HomeFaqPreviewComponent,
    HomeBranchesContactComponent,
    HomeBookingProcessComponent,
    HomeFinalCtaComponent,
    ContactFormComponent,
    SectionHeaderComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);
  protected readonly featuredServices = computed(() => this.repo.services().slice(0, 3));
  protected readonly featuredPlans = computed(() => this.repo.pricingPlans().slice(0, 3));
  protected readonly featuredCollections = computed(() => this.repo.portfolioCollections().slice(0, 3));
  protected readonly featuredFaqs = computed(() => this.repo.faqItems().slice(0, 4));
  protected readonly heroMetrics = computed(() => this.repo.trustMetrics().slice(0, 4));
  protected readonly homeContent = computed(() => this.repo.homePageContent());
  protected readonly heroContent = computed(() => this.homeContent()?.hero);
  protected readonly finalCtaContent = computed(() => this.homeContent()?.finalCta);

  constructor() {
    this.repo
      .pageSeo$('/', {
        title: 'Lumen Atelier | Premium Portrait And Family Photography Studio',
        description:
          'Premium portrait, profile, family, maternity, and concept photography crafted with warmth and precision.'
      })
      .subscribe((meta) => this.seo.update(meta));
  }
}
