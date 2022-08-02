import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/Product';
import { ManagementServiceService } from 'src/app/service/management-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[]
  formModel : Product = new Product(0,"","","",0,"",0,"","",0)
  constructor(private service :ManagementServiceService,  private route : Router) { }

  ngOnInit(): void {
    this.listofProducts()
  }
  listofProducts(){
    this.service.getAllProducts().subscribe(data=>{
      console.log(data)
      this.products = data
    }
    )
  }

  onSubmit()
  {
    //this.products.push(this.formModel);
    this.service.saveProduct(this.formModel).subscribe(() =>{ this.route.navigateByUrl("/procom")})
  }
}
