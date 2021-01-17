import { NgModule } from '@angular/core';
import {StudentviewComponent} from "./studentview/studentview.component";
import {HomeComponent} from "./home/home.component";
import {AddstudentComponent} from "./addstudent/addstudent.component";
import {StudentlistComponent} from "./studentlist/studentlist.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'studentlist/:level', component:StudentlistComponent},
  {path:'studentview/:studentnumber', component:StudentviewComponent},
  {path:'addstudent', component:AddstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
