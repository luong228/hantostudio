import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { ConversionBannerComponent } from '../../../../shared/ui/conversion-banner/conversion-banner.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [SectionHeaderComponent, ConversionBannerComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update(this.repo.seoForPath('/about', {
      title: 'Về Chúng Tôi | HANTO Studio',
      description: 'Tìm hiểu về đội ngũ và triết lý đằng sau những trải nghiệm chụp ảnh ấm áp và đẳng cấp của HANTO Studio.'
    }));
  }
}
