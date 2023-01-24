import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";

@Injectable({
    providedIn: 'root'
})

export class ResultService { 
    
    baseUrl = environment.apiUrl;
    constructor(private http : HttpClient) { }
    
    // get all location
    getLocation() : Observable<string[]>
    {
        return this.http.get<string[]>(`${this.baseUrl}api/Providers/Get-Location`);
    }
}