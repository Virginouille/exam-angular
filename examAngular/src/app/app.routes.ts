import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PanierComponent } from './components/panier/panier.component';
import { ClimatiseursComponent } from './components/climatiseurs/climatiseurs.component';
import { RefroidisseursComponent } from './components/refroidisseurs/refroidisseurs.component';
import { VentilateursComponent } from './components/ventilateurs/ventilateurs.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'panier', component: PanierComponent },
    { path: 'climatiseurs', component: ClimatiseursComponent },
    { path: 'refroidisseurs', component: RefroidisseursComponent },
    { path: 'ventilateurs', component: VentilateursComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
