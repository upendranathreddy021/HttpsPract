import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css'],
  //imports:[ReactiveFormsModule],
})

export class ReactiveformsComponent implements OnInit {



  
  reactiveForm:FormGroup
 
constructor(){
  this.reactiveForm=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email,Validators.minLength(8)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(16)])
  })
}




  ngOnInit(): void {
   


  }
 


  onSubmit(){
    console.log(this.reactiveForm)
  }

}
