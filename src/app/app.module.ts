import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './component/index/index.component';
import { CategoryComponent } from './component/category/category.component';
import { BudgetComponent } from './component/budget/budget.component';
import { AccountComponent } from './component/account/account.component';
import { AdvicerComponent } from './component/advicer/advicer.component';
import { SheetComponent } from './component/sheet/sheet.component';
import { AuthComponent } from './component/auth/auth.component';
import { HeaderComponent } from './fragments/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CategoryComponent,
    BudgetComponent,
    AccountComponent,
    AdvicerComponent,
    SheetComponent,
    AuthComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
