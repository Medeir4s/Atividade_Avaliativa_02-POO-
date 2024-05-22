import { Item } from "./Item";

export class ItemInventario {
    private quantidade: number;
    private item: Item;

    constructor(i: Item,q:number){
        this.item = i;
        this.quantidade = q
    }

    public getquantidade(){
        return this.quantidade;
    }
    public getItem(){
        return this.item
    }

    setQuantidade(quantidade){
        this.quantidade = quantidade
    }

}