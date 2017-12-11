import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/@core/utils/auth.service';

@Component({
    selector: 'ngx-ayni-noauth-block',
    templateUrl: './noauth-block.component.html',
    styleUrls: ['./noauth-block.component.scss'],
})
export class NoAuthBlockComponent {
    constructor(protected router: Router, protected authService: AuthService) {

    }
    onSignIn() {
        this.authService.login();
    }
}
