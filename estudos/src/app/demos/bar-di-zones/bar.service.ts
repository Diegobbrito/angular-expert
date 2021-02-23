import { Injectable, Inject, Injector } from "arg/src/app/demos/bar-di-zones/node_modules/arg/src/app/demos/bar-di-zones/node_modules/@angular/core";
import { HttpClient } from 'arg/src/app/demos/bar-di-zones/node_modules/arg/src/app/demos/bar-di-zones/node_modules/@angular/common/http';
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from 'estudos/src/app/demos/bar-di-zones/bar.config';

export function BarFactory(http: HttpClient, injector: Injector) {
    return new BarServices(http, injector.get(BAR_UNIDADE_CONFIG));
}

@Injectable()
export class BarServices {

    constructor(
        private http: HttpClient,
        @Inject(BAR_UNIDADE_CONFIG) private config: BarUnidadeConfig
    ) { }

    public obterUnidade(): string {
        return 'Unidade ID: ' + this.config.unidadeId + ' Token: ' + this.config.unidadeToken
    }

    obterBebidas(): string {
        return 'Bebidas';
    }

    obterPorcoes(): string {
        return 'Porções';
    }

    obterRefeicoes(): string {
        return 'Refeições';
    }
}

export class BarServicesMock {

    constructor(private http: HttpClient) { }

    obterBebidas(): string {
        return 'Mock';
    }

    obterPorcoes(): string {
        return 'Mock';
    }

    obterRefeicoes(): string {
        return 'Mock';
    }
}

export abstract class BebidaService {
    obterBebidas: () => string
}