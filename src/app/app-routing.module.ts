import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddingPageComponent} from './adding-page/adding-page.component';
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {path: 'add', component: AddingPageComponent},
  {path: 'budget', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [AddingPageComponent,MainPageComponent]
