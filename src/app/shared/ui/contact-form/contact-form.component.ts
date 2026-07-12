import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContentRepositoryService } from '../../../core/services/content-repository.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly repo = inject(ContentRepositoryService);

  protected readonly services = computed(() => this.repo.services());

  protected readonly contactForm = this.fb.group({
    fullName: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(/^(0[3|5|7|8|9])+([0-9]{8})$/)]],
    preferredService: [''],
    conceptIdea: [''],
    notes: ['']
  });

  protected isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  protected onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log('Contact Form Submitted:', this.contactForm.value);
    alert('Cảm ơn bạn! Yêu cầu liên hệ đã được gửi thành công. Ekip sẽ gọi điện tư vấn cho bạn sớm nhất.');
    this.contactForm.reset({
      fullName: '',
      phone: '',
      preferredService: '',
      conceptIdea: '',
      notes: ''
    });
  }
}
