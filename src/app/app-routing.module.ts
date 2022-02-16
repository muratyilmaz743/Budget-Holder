import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddingPageComponent} from './adding-page/adding-page.component';
import {DataTableComponent} from "./data-table/data-table.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";

const routes: Routes = [
  {path: 'add', component: AddingPageComponent},
  {path: 'budget', component: DataTableComponent},
  {path: 'register',component: RegisterPageComponent},
  {path: '', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [AddingPageComponent,DataTableComponent]
