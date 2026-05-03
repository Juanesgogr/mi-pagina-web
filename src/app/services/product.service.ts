import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 productos = [
    {
      id: 1,
      nombre: 'Ramo Feliz Cumpleaños',
      precio: 120000,
      imagen: 'img/cumple.jpeg',
      descripcion:'Ramo grande de 30 rosas con listón personalizado.',
      detalle: 'Ramo grande de 30 rosas, con un listón de la frase que desees como: feliz cumpleaños, quieres ser mi novi@, feliz aniversario, felicitaciones, con sus correspondientes decoraciones como: el moño, perlas o mariposas.',
      categoria: 'cumple',
      destacado: true
    },
    {
      id: 2,
      nombre: 'Tooper princesa',
      precio: 30000,
      imagen: 'img/cumple1.jpeg',
      descripcion: 'Tooper de princesa.',
      detalle:'Ramo en forma de princesa con rosas haciendo una simulación de vestido acorde a la princesa que desees, y acorde al evento.',
      categoria: 'cumple'
    },
    {
      id: 3,
      nombre: 'Encanto rosas',
      precio: 115000,
      imagen: 'img/cumple2.jpeg',
      descripcion: 'Ramo.',
      detalle:'Ramo circular de 8 rosas con una base acorde al color de las rosas y con un peluche de tu gusto, varia el precio depende del peluche que elijas.',
      categoria: 'cumple',
      destacado: true
    },
    {
      id: 4,
      nombre: 'Tooper princesa 2',
      precio: 30000,
      imagen: 'img/cumple3.jpeg',
      descripcion: 'Tooper de princesa.',
      detalle:'Ramo en forma de princesa con rosas haciendo una simulación de vestido acorde a la princesa que desees, y acorde al evento.',
      categoria: 'cumple'
    },
    {
      id: 5,
      nombre: 'Tooper princesa 3',
      precio: 30000,
      imagen: 'img/regalo5.jpeg',
      descripcion: 'Tooper de princesa.',
      detalle:'Ramo en forma de princesa con rosas haciendo una simulación de vestido acorde a la princesa que desees, y acorde al evento.',
      categoria: 'cumple'
    },
    {
      id: 6,
      nombre: 'Ramo Dulzura',
      precio: 75000,
      imagen: 'img/cumple4.jpeg',
      descripcion: 'Ramo en forma de corazón.',
      detalle:'Ramo de forma de corazón con sus determinadas decoraciones como: mariposas, perlas en cada rosa, corona, etc.., trae su debido mensaje con el dulce que desees.',
      categoria: 'cumple'
    },
    {
      id: 7,
      nombre: 'Girasol con rosas y QR',
      precio: 85000,
      imagen: 'img/regalo.jpeg',
      descripcion: 'Hermoso girasol.',
      detalle:'Ramo con un girasol en el centro y rosas al rededor con un mensaje oculto en un QR ya sea una presentación o una carta.',
      categoria: 'regalo',
      destacado: true
    },
    {
      id: 8,
      nombre: 'Ramo de 9 rosas',
      precio: 55000,
      imagen: 'img/regalo1.jpeg',
      descripcion: 'Ramo.',
      detalle:'Ramo de 9 rosas cubierto con papel coreano, con las decoraciones que deseas agregarle como: escarcha a las rosas, mariposas, corona, un mensaje oculto o un peluche de tu gusto, el precio varía dependiendo de lo que adiciones.',
      categoria: 'regalo'
    },
    {
      id: 9,
      nombre: 'Llavero personalizado',
      precio: 35000,
      imagen: 'img/Llave.jpeg',
      descripcion: 'Llavero.',
      detalle:'Llavero personalizado en la manera que desees.',
      categoria: 'regalo'
    },
    {
      id: 10,
      nombre: 'Bombo de Rosas de novia',
      precio: 80000,
      imagen: 'img/chat.jpeg',
      descripcion: 'Bombo de rosas.',
      detalle:'Ramo en forma de corazón con una base alta y un mensaje oculto dentro de las rosas. El mensaje lo eliges tú.',
      categoria: 'regalo',
      destacado: true
    },
    {
      id: 11,
      nombre: 'Bombo de rosas',
      precio: 70000,
      imagen: 'img/regalo4.jpeg',
      descripcion: 'Bombo Clásico.',
      detalle:'Bombo de rosas, con una base circular, decoraciones incluidas como mariposas, perlas en las rosas y un moño decorativo en la base, también le puedes adicionar diferentes decoraciones como: peluches, escarcha, etc..',
      categoria: 'regalo'
    },
    {
      id: 12,
      nombre: 'Rosa en papel coreano',
      precio: 20000,
      imagen: 'img/regalo6.jpeg',
      descripcion: 'Detalle elegante.',
      detalle:'Una sola rosa en una decoración con papel coreano muy lindo, contrastando los colores dependiendo del color de rosa que elijas y con unas decoraciones sutiles.',
      categoria: 'regalo'
    },
    {
      id: 13,
      nombre: 'Girasol Jumbo',
      precio: 24500,
      imagen: 'img/regalo7.jpeg',
      descripcion: 'Girasol grande.',
      detalle:'Girasol jumbo con su papel coreano, y con unas decoraciones sutiles dependiendo del regalo.',
      categoria: 'regalo'
    },
    {
      id: 14,
      nombre: 'Rosa Pomposa',
      precio: 22000,
      imagen: 'img/regalo8.jpeg',
      descripcion: 'Rosa decorativa.',
      detalle:' Rosa pomposa decorativa con un tono suave, con pétalos definidos en forma de espiral que evocan elegancia y delicadeza. Una flor perfecta para detalles especiales',
      categoria: 'regalo'
    }
  ];

  getProductos() {
    return this.productos;
  }

  getProductoById(id: number) {
    return this.productos.find(p => p.id === id);
  }

}