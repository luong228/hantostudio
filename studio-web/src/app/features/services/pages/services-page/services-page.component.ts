import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { ContentCardComponent } from '../../../../shared/ui/content-card/content-card.component';
import { ConversionBannerComponent } from '../../../../shared/ui/conversion-banner/conversion-banner.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [ContentCardComponent, SectionHeaderComponent, ConversionBannerComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesPageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);

  constructor() {
    this.repo
      .pageSeo$('/dich-vu', {
        title: 'Photography Services | Lumen Atelier',
        description:
          'Explore premium photography services tailored for portraits, family stories, maternity moments, and personal branding.'
      })
      .subscribe((meta) => this.seo.update(meta));
  }
}
