import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{NavbarComponent} from'./component/navbar/navbar.component';
import{BannerComponent} from'./component/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
