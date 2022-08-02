import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/common/ProductCategory';
import { CategoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  productCategories : ProductCategory[]
  formModel :ProductCategory =new ProductCategory(0,"")
  constructor(private service :CategoryServiceService, private route : Router) { }

  ngOnInit(): void {
    this.listofCategories()
  }
  listofCategories(){
    this.service.getAllProductsCategory().subscribe(data=>{
      console.log(data)
      this.productCategories = data
    }
    )
  }

  onSubmit()
  {
    //this.productCategories.push(this.formModel);
    this.service.saveProductCategory(this.formModel).subscribe(() =>{ this.route.navigateByUrl("/cartegory")})
  }
}
