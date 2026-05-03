import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetailComponent {

  productoSeleccionado: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productoSeleccionado = this.productService.getProductoById(id);
  }

  volver() {
    this.location.back();
  }

  enviarWhatsApp() {
    const numero = '573054303950';

const mensaje = `Hola 👋 vi este producto en tu página y me encantó:

🌸 ${this.productoSeleccionado.nombre}

💰 Precio: COP ${this.productoSeleccionado.precio}

¿Lo tienes disponible? Me gustaría pedirlo 😊`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  }

}