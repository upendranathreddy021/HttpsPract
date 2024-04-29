import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
this.getdata()
  
  }


obj={
name:"upendra",email:"upendra@gmail.com",password:"123"
}

getdata(){
  this.http.get("https://angularapi-5d3a7-default-rtdb.firebaseio.com/products.json").subscribe((data)=>{
    console.log(data)
  })
}

value:number=7.8

senddata(){
  const headers=new HttpHeaders({"myheader":"httpreq"})
  //.set('Access-control-Allow-Origin','*').set('content-type',"application/json")
this.http.post("https://angularapi-5d3a7-default-rtdb.firebaseio.com",this.obj,{headers:headers})
.subscribe((res)=>{
console.log(res)
})
}
   
}
