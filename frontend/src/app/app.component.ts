import { Component } from '@angular/core';
import { NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'extraqrcode';
  elementType = 'NgxQrcodeElementTypes.URL';
  correctionLevel ='NgxQrcodeErrorCorrectionLevels.HIGH';
  value = 'http://localhost:4200/empleado'

  public myAngularxQrCode: string = "";
   
  constructor () {
    this.myAngularxQrCode = 'tutsmake.com';
  }




  
 
}
export class QRCodeComponent {
  public myAngularxQrCode: string = "";
  constructor () {
    // assign a value
    this.myAngularxQrCode = '';
  }
}
