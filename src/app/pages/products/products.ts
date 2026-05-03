import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  categoriaSeleccionada: string = 'todos';
  productos: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productos = this.productService.getProductos();
  }

}