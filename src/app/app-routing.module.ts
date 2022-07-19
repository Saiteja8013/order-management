import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/components/login/login.component';
import { OrderManagementComponent } from 'src/components/order-management/order-management.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'orders', component: OrderManagementComponent
  },
  {
    path: '',component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
