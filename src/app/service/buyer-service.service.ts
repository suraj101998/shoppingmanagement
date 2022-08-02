import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import{Buyer} from '../common/Buyer';
@Injectable({
  providedIn: 'root'
})
export class BuyerServiceService {

  carturl= "http://localhost:8080/api/Buyers"
  constructor(private httpClient : HttpClient) { }
  getAllBuyerCart() : Observable<Buyer[]>{

    console.log(this.httpClient.get< getBuyerResponse >(this.carturl).pipe(map(response => response._embedded.buyers)))
    return this.httpClient.get< getBuyerResponse >(this.carturl).pipe(map(response => response._embedded.buyers))
  }
  saveBuyerCart(buyers : Buyer) : Observable<Buyer>{
    console.log(buyers)

    const httOptions = {
      headers : new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization' : 'auth-token' ,
      'Access-Control-Allow-Origin': '*'
      })

    }
   
  
  return this.httpClient.post<Buyer>(this.carturl,buyers,httOptions)
  }
}
interface getBuyerResponse{
  _embedded : {
    buyers : Buyer[]
  }
}
