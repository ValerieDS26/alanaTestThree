export class Candidate {
    
    private _photo: string;
    get photo(): string { return this._photo };
    set photo(_photo: string) { this._photo = _photo };

    private _name: string;
    get name(): string { return this._name };
    set name(_name: string) { this._name = _name };

    private _lastName: string;
    get lastName(): string { return this._lastName };
    set lastName(_lastName: string) { this._lastName = _lastName };

    private _email: string;
    get email(): string { return this._email };
    set email(_email: string) { this._email = _email };

    private _phone: string;
    get phone(): string { return this._phone };
    set phone(_phone: string) { this._phone = _phone };

    private _address: string;
    get address(): string { return this._address };
    set address(_address: string) { this._address = _address };

    private _age: string;
    get age(): string { return this._age };
    set age(_age: string) { this._age = _age };
    constructor() {

    }
}