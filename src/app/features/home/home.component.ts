import {Component} from "@angular/core";

@Component({
  selector: "zpg-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss"
})
export class HomeComponent {
  public compsAnimationLogic: Array<boolean> = [];

  public isIntersecting (status: boolean, index: number) {
    this.compsAnimationLogic[index] = status;
    console.log('Element #' + index + ' is intersecting ' + status)
  }
}
