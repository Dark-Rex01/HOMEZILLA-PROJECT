import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, PrimeNGConfig, SelectItem } from 'primeng/api';
import { JwtService } from 'src/app/core/utils/jwt.service';
import { ProviderList } from 'src/app/shared/models/provider-list';
import { SearchService } from 'src/app/shared/services/search.service';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    // params
    query: string= "";
    location:string= "";
    pageNumber: number = 0;

    // Page Data
    providerList: ProviderList[] = Array<ProviderList>();
    locationList: Array<string> = [];

    sortOptions: SelectItem[] = [
        {label: 'Select a Location', value: null}
    ];

    totalRecords: number = 0;
    visibility: boolean = false;

    constructor(
        private primengConfig: PrimeNGConfig,
        private searchService : SearchService, 
        private route: ActivatedRoute,
        private router: Router,
        private resultService: ResultService,
        private jwtService: JwtService,
        private messageService: MessageService

    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.location = params['Location'];
            this.query = params['Service'];
            this.pageNumber = params['PageNumber']
        });
        
        this.getData();
        this.getFilterData();

        this.primengConfig.ripple = true;
    }
    
    onLocationChange(event: any) {
        this.location = event.value;
        this.getData();
    }

    paginate(event: any) {
        this.pageNumber = event.page + 1 ;
        this.getData();
    }

    getData()
    {
        this.searchService.getSearchResults(this.query,this.location,this.pageNumber).subscribe(posts =>{
            this.searchService.searchData.next(posts);
        });

        this.searchService.searchData.subscribe(res => {
            this.providerList = res.data;
            this.totalRecords = res.totalPages * 6;
        })
        this.router.navigate(['/search-result'],{queryParams: {Service: this.query,Location: this.location, PageNumber: this.pageNumber}})
  }

    getFilterData()
    {
        this.resultService.getLocation().subscribe(res => {
            this.locationList = res;
            this.locationList.forEach(obj => {
                this.sortOptions.push({
                    label:obj,
                    value:obj
                 })
                 
            })
        })
    }

    show(id: string)
    {
        if(this.jwtService.isLogged())
        {
            this.visibility = true;
            this.router.navigate([],{queryParams: {Service: this.query,Location: this.location, PageNumber: this.pageNumber, id:id}})
        }
        else{
            this.messageService.add({severity:'error', summary: "Sign In Required", life: 3000});
        }
         }
    close()
    {
        this.visibility = false;
    }
}

