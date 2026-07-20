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
    this.seo.update(this.repo.seoForPath('/dich-vu', {
      title: 'Dịch Vụ Chụp Ảnh | HANTO Studio',
      description: 'Khám phá các dịch vụ chụp ảnh cao cấp dành cho chân dung cá nhân, gia đình, thai sản và concept sáng tạo.'
    }));
  }
}
