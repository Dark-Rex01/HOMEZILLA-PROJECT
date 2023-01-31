import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Orders } from '../../models/orders';
import { OrderDetailsService } from '../../services/order-details.service';
import { saveAs } from 'file-saver-es';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  badgeColor:string ="success";
  orderHistory: Orders;
  detailsDialog: boolean;
  viewDetailData: any;
  totalRecords: number = 0;
  pageNumber:number = 1;
  cols: any[];
  exportColumns: any[];
constructor(private ordersService: OrderDetailsService) {
  this.orderHistory= new Orders();
 }
  
  ngOnInit() {
    this.getProviderPastOrders();
    
    this.cols = [
      { field: "serviceName", header: "Service Name" },
      { field: "appointmentFrom", header: "Appointment From" },
      { field: "appointmentTo", header: "Appointment To" },
      { field: "orderStatus", header: "Order Status" }
    ];

    this.exportColumns = this.cols.map(col => ({
      title: col.header,
      dataKey: col.field
    }));
  }

  getProviderPastOrders(){
    this.ordersService.getProvidersPastOrders(this.pageNumber).subscribe((orders: Orders) => {
      this.orderHistory = orders;
      this.totalRecords = orders.totalPages * 10;
    });
  }
  viewDetails(orderHistory: any){
    this.viewDetailData = this.orderHistory.data.find(x => x.id == orderHistory)
    this.detailsDialog = true;
  }
  paginate(event: any) {
    this.pageNumber = ++event.page ;
    this.getProviderPastOrders();
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.orderHistory.data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "order-history");
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver-es").then(FileSaver => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }
}
