import { Inventario } from "./Inventario";
import { Item } from "./Item";

class InventarioLimiteException extends Error{
    nome = InventarioLimiteException
}


export class Personagem{
   private nome: string;
   private hp:number;
   private mp:number;
   private forca:number;
   private defesa:number;
   private inventario:Inventario;
   private arma:string;

   // get e set
   getForca(){
    return this.forca
   }
   setForca(forca){
    return this.forca = forca
   }

   abrirInventario(){
    for(let i:number=0; i<this.inventario.getitemInventario.length;i++){
        console.log(i + "-" + this.inventario.getitemInventario[i].item.nome +this.inventario.getitemInventario[i].getquantidadeMaximaItens
        + "Total: " + this.inventario.getitemInventario.length + "/" + this.inventario.getitemInventario
        )
   }
}

   usarItem(item:Item){
   }

}