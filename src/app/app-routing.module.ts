import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemSobreComponent } from './content/item-sobre/item-sobre.component';
import { ItemProjetosComponent } from './content/item-projetos/item-projetos.component';
import { ItemFormacaoComponent } from './content/item-formacao/item-formacao.component';
import { ItemExperienciasComponent } from './content/item-experiencias/item-experiencias.component';

const routes: Routes = [
  {path: 'Sobre', component:ItemSobreComponent},
  {path: 'Projetos', component:ItemProjetosComponent},
  {path: 'Formacoes', component:ItemFormacaoComponent},
  {path: 'Experiencias', component:ItemExperienciasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
