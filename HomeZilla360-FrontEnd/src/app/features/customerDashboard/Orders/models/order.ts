import { OrderData } from "./orderData";

export class Orders{
    [x: string]: any;
    currentPage: number= 1;
    totalPages: number =10;
    data!: OrderData[]
}