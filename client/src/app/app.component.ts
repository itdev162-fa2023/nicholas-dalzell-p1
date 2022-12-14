import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'Emotions';
  emotionForecasts: any;

  constructor(private http: HttpClient) {
    
  }
  ngOnInit():void {
    this.http.get('http://localhost:5216/emotionforecast').subscribe(
      response => {this.emotionForecasts = response},
      error => {console.log(error)}
    );
  }
}