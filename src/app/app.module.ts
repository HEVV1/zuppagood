import {NgModule} from '@angular/core';
import {
  BrowserModule,
  provideClientHydration
} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CookieService} from "ngx-cookie-service";
// Components
import {AppComponent} from './app.component';
// Modules
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration(),
    CookieService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
