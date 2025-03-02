import {
  Component,
  Input
} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'zpg-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type: string = 'submit';
  @Input() customClass: string = '';
  @Input() isFormValid: boolean | null = false;
}
