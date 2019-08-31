import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
// import { Response } from '@angular/tp';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  psw: string;
  pswrepeat:string;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  regisStatus: string;
  strongRegex  = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  response: any;
  aadhar:number;
  id:number;
  gender:string;
  pan:string;
  dob:Date;
 
  constructor(private router: Router,public  http:HttpClient) {}
  ngOnInit() { 
  }
  registration()
  {
  if(this.psw==this.pswrepeat){

    if(this.strongRegex.test(this.psw)){
       this.router.navigate([ '/','addamount']);
        this.postCustomer();
    }
    else{
      console.log("regularexpersion prblm");
    }
  }
  else{
    console.log("password prblm");
  }
 
 }
 postCustomer(){
  var id:number ; 
  this.http.post("http://localhost:3002/customers",
    {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "email": this.email,
      "phone": this.phone,
      "aadhar": this.aadhar,
      "password" :this.psw,
      "pan":this.pan,
      "gender":this.gender,
      "dob":this.dob          
    })
  .toPromise()
  .then(data=>{
    var i:number=0;
    this.http.get("http://localhost:3002/customers").toPromise().
     then(data=> {
     this.response=data;
    
     for(i=0;i<this.response.length;i++){
      console.log(this.response[i].email+" "+this.email);
      if(this.response[i].email==this.email){
         console.log(this.response[i].id);
          this.id =this.response[i].id;
          console.log(this.id);
      }
     }
    });
  });
  //console.log("before get"+RegisterComponent.accountnumber);
 //-----------------------get idr----------------------------------------------------------
   
//     console.log("i am here"+this.id);
// //-----------------------update account number----------------------------------------------------------

  

  
 
 }
}
