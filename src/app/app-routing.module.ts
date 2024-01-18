import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaBolsistaComponent} from "./components/lista-bolsista/lista-bolsista.component";

const routes: Routes = [
  { path: 'lista-bolsista', component: ListaBolsistaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
