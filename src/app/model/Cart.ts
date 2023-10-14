import { Phone } from "./Phone";

export let cartId:number=0
export class Cart{
    Id:number | any;
    Phone: Phone;
    Quantity:number ;
    TotalPrice:any;
    Status:Boolean=true
    BasketNumber:any;
    constructor(quantity:number,phone:any,basketNumber:any){
        this.TotalPrice=0;
        this.Id=cartId++,
        this.Phone=phone,
        this.Quantity=quantity,
        this.BasketNumber = basketNumber,
        this.TotalPrice=this.Phone.Price*this.Quantity;
    }
}