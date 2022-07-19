import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal-component/modal-component.component';



@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {
  constructor(public http: HttpClient, private modalService : NgbModal){}
  headers =["Order Id","Customer Name","Customer Address","Phone", "Delivery Date","Total Amount","Action"];
  orderDetails: any = [];
 ngOnInit(): void {
  this.getOrderDeatils();
 }
 getOrderDeatils() : void{
  this.http.get('assets/sampleJson/sampleData.json').subscribe((res:any)=>{
    this.orderDetails = JSON.parse(JSON.stringify(res)).orderDetails;
   })
 }
 delete(index: any): void{
  var modal = confirm(' Do you want to delete ?');
  if(modal == true){
    this.orderDetails.splice(index,1);
  }
  };
  openModal(data: any):void{
    const modalRef = this.modalService.open(ModalComponent,{
      backdrop: 'static'
    });
    modalRef.componentInstance.data = data;
  }
  newOrder(){
    const modalRef = this.modalService.open(ModalComponent,{
      backdrop: 'static'
    });
    modalRef.componentInstance.data = null;
  }
 }

