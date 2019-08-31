import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {
  router: Router;
 

  constructor() { }

  ngOnInit() {
  }
  traverse(){
  console.log("in traverse")  
  // this.router.navigate(['/transfer']);
  }

}
