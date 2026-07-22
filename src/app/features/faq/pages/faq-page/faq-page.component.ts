import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { FaqAccordionComponent } from '../../../../shared/ui/faq-accordion/faq-accordion.component';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [RouterLink, FaqAccordionComponent],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqPageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);
  constructor() {
    this.seo.update(this.repo.seoForPath('/cau-hoi-thuong-gap', {
      title: 'Câu Hỏi Thường Gặp | HANTO Studio',
      description: 'Tìm câu trả lời về việc đặt lịch, quy trình buổi chụp, chi phí và thời gian trả ảnh.'
    }));
  }
}
