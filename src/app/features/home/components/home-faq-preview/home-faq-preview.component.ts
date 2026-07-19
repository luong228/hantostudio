import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FaqItem } from '../../../../core/models/content.models';

@Component({
  selector: 'app-home-faq-preview',
  standalone: true,
  imports: [],
  templateUrl: './home-faq-preview.component.html',
  styleUrl: './home-faq-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFaqPreviewComponent {
  readonly faqs = input.required<readonly FaqItem[]>();

  readonly openFaqId = signal<string | null>(null);

  isOpen(faqId: string, index: number): boolean {
    const openId = this.openFaqId();
    if (openId === null) {
      return index === 0;
    }

    return openId === faqId;
  }

  toggleFaq(faqId: string, index: number): void {
    const isCurrentlyOpen = this.isOpen(faqId, index);
    this.openFaqId.set(isCurrentlyOpen ? null : faqId);
  }
}

