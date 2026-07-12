import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { ConversionBannerComponent } from '../../../../shared/ui/conversion-banner/conversion-banner.component';

@Component({
  selector: 'app-blog-detail-page',
  standalone: true,
  imports: [RouterLink, ConversionBannerComponent],
  templateUrl: './blog-detail-page.component.html',
  styleUrl: './blog-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);
  private readonly slug = this.route.snapshot.paramMap.get('slug') ?? '';

  protected readonly post = computed(() => {
    return this.repo.postBySlug(this.slug);
  });

  constructor() {
    this.repo.prefetchBlogBySlug(this.slug);
    this.repo
      .blogSeo$(this.slug, {
        title: 'Journal Post | Lumen Atelier',
        description: 'Read session guidance and photography insights from our studio team.'
      })
      .subscribe((meta) => this.seo.update(meta));
  }
}
