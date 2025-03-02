import {NgModule} from "@angular/core";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage, NgStyle
} from "@angular/common";
import {CarouselModule} from "ngx-owl-carousel-o";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
// Components
import {BlogImageComponent} from "./components/blog-image/blog-image.component";
import {ButtonComponent} from "./components/button/button.component";
import {ButtonLinkComponent} from "./components/button-link/button-link.component";
import {CarouselMenuComponent} from "./components/carousel-menu/carousel-menu.component";
import {CarouselMainComponents} from "./components/carousel-main/carousel-main.components";
import {SquareIconComponent} from "./components/square-icon/square-icon.component";
import {ButtonMenuComponent} from "./components/button-menu/button-menu.component";
// Layouts
import {HeaderComponent} from "./layouts/header/header.component";
import {FooterComponent} from "./layouts/footer/footer.component";
import {FloatingLinkComponent} from './components/floating-link/floating-link.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
// Directive
import {FadeInOutDirective} from './directives/fade-in-out.directive';
import {PopupDirective} from './directives/popup.directive';
import { BlogMenuComponent } from './components/blog-menu/blog-menu.component';
import { ContactIconComponent } from './components/contact-icon/contact-icon.component';
import { FlexTextComponent } from './components/inputs/flex-text/flex-text.component';

@NgModule({
  declarations: [
    BlogImageComponent,
    ButtonComponent,
    ButtonLinkComponent,
    CarouselMenuComponent,
    CarouselMainComponents,
    SquareIconComponent,
    ButtonMenuComponent,
    HeaderComponent,
    FooterComponent,
    FloatingLinkComponent,
    FadeInOutDirective,
    WelcomeComponent,
    PopupDirective,
    BlogMenuComponent,
    ContactIconComponent,
    FlexTextComponent,
  ],
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
    CarouselModule,
    NgStyle,
    FaIconComponent,
    NgClass,
  ],
  providers: [],
  exports: [
    BlogImageComponent,
    ButtonComponent,
    ButtonLinkComponent,
    CarouselMenuComponent,
    CarouselMainComponents,
    SquareIconComponent,
    ButtonMenuComponent,
    HeaderComponent,
    FooterComponent,
    FloatingLinkComponent,
    FadeInOutDirective,
    WelcomeComponent,
    PopupDirective,
    BlogMenuComponent,
    ContactIconComponent,
    FlexTextComponent
  ],
})

export class SharedModule {
}
