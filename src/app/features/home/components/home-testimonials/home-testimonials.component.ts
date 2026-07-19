import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TestimonialItem } from '../../../../core/models/content.models';

@Component({
  selector: 'app-home-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './home-testimonials.component.html',
  styleUrl: './home-testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTestimonialsComponent {
  readonly testimonials = input.required<readonly TestimonialItem[]>();

  protected stars(rating: number): string {
    return '★'.repeat(Math.max(0, Math.min(5, rating)));
  }
}

