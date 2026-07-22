import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FaqItem } from '../../../../core/models/content.models';
import { FaqAccordionComponent } from '../../../../shared/ui/faq-accordion/faq-accordion.component';

@Component({
  selector: 'app-home-faq-preview',
  standalone: true,
  imports: [FaqAccordionComponent],
  templateUrl: './home-faq-preview.component.html',
  styleUrl: './home-faq-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFaqPreviewComponent {
  readonly faqs = input.required<readonly FaqItem[]>();

}

