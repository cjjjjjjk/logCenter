import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, QueryList, ViewChildren, AfterViewInit, ViewChild, Input } from '@angular/core';
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

  @Input() languageType: 'vn' | 'en' = 'vn';
  private numberofWordPerLine: number = 12;

  numberofWord: number;
  wordArray: string[] = [];
  lineArray: string[][] = [[]];

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
    const maxNumberLetterPerLine: number = 45;
    let numberLetterPerLine: number = 0;
    let numberLetterTotal: number = 0;
    let lineCount: number = 0;
    this.lineArray.push([])

    for (let i = 0; i < numberOfWords; i++) {
      numberLetterPerLine += this.wordArray[i].length;
      numberLetterTotal += this.wordArray[i].length;

      if (numberLetterPerLine > maxNumberLetterPerLine) {
        numberLetterPerLine = 0;
        lineCount++;
        this.lineArray.push([])
      }

      this.lineArray.at(lineCount)?.push(this.wordArray[i])
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
  // Counting number of words per line
  setNumberOfWordsPerline(wordArray: string[]): void {
    let countLetter = 0;
    wordArray.forEach((word) => {
      countLetter += word.length;
    })

  }
  // ========================================================================
}
