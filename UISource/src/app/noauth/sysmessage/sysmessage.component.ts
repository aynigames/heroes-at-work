import { Component } from '@angular/core';

@Component({
    selector: ' ngx-sysmessage',
    styleUrls: ['./sysmessage.component.scss'],
    templateUrl: './sysmessage.component.html',
})
export class SysMessageComponent {
    public title: string;
    public message: string;
    public detail: string;
    constructor() {
        const id = Number(sessionStorage.getItem('sysmessage.id') || '0');
        this.title = 'System Message';
        this.message = 'No Information';
        this.detail = '';
        if (id === 1403) {
            this.title = 'session expire';
            this.message = 'session ends please login again';
        }
    }
}
