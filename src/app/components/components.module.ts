import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { ProducteurComponent } from './producteur/producteur/producteur.component';
import {ProducteurService} from "./producteur/producteur/service/Producteur.service";
import { InscriptionComponent } from './producteur/inscription/inscription/inscription.component';
import { ProgressComponent } from './producteur/progress/progress.component';
import { RecapComponent } from './producteur/recap/recap.component';
import {NgxAutocompleteModule} from "ngx-angular-autocomplete";
import { AlertComponent } from './producteur/alert/alert.component';
import { AccueilComponent } from './producteur/accueil/accueil.component';
import { SuiviDemandeComponent } from './producteur/suivi-demande/suivi-demande.component';
import { ResultatComponent } from './producteur/resultat/resultat.component';
import { AttestattionsComponent } from './producteur/attestattions/attestattions.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        ReactiveFormsModule,
        NgxAutocompleteModule
    ],
    declarations: [
        ComponentsComponent,
        ProducteurComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        InscriptionComponent,
        ProgressComponent,
        RecapComponent,
        AlertComponent,
        AccueilComponent,
        SuiviDemandeComponent,
        ResultatComponent,
        AttestattionsComponent
    ],
    providers: [ProducteurService],
    exports:[ ComponentsComponent, ProducteurComponent ]
})
export class ComponentsModule { }
