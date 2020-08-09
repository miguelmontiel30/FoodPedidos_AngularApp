import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetFoodItemsService {

  food_items:any[] = [
    { id: 1, nombre: 'Guajolotes', precio: 13.50, descripcion: 'Torta con enchilada' },
    { id: 2, nombre: 'Sopes', precio: 20, descripcion: 'Sopesitos riquis' },
    { id: 3, nombre: 'Carnitas', precio: 45.6, descripcion: 'Tortas y tacos de carnitas' },
    { id: 4, nombre: 'Tacos', precio: 37, descripcion: 'Orden de 5o mil tacos' },
    { id: 5, nombre: 'Enchiladas', precio: 13.50, descripcion: 'Orden de  enchiladas' }
  ];

  constructor() { 
    console.log('Servicio Funcionanndo.....');
    // console.log(this.food_items);
  }

  getFoodList() {
    return this.food_items;
  }

}
