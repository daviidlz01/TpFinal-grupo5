import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
 fromDate: string="";
 toDate:String="";

 event:any = 
 {
  kind: "calendar#event",
  status: "confirmed",
  summary: "Reunion de prueba desde angular",
  creator: {
      "email": "ciomar2010@gmail.com"

 },

 start: {
  dateTime: "2022-06-24T13:30:00-03:00",
  timeZone: "America/Argentina/Jujuy"
},

end: {
  dateTime: "2022-06-24T14:30:00-03:00",
  timeZone: "America/Argentina/Jujuy"
}
 }


  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
  }
//   end: {
//     dateTime: "2022-06-24T14:30:00-03:00",
//     timeZone: "America/Argentina/Jujuy"
// }

toIsoString(date:Date) {
  var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function(num:any) {
          return (num < 10 ? '0' : '') + num;
      };

  return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      dif + pad(Math.floor(Math.abs(tzo) / 60)) +
      ':' + pad(Math.abs(tzo) % 60);
}




  

}
