import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserTagComponent } from '../user-tag/user-tag.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-right-option',
  imports: [UserTagComponent, CommonModule],
  templateUrl: './right-option.component.html',
  styleUrl: './right-option.component.css'
})
export class RightOptionComponent {
  @Input() selected: string = "home";

  constructor(private router: Router) {
  }

  navigateTo(newurl: string) {
    this.router.navigate([`/${newurl}`])
  }

  isHome() {
    return this.selected === 'home';
  }
  isGames() {
    return this.selected === 'games';
  }
  isDocs() {
    return this.selected === 'docs';
  }
  isSetting() {
    return this.selected === 'setting';
  }
  isProfile() {
    return this.selected === 'profile';
  }

}
