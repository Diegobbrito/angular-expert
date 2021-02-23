import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from 'arg/src/app/demos/arquitetura-componentes/produto-dashboard/node_modules/arg/src/app/demos/arquitetura-componentes/produto-dashboard/node_modules/@angular/core';
import { Produto } from 'estudos/src/app/demos/arquitetura-componentes/models/produto';
import { Observable, fromEvent } from 'arg/src/app/demos/arquitetura-componentes/produto-dashboard/node_modules/arg/src/app/demos/arquitetura-componentes/produto-dashboard/node_modules/rxjs';
import { ProdutoCountComponent } from 'estudos/src/app/demos/arquitetura-componentes/componentes/produto-count.component';
import { ProdutoDetalheComponent } from 'estudos/src/app/demos/arquitetura-componentes/componentes/produto-card-detalhe.component';
import { ActivatedRoute } from 'arg/src/app/demos/arquitetura-componentes/produto-dashboard/node_modules/arg/src/app/demos/arquitetura-componentes/produto-dashboard/node_modules/@angular/router';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {
  produtos: Produto[]

  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;

  @ViewChildren(ProdutoDetalheComponent) botoes: QueryList<ProdutoDetalheComponent>;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos'];
    console.log(this.route.snapshot.data['teste']);
  }

  ngAfterViewInit(): void {
    console.log('Objeto do Contador: ', this.contador.produtos);

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('clicou no text!');
      return;
    })

    console.log(this.botoes);
    this.botoes.forEach(p => {
      console.log(p.produto);
    });
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }
}