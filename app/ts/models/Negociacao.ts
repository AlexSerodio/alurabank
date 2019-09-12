class Negociacao {

    _data: any;
    _quantidade: any;
    _valor: any;

    constructor(data: any, quantidade: any, valor: any) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): any {
        return this._data;
    }

    get quantidade(): any {
        return this._quantidade;
    }

    get valor(): any {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

}