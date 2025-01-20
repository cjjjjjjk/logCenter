import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'options-group',
  imports: [CommonModule],
  templateUrl: './option-group.component.html',
  styleUrl: './option-group.component.css'
})
export class OptionGroupComponent {
  @Input() optionGroupName: string = "games"
  @Input() optionsList = [
    {
      name: "monkey type",
      link: "https://monkeytype.com/",
      imageUrl: "https://i.imgur.com/YcP0tik.jpeg",
      href: true,
    },
    {
      name: "typing",
      link: "play-typing",
      imageUrl: "https://i.imgur.com/BsclBcq.png",
      href: true,
    },
  ]

  constructor(private router: Router) {
  }

  navigateTo(url: string, href: boolean) {
    if (href) {
      window.location.href = url
    } else {
      this.router.navigate([`/${url}`])
    }

  }


}
