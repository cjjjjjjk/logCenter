import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, QueryList, ViewChildren, AfterViewInit, ViewChild } from '@angular/core';
import SentencesData from './sentences.json'


@Component({
  selector: 'game-wordscontainer',
  imports: [CommonModule],
  templateUrl: './wordscontainer.component.html',
  styleUrl: './wordscontainer.component.css'
})
export class WordscontainerComponent {
  // Event Handler =============================================================
  @HostListener('document:keydown', ['$event'])
  handleKeyBoardEvent(event: KeyboardEvent): void {

    if (event.key === 'Tab') {
      const btn = document.querySelector('#reset-btn') as HTMLElement;
      btn.focus();
    }
  }
  // ===========================================================================
  // Chilren DOM ===============================================================
  // ===========================================================================

  private numberofWordPerLine: number = 12;

  languageType: 'vn' | 'en' = 'vn';
  numberofWord: number;
  wordArray: string[] = [];
  lineArray: string[][] = [];

  constructor() {
    this.wordArray = this.getRandomSentence(this.languageType);
    this.numberofWord = this.wordArray.length;
    this.splitSentencens(this.numberofWord);
  }

  // UI: Display words handler ================================================
  // get sentences from Json Data
  getRandomSentence = function (language: 'vn' | 'en'): string[] {
    const sentences = SentencesData[language];
    if (sentences) {
      const randomSentenceIndex = Math.floor(Math.random() * sentences.length);
      return sentences[randomSentenceIndex].split(' ')
    }
    return []
  }
  // split words into lines
  splitSentencens(numberOfWords: number) {
    for (let i = 0; i < numberOfWords; i++) {
      const lineNumber = Math.floor(i / this.numberofWordPerLine);
      if (i % this.numberofWordPerLine === 0) this.lineArray.push([])
      this.lineArray.at(lineNumber)?.push(this.wordArray[i])
    }
  }
  // resetWords()
  resetWords(): void {
    this.wordArray = [];
    this.lineArray = [];
    this.wordArray = this.getRandomSentence(this.languageType);
    this.numberofWord = this.wordArray.length;
    this.splitSentencens(this.numberofWord);
  }
  // ========================================================================
}
