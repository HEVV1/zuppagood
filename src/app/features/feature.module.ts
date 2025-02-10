import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import {FeatureRoutingModule} from "./feature-routing.module";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    CoreModule,
    FeatureRoutingModule
  ],
  providers: [],
  exports: [RouterModule],
})
export class FeatureModule {

}
