import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import{NavbarComponent} from'./component/navbar/navbar.component';
import{BannerComponent} from'./component/banner/banner.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent} from  './pages/services/services.component';
import { ContactComponent} from './pages/contact/contact.component'; 

import { AppRoutingModule} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
