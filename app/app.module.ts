import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TransferComponent } from './transfer/transfer.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';
import { BalanceComponent } from './balance/balance.component';
import { AddAmountComponent } from './add-amount/add-amount.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AfteradminloginComponent } from './afteradminlogin/afteradminlogin.component';
import { UpdateComponent } from './update/update.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    TransferComponent,
    AfterLoginComponent,
    TransactionViewComponent,
    BalanceComponent,
    AddAmountComponent,
    AdminloginComponent,
    AfteradminloginComponent,
    UpdateComponent,
    DeleteuserComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
