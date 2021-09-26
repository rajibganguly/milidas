import { AfterContentInit } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit {
  iconMenu: boolean = true;
  iconClose: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  ngAfterContentInit() {
    // if (
    //   this.router.url === '/' || this.router.url === '/videos' || 
    //   this.router.url === '/awards' || this.router.url === '/books' ||
    //   this.router.url === '/gallary' || this.router.url === '/recipe' || this.router.url === '/contact'
    // ) {
    //   this.iconMenu = false;
    //   this.iconClose = true;
    //   this.router.navigate(['/menu']);
    // }


  }
  
  checkRoute() {
    this.router.navigate(['/menu']); 
    // console.log('----', this.router.url);
    //   if (this.router.url === '/') {
    //     this.iconMenu = false;
    //     this.iconClose = true;
    //     this.router.navigate(['/menu']);  
    //   }
    //   if (this.router.url === '/menu') {
    //     this.iconMenu = true;
    //     this.iconClose = false;
    //     this.router.navigate(['/']);  
    //   }

  }



}
