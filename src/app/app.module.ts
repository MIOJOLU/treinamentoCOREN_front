import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt'
import {registerLocaleData} from '@angular/common'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VendasListagemComponent } from './vendas-listagem/vendas-listagem.component';

import { HttpClientModule } from '@angular/common/http';
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';


import {CurrencyMaskModule} from 'ng2-currency-mask'

/* Para que o padrão fica do modelo portugês*/
registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VendasListagemComponent,
    VendaCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule, 
    FormsModule,
    HttpClientModule, 

    CurrencyMaskModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
