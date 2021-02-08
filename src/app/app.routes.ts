import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contato", component: ContatoComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "sobre", component: SobreComponent },
  { path: "produtos", component: ListaProdutoComponent },
  { path: "produto-detalhe/:id", component: ListaProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
