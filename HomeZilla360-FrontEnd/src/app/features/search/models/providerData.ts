import { ServiceData } from "./serviceData";

export class ProviderData{
    id?:string;
    userName?: string;
    firstName?:string;
    lastName?:string;
    email?:string;
    mobileNumber?:number;
    location?:string;
    profilePicture?:string;
    description?: string;
    serviceData: any[] = [];
}