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

    } else {
      console.log(event.key)
    }
  }
  // ===========================================================================
  // Chilren DOM ===============================================================
  @ViewChild('wordcontainerbox') wordcontainer!: ElementRef<HTMLDivElement>;
  // ===========================================================================

  @Input() languageType: 'vn' | 'en' = 'vn';

  numberofWord: number;
  wordArray: string[] = [];
  lineArray: string[][] = [[]];

  constructor() {
    this.wordArray = this.getRandomSentence(this.languageType);
    this.numberofWord = this.wordArray.length;
    this.splitSentencens(this.numberofWord);
  }
  // Logic: generateID ========================================================
  // wordID
  generateWordID(wordIndex: number, line: number): string {
    return `wordID_${line}_${wordIndex}`
  }
  generateLetterID(letterIndex: number, wordIndex: number, lineIndex: number): string {
    return `letterID_${lineIndex}_${wordIndex}_${letterIndex}`
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
  // Theme text
  changeTheme(theme: "light" | "dark") {
    this.wordcontainer.nativeElement.style.color = `var(--color-text-${theme})`;
  }
  // ========================================================================
}
