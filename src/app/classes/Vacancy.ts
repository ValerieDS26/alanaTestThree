export class Vacancy {
    
    private _photo: string;
    get photo(): string { return this._photo };
    set photo(_photo: string) { this._photo = _photo };

    private _jobPositionName: string;
    get jobPositionName(): string { return this._jobPositionName };
    set jobPositionName(_jobPositionName: string) { this._jobPositionName = _jobPositionName };

    private _title: string;
    get title(): string { return this._title };
    set title(_title: string) { this._title = _title };

    private _distance: number;
    get distance(): number { return this._distance };
    set distance(_distance: number) { this._distance = _distance };

    constructor() {

    }
}