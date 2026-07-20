import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BookingStep } from '../../../../core/models/content.models';

@Component({
  selector: 'app-home-booking-process',
  standalone: true,
  imports: [],
  templateUrl: './home-booking-process.component.html',
  styleUrl: './home-booking-process.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBookingProcessComponent {
  readonly steps = input.required<readonly BookingStep[]>();

  imageByStep(index: number): string {
    switch (index) {
      case 0:
        return 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=860&q=80';
      case 1:
        return 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=860&q=80';
      case 2:
        return 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=860&q=80';
      default:
        return 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=860&q=80';
    }
  }
}

