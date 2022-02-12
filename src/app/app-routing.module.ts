import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddingPageComponent} from './adding-page/adding-page.component';
import {DataTableComponent} from "./data-table/data-table.component";

const routes: Routes = [
  {path: 'add', component: AddingPageComponent},
  {path: 'budget', component: DataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [AddingPageComponent,DataTableComponent]
