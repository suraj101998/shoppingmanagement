import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/Product';
import { ManagementServiceService } from 'src/app/service/management-service.service';
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  products : Product[]
  constructor(  private service :ManagementServiceService) { }

  ngOnInit(): void {
    this.listOfProducts()
  }


  listOfProducts(){
    this.service.getAllProducts().subscribe(data => {
      console.log(data)
      this.products=data
    })
  }

}
