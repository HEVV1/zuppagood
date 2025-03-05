import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'zpg-button-link',
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.scss'
})
export class ButtonLinkComponent {
  @Input() url: string | undefined;
  @Input() customClass: string = '';
}
