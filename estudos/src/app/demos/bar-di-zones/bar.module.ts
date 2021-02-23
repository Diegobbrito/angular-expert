import { NgModule } from "arg/src/app/demos/bar-di-zones/node_modules/arg/src/app/demos/bar-di-zones/node_modules/@angular/core";
import { CommonModule } from 'arg/src/app/demos/bar-di-zones/node_modules/arg/src/app/demos/bar-di-zones/node_modules/@angular/common';
import { BarComponent } from 'estudos/src/app/demos/bar-di-zones/bar.component';
import { ModuleWithProviders } from 'arg/src/app/demos/bar-di-zones/node_modules/arg/src/app/demos/bar-di-zones/node_modules/@angular/compiler/src/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from 'estudos/src/app/demos/bar-di-zones/bar.config';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BarComponent
    ],
    exports: [
        BarComponent
    ]
})
export class BarModule {
    static forRoot(config: BarUnidadeConfig) : ModuleWithProviders {
        return {
            ngModule: BarModule,
            providers: [
                { provide: 'ConfigManualUnidade', useValue: config },
                { provide: BAR_UNIDADE_CONFIG, useValue: config }
            ]
        }
    }

    static forChild() {

    }
 }
