import { NgModule } from 'arg/src/app/node_modules/arg/src/app/node_modules/@angular/core';
import { Routes, RouterModule } from 'arg/src/app/node_modules/arg/src/app/node_modules/@angular/router';
import { HomeComponent } from 'estudos/src/app/navegacao/home/home.component';
import { SobreComponent } from 'estudos/src/app/institucional/sobre/sobre.component';
import { CadastroComponent } from 'estudos/src/app/demos/reactiveForms/cadastro/cadastro.component';
import { NotFoundComponent } from 'estudos/src/app/navegacao/not-found/not-found.component';
import { AuthGuard } from 'estudos/src/app/services/app.guard';
import { CadastroGuard } from 'estudos/src/app/services/cadastro.guard';
import { FilmesComponent } from 'estudos/src/app/demos/pipes/filmes/filmes.component';
import { BarComponent } from 'estudos/src/app/demos/bar-di-zones/bar.component';
import { TodoComponent } from 'estudos/src/app/demos/todo-list/todo.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'filmes', component: FilmesComponent },
    { path: 'bar', component: BarComponent },
    { path: 'todo', component: TodoComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard] },
    { path: 'produtos',
            loadChildren: () => import('estudos/src/app/demos/arquitetura-componentes/produto.module')
            .then(m => m.ProdutoModule)},
    { path: 'admin', 
            loadChildren: () => import('estudos/src/app/admin/admin.module')
            .then(m => m.AdminModule),
            canLoad: [AuthGuard], canActivate: [AuthGuard]},
    { path: '**', component: NotFoundComponent },

];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}