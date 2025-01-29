import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [MyCounterComponent]
})
export class AppComponent {
  title = 'Learning-NGRX';
}
