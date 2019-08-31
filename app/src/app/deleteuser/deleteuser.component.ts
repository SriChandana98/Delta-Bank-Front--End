import { Component, OnInit } from '@angular/core';
import {AfterLoginComponent} from '../after-login/after-login.component'
import {Router} from '@angular/router';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  accountNumberOfuserToBeDeleted:number;
  response: any;
  Status:string;
  DeleteCall(){
    
    this.http.delete("http://localhost:3002/customers/"+this.accountNumberOfuserToBeDeleted,
    )
    .toPromise()
    .then(()=>{this.response="deletion successfull"});
    this.Status="Deleted successfully";
 }
  constructor(public  http:HttpClient) { }

  ngOnInit() {
  }

}
