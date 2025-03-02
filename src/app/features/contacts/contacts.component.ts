import {Component} from '@angular/core';
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import {
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  protected readonly faMapMarkedAlt = faMapMarkedAlt;
  protected readonly faPhone = faPhone;
  protected readonly faEnvelope = faEnvelope;

  public formMessage: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formMessage = this.formBuilder.group({
      yourName: ['', Validators.required],
      yourEmail: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  public async sendMessage() {
    if (this.formMessage.valid) {
      console.log('Form is valid');
    } else {
      Object.keys(this.formMessage.controls).forEach(field => {
        const control = this.formMessage.controls[field];
        control.markAsTouched({onlySelf: true});
      })
      console.log('Form is invalid');
    }
  }
}
