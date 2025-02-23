import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {ComponentsComponent} from './components/components.component';
import {ProfileComponent} from './examples/profile/profile.component';
import {SignupComponent} from './examples/signup/signup.component';
import {LandingComponent} from './examples/landing/landing.component';
import {NucleoiconsComponent} from './components/nucleoicons/nucleoicons.component';
import {ProducteurComponent} from "./components/producteur/producteur/producteur.component";
import {InscriptionComponent} from "./components/producteur/inscription/inscription/inscription.component";
import {RecapComponent} from "./components/producteur/recap/recap.component";
import {AccueilComponent} from "./components/producteur/accueil/accueil.component";
import {SuiviDemandeComponent} from "./components/producteur/suivi-demande/suivi-demande.component";
import {ResultatComponent} from "./components/producteur/resultat/resultat.component";
import {AttestattionsComponent} from "./components/producteur/attestattions/attestattions.component";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: ComponentsComponent},
    {path: 'user-profile', component: ProfileComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'landing', component: LandingComponent},
    {path: 'nucleoicons', component: NucleoiconsComponent},
    {path: 'list_producteurs', component: ProducteurComponent},
    {path: 'inscriptions', component: InscriptionComponent},
    {path: 'recap', component: RecapComponent},
    {path: 'accueil', component: AccueilComponent},
    {path: 'suivi-demande', component: SuiviDemandeComponent},
    {path: 'resultat', component: ResultatComponent},
    {path: 'attestation', component: AttestattionsComponent},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            scrollPositionRestoration: 'enabled'
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
