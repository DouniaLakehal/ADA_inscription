import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgbdModalContent} from "../../modal/modal.component";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  gotoInscription(){
    this.router.navigate(['/inscriptions']);
  }

  gotoresultat(){
    this.router.navigate(['/resultat']);
  }

  gotoattestation(){
    this.router.navigate(['/attestation']);
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }

}
