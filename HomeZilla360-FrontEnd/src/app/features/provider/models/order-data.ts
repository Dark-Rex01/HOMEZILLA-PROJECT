import { User } from "../../customerDashboard/model/user";
import { viewDetails } from "./viewDetails";

export class OrderData{
    id?: string;
    appointmentFrom?: Date;
    appointmentTo?: Date;
    serviceName?: string ;
    status?: string;
    customer?: viewDetails;
}