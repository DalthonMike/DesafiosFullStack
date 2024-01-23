import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaBolsistaComponent } from "./components/lista-bolsista/lista-bolsista.component";
import { ListaPagamentoComponent } from "./components/lista-pagamento/lista-pagamento.component";

const routes: Routes = [
  { path: '', component: ListaBolsistaComponent },
  { path: 'lista-bolsista', component: ListaBolsistaComponent },
  { path: 'lista-pagamento', component: ListaPagamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
