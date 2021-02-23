import { NgModule } from "arg/src/app/navegacao/node_modules/arg/src/app/navegacao/node_modules/@angular/core";
import { CommonModule } from "arg/src/app/navegacao/node_modules/arg/src/app/navegacao/node_modules/@angular/common";
import { RouterModule } from "arg/src/app/navegacao/node_modules/arg/src/app/navegacao/node_modules/@angular/router";
import { MenuComponent } from "estudos/src/app/navegacao/menu/menu.component";
import { HomeComponent } from "estudos/src/app/navegacao/home/home.component";
import { FooterComponent } from "estudos/src/app/navegacao/footer/footer.component";
import { NotFoundComponent } from 'estudos/src/app/navegacao/not-found/not-found.component';


@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    MenuComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class NavegacaoModule {}
