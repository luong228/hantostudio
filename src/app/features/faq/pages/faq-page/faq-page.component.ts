import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqPageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);
  protected readonly openId = signal<string | null>(null);

  protected toggle(id: string): void {
    this.openId.update(cur => cur === id ? null : id);
  }

  protected fmt(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  constructor() {
    this.seo.update(this.repo.seoForPath('/cau-hoi-thuong-gap', {
      title: 'Câu Hỏi Thường Gặp | HANTO Studio',
      description: 'Tìm câu trả lời về việc đặt lịch, quy trình buổi chụp, chi phí và thời gian trả ảnh.'
    }));
  }
}
