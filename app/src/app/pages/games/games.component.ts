import { Component } from '@angular/core';
import { RightOptionComponent } from '../../components/right-option/right-option.component';
import { OptionGroupComponent } from '../../components/option-group/option-group.component';

@Component({
  selector: 'app-games',
  imports: [RightOptionComponent, OptionGroupComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

}
