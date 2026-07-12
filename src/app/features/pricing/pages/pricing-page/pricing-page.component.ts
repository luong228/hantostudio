import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { ConversionBannerComponent } from '../../../../shared/ui/conversion-banner/conversion-banner.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [DecimalPipe, ButtonComponent, SectionHeaderComponent, ConversionBannerComponent],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingPageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);

  constructor() {
    this.repo
      .pageSeo$('/bang-gia', {
        title: 'Session Pricing | Lumen Atelier',
        description: 'Transparent package pricing for premium photography sessions with styling and retouching.'
      })
      .subscribe((meta) => this.seo.update(meta));
  }
}
