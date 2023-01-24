import { ServiceData } from "./service-data";

export class User{
    id?:string;
    firstName?:string;
    lastName?:string;
    email?:string;
    userName?:string;
    mobileNumber?:number;
    profilePicture:string ='';
    location?:string;
    description?: string;
    serviceData?: ServiceData[];
}