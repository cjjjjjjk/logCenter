import { Component } from '@angular/core';
import { LogcenterComponent } from './container/logcenter/logcenter.component';

@Component({
  selector: 'app-root',
  imports: [LogcenterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'logCenter';
}
