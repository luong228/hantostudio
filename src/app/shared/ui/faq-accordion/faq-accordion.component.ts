import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FaqItem } from '../../../core/models/content.models';

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  imports: [],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqAccordionComponent {
  readonly items = input.required<readonly FaqItem[]>();
  /** Show numbered prefixes (01, 02…). Default: true */
  readonly numbered = input(true);
  /** Open the first item on load. Default: false */
  readonly openFirst = input(false);

  protected readonly openId = signal<string | null>(null);

  protected isOpen(id: string, index: number): boolean {
    const cur = this.openId();
    return cur === null ? (this.openFirst() && index === 0) : cur === id;
  }

  protected toggle(id: string, index: number): void {
    this.openId.update(cur => {
      const wasOpen = cur === null ? (this.openFirst() && index === 0) : cur === id;
      return wasOpen ? null : id;
    });
  }

  protected fmt(i: number): string {
    return String(i + 1).padStart(2, '0');
  }
}
