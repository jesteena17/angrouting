import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentComponent} from './parent/parent.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
    {path:'user',component:UserComponent},
    {path:'parent',component:ParentComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'employee/:id',component:EmployeeComponent},
    {path:'user/:name',component:UserComponent},
    {path:'**',redirectTo:''}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
