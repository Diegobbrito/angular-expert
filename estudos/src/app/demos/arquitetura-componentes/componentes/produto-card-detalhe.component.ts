import { Component, Input, Output, EventEmitter } from 'arg/src/app/demos/arquitetura-componentes/componentes/node_modules/arg/src/app/demos/arquitetura-componentes/componentes/node_modules/@angular/core';
import { Produto } from 'estudos/src/app/demos/arquitetura-componentes/models/produto';

@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html'
})
export class ProdutoDetalheComponent {

    @Input()
    produto: Produto;
    
    @Output()
    status: EventEmitter<any> = new EventEmitter();

    emitirEvento() {
        this.status.emit(this.produto);
    }
}