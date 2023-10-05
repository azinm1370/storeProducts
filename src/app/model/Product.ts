export class Product{
    Id:number | undefined;
    Name:string |undefined;
    Category:string | undefined;
    Price:any | undefined;
    Image:string | undefined;
    Reviews:string | undefined;
    Status:string | undefined;


    constructor(Id:any,name:any,price:any,reviews:any,category:any,status:any) {
       this.Id=Id;
       this.Name=name;
       this.Category =category;
       this.Price=price;
       this.Reviews=reviews;
       this.Status=status;
       this.Image="GM.png";
    }
}