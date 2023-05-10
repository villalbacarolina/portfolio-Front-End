export class User{
    private id!: number;
    private email:string;
    private  password:string;

    constructor(email:string, password:string){
       this.email= email;
        this.password=password;
    }

    createPassword(password:string):void{
        this.password=password;
    }

    createEmail(email:string):void{
        this.email=email;
    }


    getEmail():string{
        return this.email
    }

}