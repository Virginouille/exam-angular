import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PanierComponent } from './components/panier/panier.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'panier', component: PanierComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
