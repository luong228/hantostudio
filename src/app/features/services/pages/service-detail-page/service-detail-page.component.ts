import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { ConversionBannerComponent } from '../../../../shared/ui/conversion-banner/conversion-banner.component';

@Component({
  selector: 'app-service-detail-page',
  standalone: true,
  imports: [RouterLink, ConversionBannerComponent],
  templateUrl: './service-detail-page.component.html',
  styleUrl: './service-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);
  private readonly slug = this.route.snapshot.paramMap.get('slug') ?? '';
  private readonly priceFormatter = new Intl.NumberFormat('vi-VN');

  protected readonly service = computed(() => this.repo.serviceBySlug(this.slug));
  protected readonly slideIndex = signal(0);

  constructor() {
    this.seo.update(this.repo.seoForServiceSlug(this.slug, {
      title: 'Dịch Vụ Chụp Ảnh | HANTO Studio',
      description: 'Khám phá dịch vụ chụp ảnh và thông tin đặt lịch chi tiết.'
    }));
  }

  protected formatPrice(price: number): string {
    return this.priceFormatter.format(price);
  }

  protected prev(total: number): void {
    this.slideIndex.update(i => (i - 1 + total) % total);
  }

  protected next(total: number): void {
    this.slideIndex.update(i => (i + 1) % total);
  }

  protected goTo(index: number): void {
    this.slideIndex.set(index);
  }
}
