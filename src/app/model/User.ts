

export class User{
    Id:string|undefined;
    Email:String|undefined;
    Password:string|undefined;
    UserName:String|undefined;
    PersonId:string|undefined;

    constructor(id:any,email:any,password:any,userName:any,personId:any) {
        this.Id=id;
        this.Email=email;
        this.Password =password;
        this.UserName=userName;
        this.PersonId=personId;
     
     }
  
  
}