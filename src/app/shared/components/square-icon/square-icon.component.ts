import {
  Component,
  Input
} from "@angular/core";
import {IconDefinition} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'zpg-square-icon',
  templateUrl: 'square-icon.component.html',
  styleUrl: 'square-icon.component.scss',
})
export class SquareIconComponent {
  @Input() public icon!: IconDefinition;
  @Input() public linkUrl: string = '#';

  constructor() {
  }
}
