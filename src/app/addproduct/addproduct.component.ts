import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from '../Services/api-service.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  currentId:any;

  productData:any=[]

  ngOnInit(): void {
    this.productData=[]
    

    this.productservice.getProducts().subscribe(
      (data) => {
        
        this.productData = data;
        console.log(this.productData, "from get comp");
      },
      (error) => {
        console.error('Failed to get products', error);
      }
    );

  }
  


  
  //=======> deleting the product

  delProd(prod:string){
    console.log(prod,"check del")
this.productservice.deleteProd(prod)


  
}


  productForm: FormGroup;

  constructor(private productservice:ApiServiceService) {
    this.productForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
    });
    
  }

  onSubmit() {
if(!this.editMode){
   
   
    this.productservice.createProduct(this.productForm.value)
    console.log('Form Data:', this.productForm.value);


    this.productForm.reset()
}
else{
  this.productservice.editProduct(this.currentId, this.productForm.value).subscribe({
    next: (res) => console.log(res, "from put"),
    error: (err) => console.error("Error updating product:", err)
  });



  
   
  this.editMode=false
  this.productForm.reset()
  
}
    
  }
  editMode:boolean=false
  //======================> edit function
  editProduct(id:any,productName:string,price:number){
    this.currentId=id
    console.log('id',id)

    this.productForm.patchValue({
      productName: productName,
      price:price
    })
    this.editMode=true

  }



}
