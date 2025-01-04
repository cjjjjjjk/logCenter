import { Component } from '@angular/core';

// Pages
import { LoginPageComponent } from '../../pages/login/login.component';

// Components
import { HeaderComponent } from '../../components/header/header.component';
@Component({
  selector: 'app-logcenter',
  imports: [HeaderComponent, LoginPageComponent],
  templateUrl: './logcenter.component.html',
  styleUrl: './logcenter.component.css'
})
export class LogcenterComponent {

}
