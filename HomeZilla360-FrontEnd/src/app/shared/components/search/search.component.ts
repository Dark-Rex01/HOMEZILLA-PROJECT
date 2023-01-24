import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string= "";
  location:string= "";
  pageNumber: number=1;

  constructor(
    public searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onSearch(){
      this.route.queryParams.subscribe(params => {
          this.location = params['Location']
      });
      this.searchService.getSearchResults(this.query,this.location,this.pageNumber).subscribe(posts =>{
         this.searchService.searchData.next(posts);
      });
      this.router.navigate(['/search-result'],{queryParams: {Service: this.query,Location: this.location, PageNumber: this.pageNumber}})
  }
}
