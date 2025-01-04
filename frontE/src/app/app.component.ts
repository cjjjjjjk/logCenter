import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogcenterComponent } from './container/logcenter/logcenter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogcenterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'logCenter';
}
