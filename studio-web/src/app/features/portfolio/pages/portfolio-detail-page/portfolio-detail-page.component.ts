import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { ConversionBannerComponent } from '../../../../shared/ui/conversion-banner/conversion-banner.component';

@Component({
  selector: 'app-portfolio-detail-page',
  standalone: true,
  imports: [RouterLink, ButtonComponent, ConversionBannerComponent],
  templateUrl: './portfolio-detail-page.component.html',
  styleUrl: './portfolio-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);
  private readonly slug = this.route.snapshot.paramMap.get('slug') ?? '';

  protected readonly collection = computed(() => {
    return this.repo.portfolioBySlug(this.slug);
  });

  constructor() {
    this.repo.prefetchPortfolioBySlug(this.slug);
    this.repo
      .portfolioSeo$(this.slug, {
        title: 'Portfolio Collection | Lumen Atelier',
        description: 'Explore this full collection and session story.'
      })
      .subscribe((meta) => this.seo.update(meta));
  }
}
