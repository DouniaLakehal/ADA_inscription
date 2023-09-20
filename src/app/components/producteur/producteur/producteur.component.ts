import {Component, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {NavbarService} from "../../../shared/navbar/navbar.service";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'producteur',
    templateUrl: './producteur.component.html',
    styleUrls: ['./producteur.component.scss']
})
export class ProducteurComponent implements OnInit {

    currDiv: string = 'A';

    ShowDiv(divVal: string) {
        this.currDiv = divVal;
    }

    isArray(value: any): boolean {
        return Array.isArray(value);
    }

    orderTypes = {
        id: 1,
        orders: [
            {
                id: 1,
                orderType: "CPAM",
                nom: "Ahmed",
                prenom: "Alami",
                email: "Ahmed.alami@cpam.com"
            },
            {
                id: 2,
                orderType: "Twins group",
                nom: "Ahmed",
                prenom: "Alami",
                email: "Ahmed.alami@cpam.com"
            },
            {
                id: 3,
                orderType: "CGU",
                nom: "Ahmed",
                prenom: "Alami",
                email: "Ahmed.alami@cpam.com"
            },
            {
                id: 4,
                orderType: "RSI",
                nom: "Ahmed",
                prenom: "Alami",
                email: "Ahmed.alami@cpam.com"
            },
            {
                id: 5,
                orderType: "SENCRL",
                nom: "Ahmed",
                prenom: "Alami",
                email: "Ahmed.alami@cpam.com"
            },
            {
                id: 6,
                orderType: "XLS CONSULTING",
                nom: "Ahmed",
                prenom: "Alami",
                email: "Ahmed.alami@cpam.com"
            }
        ]
    };

    showDiv = {
        previous : false
    }

    setInput(){
        console.log('the selected input is:');
    }

    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;

    constructor( private renderer : Renderer2, private router: Router, public nav: NavbarService) {}

    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        this.nav.hide();
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }

    gotoRecap(){
        this.router.navigate(['/recap']);  // define your component where you want to go
    }
}
