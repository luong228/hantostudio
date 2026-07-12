import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { ContentCardComponent } from '../../../../shared/ui/content-card/content-card.component';
import { ConversionBannerComponent } from '../../../../shared/ui/conversion-banner/conversion-banner.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [ContentCardComponent, SectionHeaderComponent, ConversionBannerComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioPageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);

  constructor() {
    this.repo
      .pageSeo$('/bo-suu-tap', {
        title: 'Portfolio Collections | Lumen Atelier',
        description: 'Browse curated studio collections featuring portrait, family, maternity, and creative concept sessions.'
      })
      .subscribe((meta) => this.seo.update(meta));
  }
}
