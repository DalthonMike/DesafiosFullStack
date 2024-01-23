// restricted-route.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RestrictedRouteGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // Verifique a condição desejada para permitir ou bloquear o acesso
        const dadosParam = next.queryParams['dados'];

        const isAllowed = !!dadosParam;

        if (!isAllowed) {
            // Redirecione para outra rota
            return this.router.parseUrl('/lista-pagamento');
        }

        return isAllowed;
    }
}
