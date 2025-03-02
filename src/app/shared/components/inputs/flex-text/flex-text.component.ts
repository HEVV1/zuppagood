import {Component, Input} from '@angular/core';

@Component({
  selector: 'zpg-flex-text',
  templateUrl: './flex-text.component.html',
  styleUrl: './flex-text.component.scss'
})
export class FlexTextComponent {
  @Input() public type: string = 'text';
  @Input() public labelTitle: string = '';
  @Input() public name: string = '';
  @Input() public placeholder: string = '';
  @Input() public isRequired: boolean = false;
  @Input() public minLength: number = 0;
  @Input() public maxLength: number = 999;
}
