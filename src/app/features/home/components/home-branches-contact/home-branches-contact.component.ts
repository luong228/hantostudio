import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BranchInfo, ContactChannel, StudioInfo } from '../../../../core/models/content.models';

@Component({
  selector: 'app-home-branches-contact',
  standalone: true,
  imports: [],
  templateUrl: './home-branches-contact.component.html',
  styleUrl: './home-branches-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBranchesContactComponent {
  readonly branches = input.required<readonly BranchInfo[]>();
  readonly channels = input.required<readonly ContactChannel[]>();
  readonly studioInfo = input.required<StudioInfo>();

  channelValue(label: string): string {
    return this.channels().find((channel) => channel.label.toLowerCase() === label.toLowerCase())?.value ?? 'Đang cập nhật';
  }

  channelHref(label: string): string {
    return this.channels().find((channel) => channel.label.toLowerCase() === label.toLowerCase())?.href ?? '#';
  }
}
