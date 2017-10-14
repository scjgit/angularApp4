import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {
    constructor(private http: Http) {
    }

    get(path) {
        return this.http.get("https://local.expediapartnercentral.com.lisqa7.sb.karmalab.net:8443/lodging/promotions/promotionList.json?htid=533"+new Date().getMilliseconds())
        .map(r => r.json());
    }
}