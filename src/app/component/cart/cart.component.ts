import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buyer } from 'src/app/common/Buyer';
import { BuyerServiceService } from 'src/app/service/buyer-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  buyers : Buyer[]
  formModel :Buyer =new Buyer(0,"","",0)
  constructor(private service :BuyerServiceService, private route : Router) { }

  ngOnInit(): void {
    this.listofCategories()
  }
  listofCategories(){
    this.service.getAllBuyerCart().subscribe(data=>{
      console.log(data)
      this.buyers = data
    }
    )
  }
  onSubmit()
  {
    //this.productCategories.push(this.formModel);
    this.service.saveBuyerCart(this.formModel).subscribe(() =>{ this.route.navigateByUrl("/cart")})
  }

}
