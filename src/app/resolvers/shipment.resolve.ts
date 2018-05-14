import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { DataService } from "../data.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ShipmentResolver implements Resolve<any> {
    constructor(private dataService: DataService, private http: HttpClient) { }

    resolve(): Observable<any> {
        return
    }
}