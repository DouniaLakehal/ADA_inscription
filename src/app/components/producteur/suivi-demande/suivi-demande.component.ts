import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'suivi-demande',
  templateUrl: './suivi-demande.component.html',
  styleUrls: ['./suivi-demande.component.scss']
})
export class SuiviDemandeComponent implements OnInit {

  BVisible:boolean;
  CVisible:boolean;
  DVisible:boolean;
  constructor(private router : Router) {
    this.BVisible = true;
    this.CVisible = false;
    this.DVisible = false;
  }

  ngOnInit(): void {
  }

  gotoaccueil(){
    this.router.navigate(['/accueil'])
  }

  Suivishow(val: number): void
  {
    if (val === 1) {
      this.BVisible = true;
      this.CVisible = false;
      this.DVisible = false;
    } else if (val === 2) {
      this.BVisible = false;
      this.CVisible = true;
      this.DVisible = false;
    } else if (val === 3) {
      this.BVisible = false;
      this.CVisible = false;
      this.DVisible = true;

    }
  }
}
