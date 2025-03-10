import {Component, Input} from '@angular/core';

@Component({
  selector: 'zpg-image-torn',
  templateUrl: './image-torn.component.html',
  styleUrl: './image-torn.component.scss'
})
export class ImageTornComponent {
  @Input() imgUrl: string = '';
  @Input() top: boolean = true;
  @Input() bottom: boolean = true;
  @Input() left: boolean = true;
  @Input() right: boolean = true;
}
