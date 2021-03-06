import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private http: HttpClient) {}

  title = 'CLIENT';
  baseUrl: string = 'https://localhost:5001/api/appuser';
  appUsers: any;
  ngOnInit() {
    this.http.get(this.baseUrl).subscribe(response => this.appUsers = response);
  }
}
