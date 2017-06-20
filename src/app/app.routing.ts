import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent} from  './pages/services/services.component';
import { ContactComponent} from './pages/contact/contact.component'; 

const appRoutes: Routes = [

        {
            path:'about',
            component:AboutComponent
        },
        
        {
            path:'services',
            component:ServicesComponent
        },
        {
            path:'contact',
            component:ContactComponent
        }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }