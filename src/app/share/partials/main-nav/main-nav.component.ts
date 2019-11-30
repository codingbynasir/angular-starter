import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Travel} from '../../static/travel';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  public showSearch = false;
  appName = Travel.appName;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  public drawerMenuItems = [
    {name: 'Dashboard', state: '/dashboard', icon: 'home'},
    {name: 'Component', state: '', icon: ''},
    {name: 'Application', state: '', icon: 'app'},
    {name: 'Contact', state: '', icon: ''},
    {name: 'Layout', state: '', icon: ''},
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
  }

  getLogOut() {
    this.router.navigate(['auth/login']);
  }
}
