import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'angular-todolist';

  constructor() {
    this.changeName("Robert")
  }

  changeName(name:string):void {
    this.name = name
  }
}
