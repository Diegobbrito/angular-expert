import { BrowserModule } from 'arg/src/app/node_modules/arg/src/app/node_modules/@angular/platform-browser';
import { NgModule } from 'arg/src/app/node_modules/arg/src/app/node_modules/@angular/core';
import { FormsModule, ReactiveFormsModule }   from 'arg/src/app/node_modules/arg/src/app/node_modules/@angular/forms';

import { registerLocaleData } from 'arg/src/app/node_modules/arg/src/app/node_modules/@angular/common';
import localePt from 'arg/src/app/node_modules/arg/src/app/node_modules/@angular/common/locales/pt';
registerLocaleData(localePt);

import { NgBrazil } from 'arg/src/app/node_modules/arg/src/app/node_modules/ng-brazil';
import { CustomFormsModule } from 'arg/src/app/node_modules/arg/src/app/node_modules/ng2-validation'

import { AppComponent } from 'estudos/src/app/app.component';
import { SobreComponent } from 'estudos/src/app/institucional/sobre/sobre.component';
import { rootRouterConfig, AppRoutingModule } from 'estudos/src/app/app.routes';
import { CadastroComponent } from 'estudos/src/app/demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from 'estudos/src/app/navegacao/navegacao.module';
import { AuthGuard } from 'estudos/src/app/services/app.guard';
import { CadastroGuard } from 'estudos/src/app/services/cadastro.guard';
import { HttpClientModule } from 'arg/src/app/node_modules/arg/src/app/node_modules/@angular/common/http';
import { Provider } from 'arg/src/app/node_modules/arg/src/app/node_modules/@angular/compiler/src/compiler_facade_interface';
import { FilmesComponent } from 'estudos/src/app/demos/pipes/filmes/filmes.component';
import { FileSizePipe } from 'estudos/src/app/demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from 'estudos/src/app/demos/pipes/filmes/image.pipe';
import { BarModule } from 'estudos/src/app/demos/bar-di-zones/bar.module';
import { BarServices } from 'estudos/src/app/demos/bar-di-zones/bar.service';
import { TodoModule } from 'estudos/src/app/demos/todo-list/todo.module';
import { TodoComponent } from 'estudos/src/app/demos/todo-list/todo.component';
import { TextMaskModule } from 'arg/src/app/node_modules/arg/src/app/node_modules/angular2-text-mask';

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    HttpClientModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'eca938c99a0e9ff91029dc'
    }),
    TodoModule
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }