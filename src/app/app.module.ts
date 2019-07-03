import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';

import { HttpClientModule } from '@angular/common/http';
import { ListaLinguagensComponent } from './lista-linguagens/lista-linguagens.component';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: ContadorComponent },
  { path: 'languages', component: ListaLinguagensComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaLinguagensComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
