import { OrderData } from "./order-data";

export class Orders{
    currentPage: number= 1;
    totalPages: number =10;
    data!: OrderData[]
}
