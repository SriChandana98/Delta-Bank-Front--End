import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.css']
})
export class TransactionViewComponent implements OnInit {
date:Date;
amount:number;
availableBalance:number;
Description:string;
type:string;
status:string;
  constructor() { }

  ngOnInit() {
  }

}
