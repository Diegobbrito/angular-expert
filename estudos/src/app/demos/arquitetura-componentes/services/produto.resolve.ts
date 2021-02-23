import { Injectable } from "arg/src/app/demos/arquitetura-componentes/services/node_modules/arg/src/app/demos/arquitetura-componentes/services/node_modules/@angular/core";
import { Resolve, ActivatedRouteSnapshot } from 'arg/src/app/demos/arquitetura-componentes/services/node_modules/arg/src/app/demos/arquitetura-componentes/services/node_modules/@angular/router';
import { Produto } from 'estudos/src/app/demos/arquitetura-componentes/models/produto';
import { ProdutoService } from 'estudos/src/app/demos/arquitetura-componentes/services/produto.service';

@Injectable()
export class ProdutosResolve implements Resolve<Produto[]> {
    
    constructor(private produtoService: ProdutoService){}

    resolve(route: ActivatedRouteSnapshot) {
        return this.produtoService.obterTodos(route.params.estado);
    }

}
