import {async, inject, TestBed} from '@angular/core/testing';
import {RestrictedRouteGuard} from "./restricted-route-guard";
import {Router, UrlTree} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {Observable} from "rxjs";

describe('RouteGuardService', () => {
    let service: RestrictedRouteGuard;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [RestrictedRouteGuard],
        });

        service = TestBed.inject(RestrictedRouteGuard);
        router = TestBed.inject(Router);
    });

    it('should allow navigation if "dados" query parameter is present', async(() => {
        const spy = spyOn(router, 'parseUrl');

        const routeSnapshot = {
            queryParams: { dados: 'someData' },
        } as any;

        const canActivate = service.canActivate(routeSnapshot, {} as any);

        if (canActivate instanceof Observable) {
            canActivate.subscribe(result => {
                expect(result).toBeTruthy();
                expect(spy).not.toHaveBeenCalled();
            });
        } else {
            // Handle the case when canActivate is a boolean or Promise
            expect(canActivate).toBeTruthy();
            expect(spy).not.toHaveBeenCalled();
        }
    }));
});
