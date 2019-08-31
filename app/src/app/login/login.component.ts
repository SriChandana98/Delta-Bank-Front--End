import { Component, OnInit } from '@angular/core';
import {AfterLoginComponent} from '../after-login/after-login.component'
import {Router} from '@angular/router';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //router:Router;
  response:any;
  username: string;
  password: string;
  loginStatus: string;
  logincode:boolean=false;
  id:number;
  status:boolean=false;
  public static accountNumber:number;
  
  constructor(private router: Router,public  http:HttpClient) {}

  verify(username:string,password:string){
  this.http.get("http://localhost:3000/customers").toPromise().
  then(data=> {
  this.response=data;
  var i:number=0;
 FOR:   for(i=0;i<this.response.length;i++){
        if((this.response[i].email==username)){      
          if(this.response[i].password==password){
            LoginComponent.accountNumber=this.response[i].accountnumber;   
            this.router.navigate([ '/','afterlogin']);
           
            break FOR;
          }
          else{
            alert("password not matched");
          }
        }                     
      }
      //alert("you are not a registered user click ok to register");
      //his.rtouter.navigate([ '','register']);
      this.status=false;
      if(this.status==false){
        //this.router.navigate([ '','register']);
      }
     
    });
   }
   loginasadmin(){
    this.router.navigate([ '/','adminlogin']);
   }


  ngOnInit() {
  }

}
