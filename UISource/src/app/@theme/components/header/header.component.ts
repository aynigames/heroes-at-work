import { Component, Input, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { AuthService } from '../../../@core/utils/auth.service';
import { Member } from 'app/models/member';
import { MemberService } from 'app/@core/data/members.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position: string = 'normal';

  user: Member;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private memberService: MemberService,
              private authService: AuthService,
              private userService: UserService,
              private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.memberService.getCurrent().subscribe(member => {
      this.user = member;
    });    
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
  
  onMenuClick(item) {    
    if (item.title === 'Profile') {

    } else if (item.title === 'Log out') {      
      this.authService.logout();
    }
  }
}
