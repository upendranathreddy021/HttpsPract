import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})
export class GetproductComponent implements OnInit {

 
  constructor(private productservice:ApiServiceService) { }

  productData:any=[]
  ngOnInit(): void {
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

  delProd(prod:string){
    console.log(prod,"check del")
this.productservice.deleteProd(prod)

this.ngOnInit()
  
}

}
