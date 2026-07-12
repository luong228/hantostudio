import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FaqItem } from '../../../../core/models/content.models';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-home-faq-preview',
  standalone: true,
  imports: [ButtonComponent, SectionHeaderComponent],
  templateUrl: './home-faq-preview.component.html',
  styleUrl: './home-faq-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFaqPreviewComponent {
  readonly faqs = input.required<readonly FaqItem[]>();
}

