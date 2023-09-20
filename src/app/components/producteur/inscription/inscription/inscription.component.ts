import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NavbarService} from "../../../../shared/navbar/navbar.service";

@Component({
  selector: 'inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

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

    table :boolean;
    form :boolean;

    constructor(private router: Router, private nav: NavbarService) {
        this.form = false;
        this.table = true;
    }
    ngOnInit() {
        this.nav.show();
        this.table = true;
        this.form = false
    }

    showDiv = {
        previous : false
    }

    visible:boolean = false;
    ReadMore:boolean = false;

    onclick()
    {
        this.ReadMore = !this.ReadMore; //not equal to condition
        this.visible = !this.visible
    }

    get personal() {
        return this.personalDetails.controls;
    }
    get produit() {
        return this.produitDetails.controls;
    }
    get degustation(){
        return this.degustationDetails.controls;
    }
    get composition(){
        return this.compositionDetails.controls;
    }
    get transmission(){
        return this.transmissionDetails.controls;
    }
    get production(){
        return this.productionDetails.controls;
    }
    get acceptation(){
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
        if (this.step == 1) {
            this.personal_step = true;
            this.step++;
        }

        else if (this.step == 2) {
            this.produit_step = true;
            this.step++;
        }
        else if (this.step == 3) {
            this.degustation_step = true;
            this.step++;
        }
        else if (this.step == 4) {
            this.composition_step = true;
            this.step++;
        }
        else if (this.step == 5) {
            this.transmission_step = true;
            this.step++;
        }
        else if (this.step == 6) {
            this.production_step = true;
            this.step++;
        }
        else if (this.step == 7) {
            this.acceptation_step = true;
            this.step++;
        }
    }

    previous() {
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
            this.composition_step = false;
        }
        if (this.step == 5) {
            this.transmission_step = false;
        }
        if (this.step == 6) {
            this.production_step = false;
        }
        if (this.step == 7) {
            this.acceptation_step = false;
        }
    }

    submit() {
        if (this.step == 8) {
            this.recap_step = true;
            this.router.navigate(['/list_producteurs']);
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
