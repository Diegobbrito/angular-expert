import { NgModule } from 'arg/src/app/admin/node_modules/arg/src/app/admin/node_modules/@angular/core';
import { Routes, RouterModule } from 'arg/src/app/admin/node_modules/arg/src/app/admin/node_modules/@angular/router';
import { AdminDashboardComponent } from 'estudos/src/app/admin/admin-dashboard/admin-dashboard.component';

const adminRouterConfig: Routes = [
    { path: '', component: AdminDashboardComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRouterConfig)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
