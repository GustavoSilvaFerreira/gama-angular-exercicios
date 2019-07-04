import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';

import { HttpClientModule } from '@angular/common/http';
import { ListaLinguagensComponent } from './lista-linguagens/lista-linguagens.component';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AdicionarLinguagensComponent } from './adicionar-linguagens/adicionar-linguagens.component';
import { FormsModule } from '@angular/forms';
import { AnoPipe } from './ano.pipe';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: ContadorComponent },
  { path: 'languages', component: ListaLinguagensComponent },
  { path: 'adicionar-linguagens', component: AdicionarLinguagensComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaLinguagensComponent,
    HomeComponent,
    AdicionarLinguagensComponent,
    AnoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
