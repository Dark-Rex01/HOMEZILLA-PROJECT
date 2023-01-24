import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProviderData } from '../models/provider-data';
import { SearchResponse } from '../models/search-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = environment.apiUrl;
  public searchData : Subject<SearchResponse> = new Subject<SearchResponse>();
  public providerData : Subject<ProviderData> = new Subject<ProviderData>();


  constructor(private http : HttpClient) { }
  getSearchResults(query:string,location:string,pageNumber:number): Observable<SearchResponse>{
    let params = this.getParams(query,location,pageNumber);
    var res = this.http.get<SearchResponse>(`${this.baseUrl}/api/Search`, {params: params});
    return res;
  }

  getProviderById(providerId?: string): Observable<ProviderData>{
    const queryParams: Params = { id: providerId};
    var res = this.http.get<ProviderData>(`${this.baseUrl}/Get-Provider`, {params: queryParams});
    return res;
  }

  getParams(Service:string,Location:string,PageNumber:number): HttpParams {
    let obj = {Service,Location,PageNumber};
    return Object.keys(obj).reduce((params, key) => 
            obj[key as keyof typeof obj] ? params.append(key, obj[key as keyof typeof obj]) : params, new HttpParams())
  }
  
}


