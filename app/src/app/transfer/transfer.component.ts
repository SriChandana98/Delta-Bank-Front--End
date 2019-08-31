import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {LoginComponent} from '../login/login.component';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  reciversAccountNumber:number;
  accountHolderName:string;
  transferAmount:number;
  response: any;
  constructor(public  http:HttpClient) { }
  transfer(reciversAccountNumber:number,accountHolderName:string,transferAmount:number){

    var senderid:number;
    var reciverid:number;
    var actualbalanceofsender:number;
    var actualbalanceofreciver:number;
    if(transferAmount>=10000){
      alert("You are going to transfer amount more than 10000");
    }
    
    this.http.get("http://localhost:3001/balance").toPromise().
    then(data=> {
    this.response=data;
    var i:number=0;
    for(i=0;i<this.response.length;i++){
      if(this.response[i].accountnumber==LoginComponent.accountNumber){
        senderid=this.response[i].id;
        actualbalanceofsender=this.response[i].balance;
      }
      if(this.response[i].accountnumber==reciversAccountNumber){
        reciverid=this.response[i].id;
        actualbalanceofreciver=this.response[i].balance;
      }  
    }});
  
    this.http.put("http://localhost:3000/customers/"+senderid,
        {
          "balance":actualbalanceofsender-transferAmount
         
      })
      .toPromise()
      .then(()=>{this.response="updation successfull"})

      this.http.put("http://localhost:3000/customers/"+reciverid,
      {
        "balance":actualbalanceofreciver+transferAmount
       
      })
      .toPromise()
      .then(()=>{this.response="updation successfull"})  
     


  }
  ngOnInit() {
  }

}
