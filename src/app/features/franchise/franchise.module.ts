import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FranchiseComponent} from "./franchise.component";
import {FranchiseRoutingModule} from "./franchise-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [FranchiseComponent],
  imports: [
    CommonModule,
    FranchiseRoutingModule,
    SharedModule
  ]
})
export class FranchiseModule {
}
