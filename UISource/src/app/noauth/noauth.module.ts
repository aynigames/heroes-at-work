import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { NoAuthBlockComponent } from './noauth-block/noauth-block.component';
import { IndexComponent } from './index/index.component';
import { SysMessageComponent } from './sysmessage/sysmessage.component';
import { NoAuthRoutingModule } from './noauth-routing.module';
import { NoAuthComponent } from './noauth.component';
import { DataPolicyComponent } from './datapolicy/datapolicy.component';

const PAGES_COMPONENTS = [
    NoAuthComponent,
    NoAuthBlockComponent,
    IndexComponent,
    SysMessageComponent,
    DataPolicyComponent,
];

@NgModule({
    imports: [
        ThemeModule,
        NoAuthRoutingModule,
    ],
    declarations: [
        ...PAGES_COMPONENTS,
    ],
})
export class NoAuthModule {

}
