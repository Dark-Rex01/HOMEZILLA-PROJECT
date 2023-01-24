import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Params } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { BookOrder } from "../models/book-order";
import { ProviderData } from "../models/providerData";

@Injectable({
    providedIn: 'root'
})

export class ViewService { 
    
    baseUrl = environment.apiUrl;
    constructor(private http : HttpClient) { }
    
    // get all location
    getProviderData(providerId: string) : Observable<ProviderData>
    {
        const queryParams: Params = { id: providerId};
        return this.http.get<ProviderData>(`${this.baseUrl}Get-Provider`, {params: queryParams});
    }

    bookOrder(orderData: BookOrder)
    {
        var res =  this.http.post<any>(`${this.baseUrl}BookOrder`,orderData, {
        responseType: 'text' as 'json'
        });
        return res;
    }
} 






