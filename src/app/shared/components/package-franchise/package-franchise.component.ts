import {Component, Input} from '@angular/core';

@Component({
  selector: 'zpg-package-franchise',
  templateUrl: './package-franchise.component.html',
  styleUrl: './package-franchise.component.scss'
})
export class PackageFranchiseComponent {
  @Input() packageName: string = '';
  @Input() imgReverse: boolean = false;
  @Input() isThereALine: boolean = false;
  @Input() reverseInitBorder: boolean = false;
}
