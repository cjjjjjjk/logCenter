import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-option',
  imports: [],
  templateUrl: './right-option.component.html',
  styleUrl: './right-option.component.css'
})
export class RightOptionComponent {

  constructor(private router: Router) { }


  navigateTo(newurl: string) {
    this.router.navigate([`/${newurl}`])
  }

}
