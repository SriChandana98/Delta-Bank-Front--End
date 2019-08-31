export class Customer{
    constructor(private _cust_id:number,private _activated:boolean, private _email:string,private _firstname:string,private _lastname:string,private _panID:string,private _password:string,private _phoneNumber:string,){}

    get cust_id():number{
        return this._cust_id;
    }
    get email(){
        return this.email;
    }
    get firstname():string{
        return this._firstname;
    }

    get lastname():string{
        return this._lastname;
    }

    public toString(): string {
        return this._email + ' ' + this._firstname;
    }

    public activated(){
        return this._activated;
    }
}