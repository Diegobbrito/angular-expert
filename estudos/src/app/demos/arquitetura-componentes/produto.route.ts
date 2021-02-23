import { NgModule } from 'arg/src/app/demos/arquitetura-componentes/node_modules/arg/src/app/demos/arquitetura-componentes/node_modules/@angular/core';
import { Routes, RouterModule } from 'arg/src/app/demos/arquitetura-componentes/node_modules/arg/src/app/demos/arquitetura-componentes/node_modules/@angular/router';
import { ProdutoDashboardComponent } from 'estudos/src/app/demos/arquitetura-componentes/produto-dashboard/produto-dashboard.component';
import { EditarProdutoComponent } from 'estudos/src/app/demos/arquitetura-componentes/editar-produto/editar-produto.component';
import { ProdutoAppComponent } from 'estudos/src/app/demos/arquitetura-componentes/produto.app.component';
import { ProdutosResolve } from 'estudos/src/app/demos/arquitetura-componentes/services/produto.resolve';

const produtoRouterConfig: Routes = [
    {
        path: '', component: ProdutoAppComponent,
        children: [
            { path: '', redirectTo: 'todos' },
            { 
                path: ':estado',
                component: ProdutoDashboardComponent,
                resolve: {
                    produtos: ProdutosResolve 
                },
                data: {
                    teste: 'informação'
                }
            },
            { path: 'editar/:id', component: EditarProdutoComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }