import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { BookOrder } from '../../models/book-order';
import { ProviderData } from '../../models/providerData';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit,  OnChanges{

  @Input() visibility: boolean = false;
  @Output() viewDetailsDestroyed = new EventEmitter<boolean>();

  minimumDate = new Date();


  serviceName: any;
  id: string = "";
  providerData: ProviderData =  new ProviderData();
  serviceList: any[] = [];
  orderData: BookOrder = new BookOrder();
  appointmentFrom!: Date;
  appointmentTo!: Date;
  constructor(
    private primengConfig: PrimeNGConfig,
    private viewService: ViewService,
    private route: ActivatedRoute,
    private messageService: MessageService,
  ) { 
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  cancel() {
      this.visibility = false;
      this.viewDetailsDestroyed.emit(false);
  }
  ngOnChanges(): void {
    if(this.visibility == true)
    {
      this.route.queryParams.subscribe(params => {
        this.id = params['id'];
    });
      this.viewService.getProviderData(this.id).subscribe(res => {
        this.providerData = res;
        res.serviceData.forEach(element => {
          this.serviceList.push({name: element.service});

        });
      })
    }  
  }

  book()
  {
    this.orderData.appointmentFrom = this.appointmentFrom;
    this.orderData.appointmentTo = this.appointmentTo;
    this.orderData.serviceName = this.serviceName.name;
    this.orderData.providerId = this.id;
    this.viewService.bookOrder(this.orderData).subscribe({
      next: (res)=> {
        if(res === "Placed the Order Successfully")
        {
          this.messageService.add({severity:'success', summary: res, life: 3000});
        }
        else{
          this.messageService.add({severity:'error', summary: res, life: 3000});
        }
      },
      error:(err => {
        console.log(err);
      })
      
    })
  }

}
