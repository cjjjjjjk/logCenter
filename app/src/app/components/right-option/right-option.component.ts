import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserTagComponent } from '../user-tag/user-tag.component';

@Component({
  selector: 'app-right-option',
  imports: [UserTagComponent],
  templateUrl: './right-option.component.html',
  styleUrl: './right-option.component.css'
})
export class RightOptionComponent {

  constructor(private router: Router) { }

  navigateTo(newurl: string) {
    this.router.navigate([`/${newurl}`])
  }

}
