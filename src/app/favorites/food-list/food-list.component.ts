import { Component, OnInit } from '@angular/core';
import { GetFoodItemsService } from './../../get-food-items.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {

  food_items:any[] = [];

  constructor(private _getFood:GetFoodItemsService) { 
    this.food_items = _getFood.getFoodList();
    console.log(_getFood.getFoodList());
  }

  ngOnInit(): void {
  }

}
