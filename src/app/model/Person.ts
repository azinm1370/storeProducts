export class Person{
    Id:string|undefined;
    Name:String|undefined;
    Family:string|undefined;
    Email:String|undefined;
    Password:string|undefined;
    RePassword:string|undefined;
    UserName:String|undefined;
    Gender:string|undefined;
    Address:string|undefined;
    constructor(id:any,name:any,family:any,email:any,password:any,rePassword:any,userName:any,gender:any,address:any) {
        this.Id=id;
        this.Name=name;
        this.Family =family;
        this.Email=email;
        this.Password =password;
        this.RePassword =rePassword;
        this.UserName=userName;
        this.Gender=gender;
        this.Address=address;
     }
}
