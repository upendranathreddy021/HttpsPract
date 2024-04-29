import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  products:any = [];

  constructor(private http:HttpClient) { }



  createProduct(data: any){
    const headers = new HttpHeaders({ 'my-header': 'hello-world' });
    
console.log(data,"checking data in post")
    this.http.post("https://angularapi-5d3a7-default-rtdb.firebaseio.com/products.json", data, { headers })
      .subscribe({
        next: (observer) => {
          console.log(observer, "from post req");
          this.getProducts(); 
        },
        error: (error) => {
          console.error("Error creating product:", error);
        }
      });
    }

  getProducts(): Observable<any> {

    const headers = new HttpHeaders({ 'my-header': 'hello-world' });
    return this.http.get("https://angularapi-5d3a7-default-rtdb.firebaseio.com/products.json", { headers })
      .pipe(
        map((response:any) => {
          
          
          
          // Object.values(response)


         
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              this.products.push({
                id: key,
                ...response[key]
              });
            }
          }
          return this.products;





        })
      );
    }

  deleteProd(id: string) {

      const headers = new HttpHeaders({ 'my-header': 'hello-world' });
    let ID=id
    console.log(ID,"checking id ",id,"in delete")
      this.http.delete(`https://angularapi-5d3a7-default-rtdb.firebaseio.com/products/${id}.json`, { headers })
        .subscribe({
          next: (observer) => {
            console.log(observer, "from delete req");
            this.getProducts(); 
          },
          error: (error) => {
            console.error("Error deleting product:", error);
          }
        });

    }
    
    editProduct(id: string, value: any): Observable<any> {
      const headers = new HttpHeaders({ 'my-header': 'hello-world' });
      return this.http.put(`https://angularapi-5d3a7-default-rtdb.firebaseio.com/products/${id}.json`, value, { headers });
    }




}
