import { Component, OnInit } from '@angular/core';
import {AfterLoginComponent} from '../after-login/after-login.component'
import {Router} from '@angular/router';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  response: any;

  constructor(private router: Router,public  http:HttpClient) { }

  ngOnInit() {
  }
  verify(username:string,password:string){
    this.http.get("http://localhost:3003/admins").toPromise().
    then(data=> {
    this.response=data;
    var i:number=0;
   FOR:   for(i=0;i<this.response.length;i++){
          if((this.response[i].username==username)){      
            if(this.response[i].password==password){
              //LoginComponent.accountNumber=this.response[i].id;   
              this.router.navigate([ '/','afteradminlogin']);
             
              break FOR;
            }
            else{
              alert("password not matched");
            }
          }                     
        }
     
       
      });
     }


}
