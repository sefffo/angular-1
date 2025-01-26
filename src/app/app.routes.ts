import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PorfolioComponent } from './porfolio/porfolio.component';

export const routes: Routes = [
    { path:'',redirectTo:'StartFramework',pathMatch:'full' ,title: 'Start Framework'},
    { path: 'StartFramework',component: StartComponent,title: 'Start Framework'},
    { path: 'about',component:AboutComponent, title: 'About'},
    { path: 'contact',component:ContactComponent, title: 'contact'},
    { path: 'portfolio',component:PorfolioComponent, title: 'Portfolio'},
    { path:'**',component:NotFoundComponent , title: 'Not Found'}
];
