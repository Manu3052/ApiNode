
export class CreateCustomerDto {

    private _name: string
    private _email: string 

    constructor(name: string, email: string){
        this._name = name
        this._email = email
    }

    
    public get email() : string {
        return this._email
    }
    
    
    public get name() : string {
        return this._name
    }
    
}