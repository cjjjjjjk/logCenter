import { Component } from '@angular/core';
// Components
import { RightOptionComponent } from '../../components/right-option/right-option.component';
import { CreateLogComponent } from '../../components/create-log/create-log.component';

@Component({
  selector: 'app-home',
  imports: [RightOptionComponent, CreateLogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
