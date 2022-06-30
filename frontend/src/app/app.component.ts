import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
export class QRCodeComponent {
  public myAngularxQrCode: string = "";
  constructor () {
    // assign a value
    this.myAngularxQrCode = '';
  }
}
