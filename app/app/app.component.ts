import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
private users : any[]=[];
  constructor(private http: Http) {

  }

  ngOnInit() {
    // this.http.get("https://reqres.in/api/users?page=2").subscribe(
    //   (data) => {
    //     console.log('The response is ', JSON.stringify(data.json().data))
    //   this.users = data.json().data;
    //   },
    //   (err) => {
    //     console.log('The error is ', err)
    //   },
    //   () => {

    //   }

    // );
  }

}

