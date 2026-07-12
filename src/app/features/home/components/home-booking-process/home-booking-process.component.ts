import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BookingStep } from '../../../../core/models/content.models';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-home-booking-process',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './home-booking-process.component.html',
  styleUrl: './home-booking-process.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBookingProcessComponent {
  readonly steps = input.required<readonly BookingStep[]>();
}

