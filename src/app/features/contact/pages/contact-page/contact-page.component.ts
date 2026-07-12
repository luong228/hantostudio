import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { COPY_SYSTEM } from '../../../../core/content/brand-voice';
import { ContentRepositoryService } from '../../../../core/services/content-repository.service';
import { SeoService } from '../../../../core/services/seo.service';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule, SectionHeaderComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {
  protected readonly repo = inject(ContentRepositoryService);
  protected readonly contactPrompt = COPY_SYSTEM.contactPrompt;
  private readonly fb = inject(FormBuilder);
  private readonly seo = inject(SeoService);

  protected readonly inquiryForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    preferredService: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  constructor() {
    this.repo
      .pageSeo$('/lien-he', {
        title: 'Contact And Booking | Lumen Atelier',
        description: 'Start your booking inquiry and plan a photography session with our studio team.'
      })
      .subscribe((meta) => this.seo.update(meta));
  }

  protected submit(): void {
    this.inquiryForm.markAllAsTouched();
    if (this.inquiryForm.invalid) {
      return;
    }

    this.inquiryForm.reset();
  }
}
