import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserAuthenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // checking in case the page is reloaded
    this.isUserAuthenticated = this.authService.getIsAuth();

    this.authService.authStatusListener
    .subscribe((isAuthenticated) => {
      this.isUserAuthenticated = isAuthenticated;
    });

    // this.route.url.subscribe((url: any) => {
    //   console.log(url, '\n');
    //   console.log(typeof (url[0].path));
    // });
  }

  // ngAfterViewChecked(): void {
  //   this.route.url.subscribe((url: any) => {
  //     console.log('URL', url, '\n');
  //     console.log('url[0].path', url[0].path);
  //     console.log('URL type of', typeof (url[0].path));
  //   });
  // }

  onLogOut(): void {
    this.authService.logoutUser();
  }
}
