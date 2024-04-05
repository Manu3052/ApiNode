
export class ResponseCustomerDto {

    private _name: string
    private _email: string 
    private _status: boolean

    constructor(name: string, email: string, status:boolean){
        this._name = name
        this._email = email
        this._status = status
    }

    /* Getters*/
    public get email() : string {
        return this._email
    }
    
    public get name() : string {
        return this._name
    }

    public get status() : boolean {
        return this._status
    }
    
}
