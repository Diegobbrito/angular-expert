import { Component, OnInit } from "arg/src/app/demos/arquitetura-componentes/editar-produto/node_modules/arg/src/app/demos/arquitetura-componentes/editar-produto/node_modules/@angular/core";
import { ActivatedRoute, Router } from "arg/src/app/demos/arquitetura-componentes/editar-produto/node_modules/arg/src/app/demos/arquitetura-componentes/editar-produto/node_modules/@angular/router";
import { Produto } from "estudos/src/app/demos/arquitetura-componentes/models/produto";
import { ProdutoService } from "estudos/src/app/demos/arquitetura-componentes/services/produto.service";

@Component({
  selector: "app-editar-produto",
  templateUrl: "./editar-produto.component.html",
  styles: [],
})
export class EditarProdutoComponent implements OnInit {
  produto: Produto;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.produto = this.produtoService.obterPorId(params["id"]);
    });
  }

  salvar() {
    this.router.navigate(["/produtos"]);
  }
}
