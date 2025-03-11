import {Component, Input} from '@angular/core';

@Component({
  selector: 'zpg-image-torn-small',
  templateUrl: './image-torn-small.component.html',
  styleUrl: './image-torn-small.component.scss'
})
export class ImageTornSmallComponent {
  @Input() public imageUrl: string = '';
}
