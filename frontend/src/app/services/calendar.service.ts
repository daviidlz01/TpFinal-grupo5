import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private _http: HttpClient) { }

   createEvent({ event }: { event: any; }):Observable<any>{
     const httpOptions = {
       headers: new HttpHeaders({
         "Authorization": "Bearer ya29.A0ARrdaM8inktxErJ8fYKibiD4TJCRGA-B9Y9by2Zx9A2lQMvmrCMnc75PhGOZaPBFNeLvldu7K9TE3u0OtcuZXNYaH5OI_KtPg8Yxy72vyro4L4ArIIKBR6Y2fCvoZ15zrXqyFuIgzQ02QLLwm8z3lcR9s_yqYUNnWUtBVEFTQVRBU0ZRRl91NjFWTFJVd09tWjR4REJiMUVkdUpJOVVyUQ0163",
         "Accept": "application/json",
         "Content-Type": "application/json"
       }),
 params: new HttpParams({

 })
     };
     let body = JSON.stringify(event);
     console.log(body);

     return this._http.post("https://www.googleapis.com/calendar/v3/calendars/ji3kljl26ttptcned5chlfjufc@group.calendar.google.com/events",body , httpOptions)
   }
 }










