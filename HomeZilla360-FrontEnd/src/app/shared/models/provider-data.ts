import { ServiceData } from "./provider-services";

export class ProviderData{
    id?:string;
    firstName?:string;
    lastName?:string;
    email?:string;
    mobileNumber?:number;
    location?:string;
    profilePicture?:string;
    description?: string;
    serviceData?: ServiceData[];
}