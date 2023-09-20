
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import {Producteur} from "../../../../model/Producteur";


@Injectable({
    providedIn: 'root',
})
export class ProducteurService {
    private baseUrl = 'http://localhost:3000';

    constructor(
        private http: HttpClient,
    ) {}

    public testOnlineAPiCovid() {
        return this.http.get('https://corona.lmao.ninja/v2/countries');
    }

    public getProducteur(): Observable<Producteur[]> {
        const apiUrl = `${this.baseUrl}/producteurs`;
        return this.http.get<Producteur[]>(apiUrl);
    }

}
