import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './@core/utils/auth.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {
    }
    canActivate() {
        const result = this.authService.isAuthenticated();
        if (!result) {
            this.router.navigate(['home']);
        }
        return result;
    }
}
