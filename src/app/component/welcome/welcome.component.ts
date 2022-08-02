import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  productDetails(){
    this.route.navigateByUrl("/Products")
  }

  categoryDetails(){
    this.route.navigateByUrl("/ProductsCategory")
  }

  buyerPurchaseDetails(){
    this.route.navigateByUrl("/buyerprodetail")
  }
  buyerCartDetails(){
    this.route.navigateByUrl("/cart")
  }
}
