import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-tag',
  imports: [],
  templateUrl: './user-tag.component.html',
  styleUrl: './user-tag.component.css'
})
export class UserTagComponent {
  // Input data -----------------------------
  @Input() userFName: string = 'sign in';
  @Input() userShort: string = '»»»»»»'
  @Input() userImage: string = 'media/female-1.png'
  // ----------------------------------------

  private router: Router;
  private nexUrl: string;
  constructor() {
    this.router = new Router();
    this.nexUrl = "login";

  }

  // Navigater 
  navigateTo(newurl: string) {
    this.router.navigate([`/${newurl}`])
  }

} 
