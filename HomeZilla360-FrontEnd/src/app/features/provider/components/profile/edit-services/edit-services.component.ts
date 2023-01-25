import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ServiceData } from '../../../models/service-data';
import { ServiceId } from '../../../models/service-id';
import { ServiceList } from '../../../models/service-list';
import { User } from '../../../models/user';
import { ProviderService } from '../../../services/provider-service.service';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.css']
})
export class EditServicesComponent implements OnInit {
  user: User;
  value: number = 22;
  services: ServiceData[];
  locationList: Array<string>;
  serviceList: ServiceList;
  public userForm!: FormGroup;
  public updateForm!:FormGroup;
  newService: ServiceData = {};
  profilePicture!: File;
  display: boolean = false;
  serviceNames?: string;
  constructor(
    private providerService: ProviderService,
    public fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.user = new User();
    this.services = new Array<ServiceData>();
    this.serviceList = new ServiceList();
    this.userForm = this.fb.group({
      service: '',
      price: [Number,Validators.required],
    });
    this.updateForm = this.fb.group({
      id:'',
      service:'',
      price: [Number,Validators.required],
    })

  }

  ngOnInit() {
    this.getService();
    this.checkService();
  }


  getService() {
    this.providerService.getServiceData().subscribe((res) => {
      this.services = res;
    });
  }
  
  checkService() {
    this.providerService.checkServiceData().subscribe((res) => {
      this.serviceList = res;
    });
  }


  addService() {
    this.newService = this.userForm.value;
    this.providerService.addServiceData(this.newService).subscribe({
      next: (response) => {
        
        this.services.push(this.newService);
        this.checkService();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Added New Service Successfully',
          life: 3000,
        });
        this.getService();
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error while Adding New Service',
          life: 3000,
        });
      },
    });
  }

  updateService(service: ServiceData) {
    service.price = this.updateForm.value.price;
    this.providerService
      .updateServiceData(service)
      .subscribe( { next: (response) => {
        this.getService();
        this.messageService.add({
          severity: 'success',
          summary: 'Updated',
          detail: 'Updated Service Successfully',
          life: 3000,
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error while Updating New Service',
          life: 3000,
        });
      },
      });
  }
  deleteService(ServiceId: ServiceId) {

    this.providerService.deleteServiceData(ServiceId).subscribe({
      next: (response) => {
        this.checkService();
        this.services.pop();
        this.getService();
        this.messageService.add({
          severity: 'error',
          summary: 'Deleted',
          detail: 'Deleted Service Successfully',
          life: 3000,
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error while Deleting New Service',
          life: 3000,
        });
      },
    });
  }
}
