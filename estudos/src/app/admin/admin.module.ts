import { NgModule } from 'arg/src/app/admin/node_modules/arg/src/app/admin/node_modules/@angular/core';
import { CommonModule } from 'arg/src/app/admin/node_modules/arg/src/app/admin/node_modules/@angular/common';

import { AdminDashboardComponent } from 'estudos/src/app/admin/admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from 'estudos/src/app/admin/admin.route';

@NgModule({
    declarations: [
        AdminDashboardComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    providers: [

    ],
    exports: []
})
export class AdminModule { }