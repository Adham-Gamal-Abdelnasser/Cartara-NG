import { Component, inject } from '@angular/core';
import { ProductcardComponent } from "../../../../../shared/components/productcard/productcard.component";
import { ProductsService } from '../../../../../core/services/products/products.service';
import { IProduct } from '../../../../../shared/models/product/iproduct.interface';

@Component({
  selector: 'app-prodsection',
  imports: [ProductcardComponent],
  templateUrl: './prodsection.component.html',
  styleUrl: './prodsection.component.css',
})
export class ProdsectionComponent {
  //todo inject ProductsService
  _ProductsService = inject(ProductsService)
  //todo var to store products in
  products:IProduct[] = [];
  ngOnInit(): void {
    this.recieveProductsFromService();
  }
  //todo method to call service and store products
  recieveProductsFromService(){
    this._ProductsService.getAllProducts().subscribe(products => {
      this.products = products.data;      
    })
  }
}