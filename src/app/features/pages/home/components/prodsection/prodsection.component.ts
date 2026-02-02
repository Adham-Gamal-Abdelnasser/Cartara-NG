import { Component, inject } from '@angular/core';
import { ProductcardComponent } from "../../../../../shared/components/productcard/productcard.component";
import { ProductsService } from '../../../../../core/services/products/products.service';
import { IProduct } from '../../../../../shared/models/product/iproduct.interface';
import { IResult } from '../../../../../shared/models/result/iresult.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-prodsection',
  imports: [ProductcardComponent , AsyncPipe],
  templateUrl: './prodsection.component.html',
  styleUrl: './prodsection.component.css',
})
export class ProdsectionComponent {
  //todo inject ProductsService
  _ProductsService = inject(ProductsService)
  //todo var to store products in
  products$!:Observable<IResult<IProduct[]>>;
  ngOnInit(): void {
    this.recieveProductsFromService();
  }
  //todo method to call service and store products
  recieveProductsFromService():void{

    this.products$=this._ProductsService.getAllProducts();
  }
}