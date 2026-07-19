import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCardComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly image = input.required<string>();
  readonly route = input.required<string>();
  readonly meta = input<string>('');
  readonly eyebrow = input<string>('');
  readonly ctaLabel = input<string>('Xem chi tiết →');
}
