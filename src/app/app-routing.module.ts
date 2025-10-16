import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';

const routes: Routes = [
  { path: 'politica-de-privacidade', component: PoliticaPrivacidadeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
