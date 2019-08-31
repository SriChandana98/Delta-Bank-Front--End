import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
balance:number;
  response: any;

  constructor(public  http:HttpClient) {

  this.http.get("http://localhost:3001/balance").toPromise().
  then(data=> {
  this.response=data;
  var i:number=0;
    for(i=0;i<this.response.length;i++){
      console.log(this.response[i].accountnumber+"   "+LoginComponent.accountNumber);
      if(this.response[i].accountnumber==LoginComponent.accountNumber){
          this.balance=this.response[i].balance;
      }
    }
    });
   
  }

  ngOnInit() {
  }

}
