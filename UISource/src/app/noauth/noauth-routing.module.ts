import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NoAuthComponent } from './noauth.component';
import { IndexComponent } from './index/index.component';
import { SysMessageComponent } from './sysmessage/sysmessage.component';
import { DataPolicyComponent } from './datapolicy/datapolicy.component';

const routes: Routes = [{
    path: '',
    component: NoAuthComponent,
    children: [{
        path: 'index',
        component: IndexComponent,
    }, {
        path: 'sysmessage',
        component: SysMessageComponent,
    }, {
        path: 'datapolicy',
        component: DataPolicyComponent,
    }, {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full',
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NoAuthRoutingModule {
}
