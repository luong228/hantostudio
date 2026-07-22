import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { PricingCardsComponent } from '../../../../shared/ui/pricing-cards/pricing-cards.component';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [PricingCardsComponent],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingPageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update(this.repo.seoForPath('/bang-gia', {
      title: 'Bảng Giá Dịch Vụ | HANTO Studio',
      description: 'Bảng giá minh bạch cho các gói chụp ảnh cao cấp bao gồm tư vấn phong cách và chỉnh sửa ảnh chuyên nghiệp.'
    }));
  }
}
