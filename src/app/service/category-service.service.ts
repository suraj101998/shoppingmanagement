import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import{ProductCategory} from '../common/ProductCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  procaturl= "http://localhost:8080/api/ProductsCategory"
  constructor(private httpClient : HttpClient) { }
  getAllProductsCategory() : Observable<ProductCategory[]>{

    console.log(this.httpClient.get< getProductCategoryResponse >(this.procaturl).pipe(map(response => response._embedded.productCategories)))
    return this.httpClient.get< getProductCategoryResponse >(this.procaturl).pipe(map(response => response._embedded.productCategories))
  }
  saveProductCategory(productCategories : ProductCategory) : Observable<ProductCategory>{
    console.log(productCategories)

    const httOptions = {
      headers : new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization' : 'auth-token' ,
      'Access-Control-Allow-Origin': '*'
      })

    }
   
  
  return this.httpClient.post<ProductCategory>(this.procaturl,productCategories,httOptions)
  }
}
interface getProductCategoryResponse{
  _embedded : {
    productCategories : ProductCategory[]
  }
  
}
