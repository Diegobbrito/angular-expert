import { InjectionToken } from 'arg/src/app/demos/bar-di-zones/node_modules/arg/src/app/demos/bar-di-zones/node_modules/@angular/core';


export interface BarUnidadeConfig {
    unidadeId: number,
    unidadeToken: string
}

export const BAR_UNIDADE_CONFIG = new InjectionToken<BarUnidadeConfig>('BAR_UNIDADE_CONFIG');