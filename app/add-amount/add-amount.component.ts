import { Component, OnInit } from '@angular/core';
import {RegisterComponent} from '../register/register.component';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-add-amount',
  templateUrl: './add-amount.component.html',
  styleUrls: ['./add-amount.component.css']
})
export class AddAmountComponent implements OnInit {
  response;
  amount:number;
  status:string;
  //accnum:number =RegisterComponent.id;
addAmount(){
if(this.amount<5000){
  alert("please enter amount more than 5000");
}
else{
this.postCustomer();
  this.status="You have added successfully";
}
}

postCustomer(){
  console.log("afterpost");
  this.http.post("http://localhost:3001/balance",
    {
      
       
        "balance":this.amount
        
  })
  .toPromise()
  .then(()=>{this.response="Insertion successfull"})
 
  console.log("afterpost");
 }
  constructor(public  http:HttpClient) { }

  ngOnInit() {
  }

}
