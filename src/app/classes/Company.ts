export class Company {

    private _idCompany: number;
    get idCompany(): number { return this._idCompany };
    set idCompany(_idCompany: number) { this._idCompany = _idCompany };

    private _photo: string;
    get photo(): string { return this._photo };
    set photo(_photo: string) { this._photo = _photo };

    private _name: string;
    get name(): string { return this._name };
    set name(_name: string) { this._name = _name };

    private _numVacancies: number;
    get numVacancies(): number { return this._numVacancies };
    set numVacancies(_numVacancies: number) { this._numVacancies = _numVacancies };

    private _distance: number;
    get distance(): number { return this._distance };
    set distance(_distance: number) { this._distance = _distance };

    constructor() {
    }
}