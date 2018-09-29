import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  //kids: string[];

  constructor(private http: HttpClient){
    this.http
    .get('url')
    .subscribe((data) => {
    }, error => {
      //...
    });
  }


s

}
