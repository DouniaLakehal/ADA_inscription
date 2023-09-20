import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  retour(){
    this.router.navigate(['/list_producteurs']);
  }
}
