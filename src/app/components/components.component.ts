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

    selectedOption: string = 'Groupement';
    identifiantDuGroupement: string = '';
    typeDeGroupement: string= '';
    nomDeGroupement: string= '';
    المجموعة: string = '';
    nom: string = '';
    prenom: string = '';
    region: string = '';
    province: string = '';
    categorie: string = '';
    sousCategorie: string = '';
    email: string = '';
    tel: string = '';
  
    data: Record<string, string[]> = {
      "Miels": [
        "D'rgumes",
        "D'euphorbe",
        'De thym',
        "D'origan",
        "D'eucaliptus",
        "D'arbousier",
        'De Romarin',
        'Multi fleurs',
        'autre miels',
      ],
  
      'Huiles Alimentaires': [
        "Huile d'olive",
        "Huile d'argane (alimentaire)",
        "Produits à base d'huile d'olive",
        'Autre huiles',
      ],
  
      "Produits D'origine Animal": [
        'Fromage Frais',
        'Autres Produits laitiers(beurre, leben, yaourts, crèmes, etc)',
        'Khlia',
        'Produits à base de viande',
        'autre produits',
      ],
  
      'Dattes Et Autre Produits Origine': [
        'Dattes et produits à base de dattes',
        "Olives et produits à base d'olive",
        'Fruits séché',
        'Produit à base de Fruits (jus, sirop, pâtes de fruits, etc)',
        'Produits à base de légumes',
        'Confitures et gélées',
        'Amlou',
        'Vinaigres',
      ],
  
      'Produits De Cereale': [
        'Couscous blé dur',
        'Couscous multi-céréales',
        'Couscous aromatisé',
        'Autres produits à base de céréales',
        'Produits à base de légumes',
        'Confitures et gélées',
        'Amlou',
        'Vinaigres',
      ],
    };

    categories: string[]= Object.keys(this.data);
    selectedCategory: string= '';
    subCategories: string[] = [''];
    selectedSubCategory: string = '';


    onCategoryChange(){
      this.subCategories = this.data[this.selectedCategory] || [];
    }

  regionData : Record<string, string[]> = {
      "Tanger-Tétouan-Al Hoceima": [
          "Préfecture de Tanger-Assilah",
          "Préfecture de M'diq-Fnideq",
          'Province de Tétouan',
          "Province de Fahs-Anjra",
          "Province de Larache",
          "Province d'Al Hoceïma",
          'Province de Chefchaouen',
          "Province d'Ouezzane", 
        ],

        " l'Oriental": [
          "Préfecture d'Oujda-Angad",
          "Province de Nador",
          'Province de Driouch',
          "Province de Jerada",
          "Province de Berkane",
          "Province de Taourirt",
          'Province de Guercif',
          "Province de Figuig",
        ],

        " Fès-Meknès": [
          "Préfecture de Fès",
          "Préfecture de Meknès",
          "Province d'El Hajeb",
          "Province d'Ifrane",
          "Province de Moulay Yaâcoub",
          "Province de Séfrou",
          'Province de Boulemane',
          "Province de Taounate",
          "Province de Taza",
        ],

        "  Rabat-Salé-Kénitra": [
          "Préfecture de Rabat",
          "Préfecture de Salé",
          "Préfecture de Skhirate-Témara",
          "Province de Kénitra",
          "Province de Khémisset",
          "Province de Sidi Kacem",
          'Province de Sidi Slimane',
        ],

        "  Béni Mellal-Khénifra": [
          "Province de Béni-Mellal",
          "Province d'Azilal",
          "Province de Fquih Ben Salah",
          "Province de Khénifra",
          "Province de Khouribga",
        ],

        " Casablanca-Settas": [
          "Préfecture de Casablanca",
          "Préfecture de Mohammédia",
          "Province d'El Jadida",
          "Province de Nouaceur",
          "Province de Médiouna",
          "Province de Benslimane",
          'Province de Berrechid',
          "Province de Settat",
          "Province de Sidi Bennour",
        ],

        " Marrakech-Safi": [
          "Préfecture de Marrakech",
          "Province de Chichaoua",
          "Province d'Al Haouz",
          "Province d'El Kelaâ des Sraghna",
          "Province d'Essaouira",
          "Province de Rehamna",
          'Province de Safi',
          "Province de Youssoufia",
        ],

        " Drâa-Tafilalet": [
          "Province d'Errachidia",
          "Province de Ouarzazate",
          "Province de Midelt",
          "Province de Tinghir",
          "Province de Zagora",
        ],

        " Souss-Massa": [
          "Préfecture d'Agadir Ida-Outanane",
          "Préfecture d'Inezgane-Aït Melloul",
          "Province de Chtouka-Aït Baha",
          "Province de Taroudant",
          "Province de Tiznit",
          "Province de Tata",
        ],

        " Guelmim-Oued Noun": [
          "Province de Guelmim",
          "Province d'Assa-Zag",
          "Province de Tan-Tan",
          "Province de Sidi Ifni",
        ],

        "  Laâyoune-Sakia El Hamra": [
          "Province de Laâyoune",
          "Province de Boujdour",
          "Province de Tarfaya",
          "Province d'Es-Semara",
        ],

        "   Dakhla-Oued Ed Dahab": [
          "Province d'Oued Ed Dahab",
          "Province d'Aousserd",
        ],
  }

  regions: string[]= Object.keys(this.regionData);
  selectedRegion: string = '';
  provinces: string[]= [''];
  selectedProvince : string = '';

  onRegionChange(){
      this.provinces = this.regionData[this.selectedRegion] || [];
  }

}
