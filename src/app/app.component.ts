import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'migration-forum-app';
  isListMode = true;

  onaddbuttonclick(){
    this.isListMode = !this.isListMode;

  }
}
