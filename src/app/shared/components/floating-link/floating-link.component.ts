import {Component, Input} from '@angular/core';
import {IconDefinition} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'zpg-floating-link',
  templateUrl: './floating-link.component.html',
  styleUrl: './floating-link.component.scss'
})
export class FloatingLinkComponent {
  @Input() public url: string = '#';
  @Input() public icon!: IconDefinition;

  constructor() {
  }
}
