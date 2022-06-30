import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, UrlTree, } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate{
    

    user = {admin: false, logged: true}

    canLoad(): boolean {
        return this.user.admin;
    }

    canActivate(): boolean {
        return this.user.logged;
    }

}