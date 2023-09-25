import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoInscription(){
    this.router.navigate(['/inscriptions']);
  }

}
