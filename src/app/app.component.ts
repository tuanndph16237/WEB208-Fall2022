import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WEB208';
  name: string = 'Nguyen Duc Tuan';
  age: number = 20;
}
