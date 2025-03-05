import {NgModule} from "@angular/core";
import {FranchiseComponent} from "./franchise.component";
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: '',
    component: FranchiseComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FranchiseRoutingModule {

}
