import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
// import { Foods } from '../shared/models/food.ts';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAllFoodByTag(tag:string) :Foods[]{
    return tag == "All"?
    this.getAll():this.getAll().filter((food: { tags: string | string[]; }) => food.tags?.includes(tag));

  }

 
  geturl="http://localhost:3000/getfooditems";

  getAll():any{
    return this.http.get(this.geturl).pipe(map(res=>res));
    /*return[
      {
        id: 1,
        name: ' Tomato Pasta',
        cookTime: '30-40 min',
        price:25,
        favorite:false,
        origins:['Mexico'],
        star:4.5,
        imageUrl:'assets/food21.jpg',
        tags: ['fast food', 'lunch']
      },
      {
        id: 2,
        name: 'Pasta',
        cookTime: '20-30 min',
        price:30,
        favorite:true,
        origins:['Germany'],
        star:4.0,
        imageUrl:'assets/food25.jpg',
        tags: ['fast food', 'lunch']
      },
      {
        id: 3,
        name: 'Meatballs',
        cookTime: '40-50 min',
        price:15,
        favorite:false,
        origins:['China'],
        star:2.0,
        imageUrl:'assets/food26.jpg',
        tags: ['fast food', 'lunch']
      },
      {
        id: 4,
        name: 'Cheesy Pasta',
        cookTime: '50-60 min',
        price:25,
        favorite:true,
        origins:['Italy'],
        star:4.5,
        imageUrl:'assets/food27.jpg',
        tags: ['fast food', 'lunch']
      },
      {
        id: 5,
        name: 'Pasta Italiano',
        cookTime: '40-50 min',
        price:60,
        favorite:true,
        origins:['India'],
        star:4.7,
        imageUrl:'assets/food28.jpg',
        tags: ['fast food', 'lunch']
      },
      {
        id: 6,
        name: 'Halloween Deserts',
        cookTime: '60-70 min',
        price:50,
        favorite:false,
        origins:['India'],
        star:3.3,
        imageUrl:'assets/food29.jpg',
        tags: ['fast food', 'deserts']
      }

    ];*/
  }
}
