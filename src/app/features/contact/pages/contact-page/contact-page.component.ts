import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeBookingProcessComponent } from '../../../../features/home/components/home-booking-process/home-booking-process.component';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { ContactFormComponent } from '../../../../shared/ui/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent, RouterLink, HomeBookingProcessComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  private readonly seo = inject(SeoService);

  protected readonly contactChannels = computed(() => this.repo.contactChannels());

  constructor() {
    this.seo.update(this.repo.seoForPath('/lien-he', {
      title: 'Liên Hệ Và Đặt Lịch | HANTO Studio',
      description: 'Bắt đầu yêu cầu đặt lịch và lên kế hoạch cho buổi chụp ảnh với đội ngũ studio của chúng tôi.'
    }));
  }

  protected getChannelIcon(label: string): string {
    const iconMap: Record<string, string> = {
      'Điện thoại': '☎',
      'Email': '✉',
      'Zalo': '💬',
      'Facebook': '👍'
    };
    return iconMap[label] ?? '📍';
  }
}
