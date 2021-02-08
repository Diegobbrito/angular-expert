import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { AppComponent } from "./app.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { AppRoutingModule, rootRouterConfig } from "./app.routes";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ProdutoService } from "./produtos/produtos.service";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { NgBrazil } from "ng-brazil";
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from "ng2-validation";
import { NavegacaoModule } from "./navegacao/navegacao.module";
import { ProdutoDashboardComponent } from './demos/arquitetura-componentes/produto-dashboard/produto-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    CadastroComponent,
    ProdutoDashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgBrazil,
    CustomFormsModule,
    TextMaskModule,
    NavegacaoModule
  ],
  providers: [
    ProdutoService,
    {
      provide: APP_BASE_HREF,
      useValue: "/",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
