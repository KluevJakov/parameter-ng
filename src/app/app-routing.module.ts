import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { AuthComponent } from './component/auth/auth.component';
import { AccountComponent } from './component/account/account.component';
import { SheetComponent } from './component/sheet/sheet.component';
import { BudgetComponent } from './component/budget/budget.component';
import { AdvicerComponent } from './component/advicer/advicer.component';
import { CategoryComponent } from './component/category/category.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'account', component: AccountComponent },
  { path: 'sheet', component: SheetComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'advicer', component: AdvicerComponent },
  { path: 'category', component: CategoryComponent },
  { path: '**', redirectTo:'' }
  //+ админ-панель, новости, чат с поддержкой (тг)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
