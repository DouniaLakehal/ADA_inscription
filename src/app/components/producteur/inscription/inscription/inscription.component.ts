import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {NavbarService} from "../../../../shared/navbar/navbar.service";
import {ViewportScroller} from "@angular/common";
import {debounceTime, fromEvent, map, Subscription, tap} from 'rxjs';
import {VERSION} from "@angular/cdk";

@Component({
    selector: 'inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

    @ViewChild('tablist', { static: true }) tablistElement: ElementRef;

    personalDetails!: FormGroup;
    produitDetails!: FormGroup;
    degustationDetails!: FormGroup;
    compositionDetails!: FormGroup;
    transmissionDetails!: FormGroup;
    productionDetails!: FormGroup;
    acceptationDetails!: FormGroup;
    recapDetails!: FormGroup;
    personal_step = false;
    produit_step = false;
    degustation_step = false;
    composition_step = false;
    transmission_step = false;
    production_step = false;
    acceptation_step = false;
    recap_step = false;
    step = 1;
    files: any[] = [];

    table: boolean;
    form: boolean;

    form1Visible: boolean;
    form2Visible: boolean;
    form3Visible: boolean;
    form4Visible: boolean;
    form5Visible: boolean;

    transactionValue = null;
    MAX_TRANSACTION_VALUE : number;
    buttonText: string= 'DONNEES DE(S) PRODUIT(S) PARTICIPANT AU CONCOURS';

    constructor(private router: Router) {
        this.form = false;
        this.table = true;

        this.form1Visible = true;
        this.form2Visible = false;
        this.form3Visible = false;
        this.form4Visible = false;
        this.form5Visible = false;
    }

    ngOnInit() {
       // this.nav.show();
        this.table = true;
        this.form = false;
    }


    updateText(){
        this.buttonText= 'DONNEES DE(S) PRODUIT(S) PARTICIPANT AU CONCOURS';
    }

    toggleForms() {
        this.form1Visible = !this.form1Visible;
        this.form2Visible = !this.form2Visible;
        this.buttonText = 'PREPARATION A LA DEGUSTATION';
        document.getElementById("tab-2").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }

    toggleForms0() {
        document.getElementById("content").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
        this.form1Visible = !this.form1Visible;
        this.form2Visible = !this.form2Visible;
        this.form2Visible = false;
        this.form3Visible = false;
        this.form4Visible = false;
        this.form5Visible = false;
        this.buttonText = 'PREPARATION A LA DEGUSTATION';
    }

    toggleForms1() {
        document.getElementById("content").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
        this.form3Visible = !this.form3Visible;
        this.form2Visible = !this.form2Visible;
        this.buttonText = 'COMPOSITION DE VOTRE PRODUIT';
    }
    toggleForms2() {
        document.getElementById("content").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
        this.form3Visible = !this.form3Visible;
        this.form4Visible = !this.form4Visible;
        this.buttonText = 'TRANSMISSION DE l’ETIQUETTE DU PRODUIT';
    }

    toggleForms3() {
        document.getElementById("content").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
        this.form5Visible = !this.form5Visible;
        this.form4Visible = !this.form4Visible;
        this.buttonText = 'PRODUCTION ANNUELLE';
    }

    checkTransactionValues(): void {
        if (parseInt(this.transactionValue) > this.MAX_TRANSACTION_VALUE) {
            this.transactionValue = '';
        }
    }


    activeTabIndex: number = 0;
    tabsVisibility: boolean[] = [true, false, false]; // Initial state: show the first tab, hide others

    showNextTab() {
        // Hide the current tab
        this.tabsVisibility[this.activeTabIndex] = false;
        // Move to the next tab in a circular manner
        this.activeTabIndex = (this.activeTabIndex + 1) % this.tabsVisibility.length;
        // Show the next tab
        this.tabsVisibility[this.activeTabIndex] = true;
    }


    @ViewChild('myform') form1: NgForm;
    data = null;
    editMode = false;
    editIndex;

    addData(form) {
        var val = form.controls;
        const newData = {
            composant: val.composant1.value,
            matiere: val.matiere1.value,
            pourcent: val.pourcent1.value,
            fournisseur: val.fournisseur1.value,
            lieu: val.lieu1.value
        }
        if (this.editMode) {
            this.data[this.editIndex] = newData;
        } else {
            this.data.push(newData);
        }
        this.form1.reset();
    }

    onDel(index) {
        this.data.splice(index, 1);
    }

    onEdit(index) {
        this.editMode = true;
        this.editIndex = index;
        this.form1.setValue({
            composant1: this.data[index].composant,
            matiere1: this.data[index].matiere,
            pourcent1: this.data[index].pourcent,
            fournisseur1: this.data[index].fournisseur,
            lieu1: this.data[index].lieu,
        });
    }

    showDiv = {
        previous: false
    }

    visible: boolean = false;
    ReadMore: boolean = false;

    onclick() {
        this.ReadMore = !this.ReadMore; //not equal to condition
        this.visible = !this.visible
    }

    get personal() {
        return this.personalDetails.controls;
    }

    get produit() {
        return this.produitDetails.controls;
    }

    get degustation() {
        return this.degustationDetails.controls;
    }

    get acceptation() {
        return this.acceptationDetails.controls;
    }

    get recap() {
        return this.recapDetails.controls;
    }

    ajouter() {
        this.table = false;
        this.form = true;
    }

    save() {
        this.table = true;
        this.form = false;
    }

    next() {

        document.getElementById("msform").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });

        if (this.step == 1) {
            this.personal_step = true;
            this.step++;
        } else if (this.step == 2) {
            this.produit_step = true;
            this.step++;
            this.buttonText = 'DONNEES DE(S) PRODUIT(S) PARTICIPANT AU CONCOURS';
        } else if (this.step == 3) {
            this.degustation_step = true;
            this.step++;
        } else if (this.step == 4) {
            this.acceptation_step = true;
            this.step++;
        }
    }

    previous() {
        document.getElementById("msform").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
        this.step--;
        if (this.step == 1) {
            this.personal_step = false;
        }
        if (this.step == 2) {
            this.produit_step = false;
        }
        if (this.step == 3) {
            this.degustation_step = false;
        }
        if (this.step == 4) {
            this.acceptation_step = false;
        }
    }

    submit() {
        if (this.step == 5) {
            this.recap_step = true;
            this.router.navigate(['/accueil']);
        }
    }


    onFileDropped($event) {
        this.prepareFilesList($event);
    }

    /**
     * handle file from browsing
     */
    fileBrowseHandler(files) {
        this.prepareFilesList(files);
    }

    /**
     * Delete file from files list
     * @param index (File index)
     */
    deleteFile(index: number) {
        this.files.splice(index, 1);
    }

    /**
     * Simulate the upload process
     */
    uploadFilesSimulator(index: number) {
        setTimeout(() => {
            if (index === this.files.length) {
                return;
            } else {
                const progressInterval = setInterval(() => {
                    if (this.files[index].progress === 100) {
                        clearInterval(progressInterval);
                        this.uploadFilesSimulator(index + 1);
                    } else {
                        this.files[index].progress += 5;
                    }
                }, 200);
            }
        }, 1000);
    }

    /**
     * Convert Files list to normal array list
     * @param files (Files List)
     */
    prepareFilesList(files: Array<any>) {
        for (const item of files) {
            item.progress = 0;
            this.files.push(item);
        }
        this.uploadFilesSimulator(0);
    }

    /**
     * format bytes
     * @param bytes (File size in bytes)
     */
    formatBytes(bytes, decimals) {
        if (bytes === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const dm = decimals <= 0 ? 0 : decimals || 2;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
}
