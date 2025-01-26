import { Component } from '@angular/core';
import { WordscontainerComponent } from '../../components/typing-game/wordscontainer/wordscontainer.component';

@Component({
  selector: 'app-typing-game',
  imports: [WordscontainerComponent],
  templateUrl: './typing-game.component.html',
  styleUrl: './typing-game.component.css'
})
export class TypingGameComponent {

}
