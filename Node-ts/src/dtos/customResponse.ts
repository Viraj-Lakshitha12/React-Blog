export default class CustomResponse {
    private _status: number;
    private _messsage: string;
    private _data: any;

    constructor(status: number, messsage: string, data?: any) {
        this._status = status;
        this._messsage = messsage;
        this._data = data;
    }


    get status(): number {
        return this._status;
    }

    set status(value: number) {
        this._status = value;
    }

    get messsage(): string {
        return this._messsage;
    }

    set messsage(value: string) {
        this._messsage = value;
    }

    get data(): any {
        return this._data;
    }

    set data(value: any) {
        this._data = value;
    }

    toJSON() {
        return {
            status: this._status,
            message: this._messsage,
            data: this._data
        }

    }
}
