import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponent implements OnInit {
    model! : NgbDateStruct;
    @Input() data : any;
    orderForm:any = FormGroup;
    title: any;
    orderEdit: boolean = false;
    orderDetails: any = [];
    constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder,
      public http: HttpClient) {
      this.orderForm = this.formBuilder.group({
        orderId:"",
        customerName:"",
        customerAddress:"",
        customerPhone:"",
        deliveryDate:"",
        totalAmount:""
     });
    }
    ngOnInit(): void {
      this.http.get('assets/sampleJson/sampleData.json').subscribe((res:any)=>{
       this.orderDetails = res.orderDetails
       });
      if(this.data != null){
        this.title = "Edit Order Details";
        this.orderEdit = true;
        this.edit();
      }
      else{
        this.title = "New Order";
        this.orderEdit = false;
      }
    }
    edit(){
     const f = this.orderForm.controls;
     f.orderId.setValue(this.data.orderId); 
     f.customerName.setValue(this.data.customerName); 
     f.customerAddress.setValue(this.data.customerAddress); 
     f.customerPhone.setValue(this.data.customerPhone); 
     f.orderId.setValue(this.data.orderId); 
     f.totalAmount.setValue(this.data.totalAmount); 
    }
    save(){
      if(this.orderEdit){
      const index = this.orderDetails.findIndex((x:any) => x.orderId == this.data.orderId);
       this.orderDetails.splice(index,1);
       const f = this.orderForm.controls;
      const data ={
       "orderId" : f.orderId.value,
       "customerName":f.customerName.value,
       "customerAddress":f.customerAddress.value,
       "customerPhone":f.customerPhone.value,
       "deliveryDate":f.deliveryDate.value,
       "totalAmount":f.totalAmount.value
      }
      this.orderDetails.push(data);
      console.log(this.orderDetails)
      this.close();
      }else{
        const f = this.orderForm.controls;
      const data ={
       "orderId" : f.orderId.value,
       "customerName":f.customerName.value,
       "customerAddress":f.customerAddress.value,
       "customerPhone":f.customerPhone.value,
       "deliveryDate":f.deliveryDate.value,
       "totalAmount":f.totalAmount.value
      }
      this.orderDetails.push(data);
      console.log(this.orderDetails)
      this.close();
      }
     
    }
    close(){
      this.activeModal.close();
    }
}
