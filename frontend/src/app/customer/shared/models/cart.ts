import { cartitem } from "./cartitem";

export class cart{
    items:cartitem[]=[];

    gettotalprice():number{
      let totalprice=0;
      this.items.forEach(item => {
        totalprice += item.price;
      });
      return totalprice;
    }
}