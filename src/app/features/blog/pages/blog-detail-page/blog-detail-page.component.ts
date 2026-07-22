import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../../../environments/environment';
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
    this.seo.update(this.repo.seoForBlogSlug(this.slug, {
      title: 'Bài Viết | HANTO Studio',
      description: 'Đọc hướng dẫn và chia sẻ từ đội ngũ studio về phong cách chụp ảnh và cách chuẩn bị cho buổi chụp ý nghĩa.',
      canonicalUrl: `${environment.appBaseUrl}/blog/${this.slug}`
    }));
  }
}
