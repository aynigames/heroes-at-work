/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnalyticsService } from './@core/utils/analytics.service';
import { AuthService } from './@core/utils/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { URLSearchParams, QueryEncoder } from '@angular/http';
import { environment } from '../environments/environment';
import { NbThemeService } from '@nebular/theme';
@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private route: Router,
    private activeroute: ActivatedRoute,
    private analytics: AnalyticsService,
    private translate: TranslateService,
    private auth: AuthService,
    private themeService: NbThemeService,
  ) {    
    // this.themeService.changeTheme('default');
    auth.handleAuthentication();
    translate.setDefaultLang('en');
    // console.log('getBrowserLang :');
    // console.log(translate.getBrowserLang());

    // console.log('getBrowserCultureLang : ');
    // console.log(translate.getBrowserCultureLang());
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang);  
    themeService.changeTheme('default');
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();  
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
