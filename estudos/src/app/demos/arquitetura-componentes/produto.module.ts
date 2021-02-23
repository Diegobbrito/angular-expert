import { NgModule } from 'arg/src/app/demos/arquitetura-componentes/node_modules/arg/src/app/demos/arquitetura-componentes/node_modules/@angular/core';
import { CommonModule } from 'arg/src/app/demos/arquitetura-componentes/node_modules/arg/src/app/demos/arquitetura-componentes/node_modules/@angular/common';

import { registerLocaleData } from 'arg/src/app/demos/arquitetura-componentes/node_modules/arg/src/app/demos/arquitetura-componentes/node_modules/@angular/common';
import localePt from 'arg/src/app/demos/arquitetura-componentes/node_modules/arg/src/app/demos/arquitetura-componentes/node_modules/@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoDashboardComponent } from 'estudos/src/app/demos/arquitetura-componentes/produto-dashboard/produto-dashboard.component';
import { ProdutoDetalheComponent } from 'estudos/src/app/demos/arquitetura-componentes/componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from 'estudos/src/app/demos/arquitetura-componentes/componentes/produto-count.component';

import { ProdutoRoutingModule } from 'estudos/src/app/demos/arquitetura-componentes/produto.route';
import { EditarProdutoComponent } from 'estudos/src/app/demos/arquitetura-componentes/editar-produto/editar-produto.component';
import { ProdutoAppComponent } from 'estudos/src/app/demos/arquitetura-componentes/produto.app.component';
import { ProdutoService } from 'estudos/src/app/demos/arquitetura-componentes/services/produto.service';
import { ProdutosResolve } from 'estudos/src/app/demos/arquitetura-componentes/services/produto.resolve';

@NgModule({
    declarations:[
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent
    ],
    imports:[
        CommonModule,
        ProdutoRoutingModule
    ],
    providers: [
        ProdutoService,
        ProdutosResolve
    ],
    exports:[]
})
export class ProdutoModule{}
