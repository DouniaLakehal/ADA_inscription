import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {NavbarService} from "../shared/navbar/navbar.service";
import {SimpleModalService} from "ngx-simple-modal";
import {AlertComponent} from "./producteur/alert/alert.component";

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
        ngb-progressbar {
            margin-top: 5rem;
        }
    `]
})

export class ComponentsComponent implements OnInit {

    currDiv: string = 'A';

    ShowDiv(divVal: string) {
        this.currDiv = divVal;
    }

    isArray(value: any): boolean {
        return Array.isArray(value);
    }

    showDiv = {
        previous: false
    }

    setInput() {
        console.log('the selected input is:');
    }

    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: { year: number, month: number };
    model: NgbDateStruct;

    pinkboxStyle: { [key: string]: string } = { 'transform': 'translateX(80%)' };
    showSignUp: boolean = true;

    togglePinkbox() {
        this.pinkboxStyle = this.showSignUp ? { 'transform': 'translateX(0%)' } : { 'transform': 'translateX(80%)' };
        this.showSignUp = !this.showSignUp;
    }

    constructor(private renderer: Renderer2, private router: Router, public nav: NavbarService,
                private SimpleModalService: SimpleModalService) {
    }


    showAlert() {
        this.SimpleModalService.addModal(AlertComponent, {title: 'Alert title!', message: 'Alert message!!!'});
    }

    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        this.nav.hide();
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }

    gotoHome() {
        this.router.navigate(['/accueil']);  // define your component where you want to go
    }

    title = "Ngx Angular AutoComplete";
    selected_employee: any;
    public employees = [
        {
            id: 1,
            name: "CPAM"
        },
        {
            id: 2,
            name: "Twins group"
        },
        {
            id: 3,
            name: "CGU"
        },
        {
            id: 4,
            name: "SENCRL"
        },
        {
            id: 5,
            name: "XLS CONSULTING"
        },
        {
            id: 6,
            name: "CTM"
        },
        {
            id: 7,
            name: "Alfons"
        },
        {
            id: 8,
            name: "Rycca"
        },
        {
            id: 9,
            name: "Mandy"
        },
        {
            id: 10,
            name: "Bunni"
        },
        {
            id: 11,
            name: "Stepha"
        },
        {
            id: 12,
            name: "Pete"
        },
        {
            id: 13,
            name: "Keary"
        },
        {
            id: 14,
            name: "Esme"
        },
        {
            id: 15,
            name: "Juieta"
        }
    ];

    selectEvent(event) {
        this.selected_employee = JSON.stringify(event)
    }

}
