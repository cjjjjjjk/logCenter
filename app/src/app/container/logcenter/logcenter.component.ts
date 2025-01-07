import { Component } from '@angular/core';

// Components
import { HeaderComponent } from '../../components/header/header.component';

// Routes
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-logcenter',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './logcenter.component.html',
  styleUrl: './logcenter.component.css'
})
export class LogcenterComponent {

}
