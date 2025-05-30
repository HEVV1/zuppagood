import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
// Modules
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  providers: [],
  exports: [],
})
export class HomeModule {
}
