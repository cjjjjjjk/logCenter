import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private router: Router;
  constructor() {
    this.router = new Router
  }

  navigateTo(newpage: string) {
    this.router.navigate([`/${newpage}`]);
  }
}
