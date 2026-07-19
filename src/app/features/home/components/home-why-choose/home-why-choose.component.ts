import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WhyChooseItem } from '../../../../core/models/content.models';

@Component({
  selector: 'app-home-why-choose',
  standalone: true,
  imports: [],
  templateUrl: './home-why-choose.component.html',
  styleUrl: './home-why-choose.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeWhyChooseComponent {
  readonly items = input.required<readonly WhyChooseItem[]>();
}

