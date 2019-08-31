import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { TransferComponent } from './transfer/transfer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';
import { BalanceComponent } from './balance/balance.component';
import { AddAmountComponent } from './add-amount/add-amount.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AfteradminloginComponent } from './afteradminlogin/afteradminlogin.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateComponent } from './update/update.component';





const routes: Routes = [
  {path :"", component:HomeComponent},
  {path :"home", component:HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "contact", component: ContactComponent},
  {path: "adminlogin", component :AdminloginComponent},
  {path: "afteradminlogin", component :AfteradminloginComponent},
  {path: "afteradminlogin/delete" , component:DeleteuserComponent},
  {path: "afteradminlogin/update" , component:UpdateComponent},
  {path:"afterlogin" ,component:AfterLoginComponent},
  {path: "afterlogin/transfer" , component:TransferComponent},
  {path: "afterlogin/transaction" , component:TransactionViewComponent},
  {path: "afterlogin/balance" , component:BalanceComponent},
  {path: "afterlogin/home" , component:HomeComponent},
  {path: "addamount" , component:AddAmountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
