import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
private user : any;
  constructor(private acPram : ActivatedRoute,private http : Http) { }

  ngOnInit() {
    this.acPram.params.subscribe(
(data)=>{
this.http.get("https://employee-7744d.firebaseio.com/employee/"+data['id']+".json").subscribe(
(user)=>{
this.user=user;
},
(err)=>{
  console.log('The error is ',err)
}


)
},
(err)=>{
console.log('The error is ',err)
},
()=>{

})

    
  }

}
