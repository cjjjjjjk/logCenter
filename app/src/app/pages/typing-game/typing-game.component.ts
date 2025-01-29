import { Component, ElementRef, ViewChild } from '@angular/core';
import { WordscontainerComponent } from '../../components/typing-game/wordscontainer/wordscontainer.component';

@Component({
  selector: 'app-typing-game',
  imports: [WordscontainerComponent],
  templateUrl: './typing-game.component.html',
  styleUrl: './typing-game.component.css'
})
export class TypingGameComponent {
  // Children Element ===================================================
  // words container element 
  @ViewChild('wordscontainer') wordContainer!: WordscontainerComponent;
  @ViewChild('gamemain') gameMainDivElement!: ElementRef<HTMLDivElement>;

  crrLanguage: "vn" | "en" = "vn";
  crrTheme: 'light' | 'dark' = 'light';


  ngAfterViewInit() {
    this.crrLanguage = this.wordContainer.languageType;
  }
  ngAfterViewChange() {
    console.log('Haha')
  }

  constructor() { }


  // Game Handler =======================================================
  resetWordContainer() {
    this.wordContainer.resetWords();
  }
  changeLanguage() {
    if (this.crrLanguage === 'vn') {
      this.crrLanguage = 'en';
    } else {
      this.crrLanguage = 'vn'
    }
    setTimeout(() => {
      this.resetWordContainer()
    }, 100)
  }
  changeTheme() {
    this.crrTheme = this.crrTheme === 'light' ? 'dark' : 'light';

    this.gameMainDivElement.nativeElement.style.background = `var(--color-bg-${this.crrTheme})`
    this.wordContainer.changeTheme(this.crrTheme);
  }
  // ====================================================================
}
