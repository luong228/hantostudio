import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { ConversionBannerComponent } from '../../../../shared/ui/conversion-banner/conversion-banner.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [SectionHeaderComponent, ConversionBannerComponent],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqPageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update(this.repo.seoForPath('/cau-hoi-thuong-gap', {
      title: 'Frequently Asked Questions | HANTO Studio',
      description: 'Find answers on booking, session flow, pricing, and delivery timelines.'
    }));
  }
}
