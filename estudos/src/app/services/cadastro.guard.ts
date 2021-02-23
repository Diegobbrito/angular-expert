import { Injectable } from 'arg/src/app/services/node_modules/arg/src/app/services/node_modules/@angular/core';
import { CanDeactivate } from 'arg/src/app/services/node_modules/arg/src/app/services/node_modules/@angular/router';
import { CadastroComponent } from 'estudos/src/app/demos/reactiveForms/cadastro/cadastro.component';

@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent> {
   
    canDeactivate(component: CadastroComponent) {
        if (component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulário?');
        }

        return true;
    }
}