import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
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
