import { Injectable } from '@angular/core';

import { cart } from '../shared/models/cart';
import { Foods } from '../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:cart=new cart();

  addtocart(food:Foods):void{
    let cartitem=this.cart.items.find(item=>item.food.id === food.id);
    if(cartitem){
    this.changequantity(food.id,cartitem.quantity+1);
    return;
    }
    //this.cart.items.push(new cartitem(food));
  }

  removefromcart(foodid:number){
    this.cart.items=this.cart.items.filter(item=>item.food.id !=foodid);
  }

  changequantity(quantity:number,foodid:number){
    let cartitem=this.cart.items.find(item=>item.food.id===foodid);
    if(!cartitem) return;
    cartitem.quantity=quantity;
  }

  getcart():cart{
  return this.cart;
  }

 
}
