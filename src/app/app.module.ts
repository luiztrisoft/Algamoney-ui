import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';

// const rotas: Routes = [
//   { path: '', component: AppComponent },
//   { path: 'pagina', component: AppComponent },
//   { path: 'pagina-com-parametro/:id', component: AppComponent }
// ];
@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoaPesquisaComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule
    // RouterModule.forRoot(rotas)
    //causou falha ao adicionar componentes do primeng sem rotas configuradas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
