import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HeaderComponent} from './layouts/header/header.component';
import {FooterComponent} from "./layouts/footer/footer.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})

export class CoreModule {
}
