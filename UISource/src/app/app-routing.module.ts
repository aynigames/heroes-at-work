import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'home', loadChildren: 'app/noauth/noauth.module#NoAuthModule',
  },    
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
    useHash: true,
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
