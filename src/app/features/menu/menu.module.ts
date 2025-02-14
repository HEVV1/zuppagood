import {NgModule} from "@angular/core";
import {MenuComponent} from "./menu.component";
import {CommonModule} from "@angular/common";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {MenuRoutingModule} from "./menu-routing.module";

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MenuRoutingModule
  ],
  providers: [],
  exports: [],
})
export class MenuModule {
}
