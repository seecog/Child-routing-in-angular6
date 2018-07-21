import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
private emps : any[]=[]; 
  constructor(private http : Http) { }

  ngOnInit() {
    this.http.get("https://employee-7744d.firebaseio.com/employee.json").subscribe(
(res)=>{
console.log('Response is ',res.json())
let resJson = res.json();
let keys = Object.keys(resJson);
this.emps = keys.map(function(key){
  return {key : key,data : resJson[key]};
})
},
(err)=>{
  console.log('The error s ',err)
}

    )
  }

}
