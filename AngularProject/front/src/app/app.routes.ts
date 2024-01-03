import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';


export const routes: Routes = [
  {path: '', title: 'Home Page', component: HomeComponent},
  {path: 'about', title: 'About', component: AboutComponent},
  {path: 'moments/new', title: 'Moments', component: NewMomentComponent}

];
