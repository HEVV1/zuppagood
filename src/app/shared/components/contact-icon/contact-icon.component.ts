import {
  Component,
  Input
} from '@angular/core';
import {IconDefinition} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'zpg-contact-icon',
  templateUrl: './contact-icon.component.html',
  styleUrl: './contact-icon.component.scss'
})
export class ContactIconComponent {
  @Input() public icon!: IconDefinition
  @Input() public title: string = '';
  @Input() public description: string = '';
}
