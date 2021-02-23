import { Injectable } from 'arg/src/app/services/node_modules/arg/src/app/services/node_modules/@angular/core';
import { CanLoad, CanActivate } from 'arg/src/app/services/node_modules/arg/src/app/services/node_modules/@angular/router';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {

    user = { admin: true, logged: false }

    canLoad() : boolean {
        return this.user.admin;
    }

    canActivate() : boolean {
        return this.user.logged;
    }

}