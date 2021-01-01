import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.url.subscribe((url: any) => {
    //   console.log(url, '\n');
    //   console.log(typeof (url[0].path));
    // });
  }

  ngAfterViewChecked(): void {
    this.route.url.subscribe((url: any) => {
      console.log('URL', url, '\n');
      console.log('url[0].path', url[0].path);
      console.log('URL type of', typeof (url[0].path));
    });
  }
}
