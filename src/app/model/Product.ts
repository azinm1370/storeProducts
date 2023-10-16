export class Product{
    Id?         :string ;
    Name?        :string ;
    Category?    :string ;
    Price?       :string ;
    Image?       :string ;
    Reviews?     :string ;
    Status?      :string ;


    constructor(
        Id         :string ,
        Name       :string,
        Price      :string,
        Reviews    :string,
        Category   :string,
        Status     :string
        ) {
       this.Id         =  Id;
       this.Name       =  Name;
       this.Category   =  Category;
       this.Price      =  Price;
       this.Reviews    =  Reviews;
       this.Status     =  Status;
       this.Image      =  "GM.png";
    }



    set id(value: string) {
        this.Id = value;
    }
    get id(): string | undefined {
        return this.Id;
    }
    set name(value: string) {
        this.Name = value;
    }
    get name(): string | undefined {
        return this.Name;
    }

    set category(value: string) {
        this.Category = value;
    }
    get category(): string | undefined {
        return this.Category;
    }
    set price(value: string) {
        this.Price = value;
    }
    get price(): string | undefined {
        return this.Price;
    }
    set image(value: string) {
        this.Image = value;
    }
    get image(): string | undefined {
        return this.Image;
    }
    set status(value: string) {
        this.Status = value;
    }
    get status(): string | undefined{
        return this.Status;
    }
    set reviews(value: string) {
        this.Reviews = value;
    }
    get reviews(): string | undefined{
        return this.Reviews;
    }

}