import { Component, ViewChild } from '@angular/core';
import { WordscontainerComponent } from '../../components/typing-game/wordscontainer/wordscontainer.component';

@Component({
  selector: 'app-typing-game',
  imports: [WordscontainerComponent],
  templateUrl: './typing-game.component.html',
  styleUrl: './typing-game.component.css'
})
export class TypingGameComponent {
  @ViewChild('wordscontainer') wordContainer!: WordscontainerComponent;

  crrLanguage: "vn" | "en" = "vn";

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
  // ====================================================================
}
