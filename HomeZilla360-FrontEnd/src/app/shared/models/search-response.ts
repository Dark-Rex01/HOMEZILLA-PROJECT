import { ProviderList } from "./provider-list";

export class SearchResponse{
    currentPage: number = 1;
    totalPages:number =10;
    data : ProviderList[] = new Array<ProviderList>();

}