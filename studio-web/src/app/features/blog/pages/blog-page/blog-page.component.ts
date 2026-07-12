import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { ContentCardComponent } from '../../../../shared/ui/content-card/content-card.component';
import { ConversionBannerComponent } from '../../../../shared/ui/conversion-banner/conversion-banner.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [ContentCardComponent, SectionHeaderComponent, ConversionBannerComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);

  constructor() {
    this.repo
      .pageSeo$('/blog', {
        title: 'Photography Journal | Lumen Atelier',
        description: 'Practical insights and inspiration for preparing elegant, meaningful photo sessions.'
      })
      .subscribe((meta) => this.seo.update(meta));
  }
}
