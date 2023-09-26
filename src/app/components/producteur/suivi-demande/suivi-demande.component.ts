import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'suivi-demande',
  templateUrl: './suivi-demande.component.html',
  styleUrls: ['./suivi-demande.component.scss']
})
export class SuiviDemandeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  gotoaccueil(){
    this.router.navigate(['/accueil'])
  }
}
