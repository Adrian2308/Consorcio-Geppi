import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsComponent } from './pages/us/us.component';
import { ServicesComponent } from './pages/services/services.component';
import { SustainabilityComponent } from './pages/sustainability/sustainability.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'us', component: UsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'sustainability', component: SustainabilityComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
