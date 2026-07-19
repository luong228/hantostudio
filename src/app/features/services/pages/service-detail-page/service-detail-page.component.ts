import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { ConversionBannerComponent } from '../../../../shared/ui/conversion-banner/conversion-banner.component';

@Component({
  selector: 'app-service-detail-page',
  standalone: true,
  imports: [RouterLink, DecimalPipe, ButtonComponent, ConversionBannerComponent],
  templateUrl: './service-detail-page.component.html',
  styleUrl: './service-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);
  private readonly slug = this.route.snapshot.paramMap.get('slug') ?? '';

  protected readonly service = computed(() => {
    return this.repo.serviceBySlug(this.slug);
  });

  constructor() {
    this.seo.update(this.repo.seoForServiceSlug(this.slug, {
      title: 'Service Details | HANTO Studio',
      description: 'Explore this photography service and booking details.'
    }));
  }
}
