import {Component} from '@angular/core';
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  protected readonly faMapMarkedAlt = faMapMarkedAlt;
  protected readonly faPhone = faPhone;
  protected readonly faEnvelope = faEnvelope;
}
