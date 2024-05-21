import { ItemInventario } from "./ItemInventario";

class InventarioLimiteException extends Error {
    nome = InventarioLimiteException
}

export class Inventario{
    private itemInventario: ItemInventario[];
    private quantidadeMaximaItens: number;

    adicionarItem(it:ItemInventario){
     if(this.itemInventario.length >= this.quantidadeMaximaItens){
        throw new InventarioLimiteException('O inventario esta cheio');
     }
     if (this.itemInventario.includes(it)){
        this.quantidadeMaximaItens++
     } else {
        this.itemInventario.push(it)
     }
    }

    getitemInventario(){
        return  this.itemInventario
    }
}