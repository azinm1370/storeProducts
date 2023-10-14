

export class User{
    UserId    :   string;
    Email    :   string;
    Password  :   string;
    UserName :   string;
    PersonId  :   string;

    constructor(UserId:string,Email:string,Password:string,UserName:string,PersonId:string) {
        this.UserId      =  UserId    ;
        this.Email       =  Email     ;
        this.Password    =  Password  ;
        this.UserName    =  UserName  ;
        this.PersonId    =  PersonId  ;
     
     }


     set userId(value: string) {
        this.UserId = value;
     }
    get userId(): string {
        return this.UserId;
    }
    set email(value: string) {
        this.Email = value;
     }
    get email(): string {
        return this.Email;
    }
    set password(value: string) {
        this.Password = value;
     }
    get password(): string {
        return this.Password;
    }
    set userName(value: string) {
        this.UserName = value;
     }
    get userName(): string {
        return this.UserName;
    }
    set personId(value: string) {
        this.PersonId = value;
     }
    get personId(): string {
        return this.PersonId;
    }
  
}