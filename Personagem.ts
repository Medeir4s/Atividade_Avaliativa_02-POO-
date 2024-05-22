import { Inventario } from "./Inventario";
import { Item } from "./ItemInventario";

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

   getForca(){
    return this.forca
   }
   setForca(forca){
    return this.forca = forca
   }

   getinventario(){
    return this.inventario
    }
    getDesefa(){
        return this.desefa
    }
    setDefesa(d){
        return this.desefa = d
    }
    getHP(){
        return this.HP
    }
    setHP(hp){
        return this.HP = hp
    }
    getHPmax(){
        return this.HPmax
    }
    setHPmax(hpmax){
        return this.HPmax = hpmax
    }
    getMP(){
        return this.MP
    }
    setMP(mp){
        return this.MP = mp
    }

   abrirInventario(){
    for(let i:number=0; i<this.inventario.getitemInventario.length;i++){
        console.log(i + "-" + this.inventario.getitemInventario[i].item.nome +this.inventario.getitemInventario[i].getquantidadeMaximaItens
        + "Total: " + this.inventario.getitemInventario.length + "/" + this.inventario.getitemInventario
        )
   }
}

usarIntem(item:Item){
    if(item instanceof Pocao){
        for(let i:number = 0; i < this.inventario.getItensInventario().length; i++){
            if(this.inventario.getItensInventario()[i].getItem().getNome() == item.getNome()){
                this.inventario.getItensInventario()[i].setQuantidade(this.inventario.getItensInventario()[i].getquantidade()-1);

            }
        }
    } else if (item instanceof Arma) {
        this.arma = item
        }
    }
}

informacoesPersonagem();{
    console.log(`\nInformações do Personagem:\n
    Nome: ${this.nome}\n
    HP: ${this.HP}\n
    MP: ${this.MP}\n
    Força: ${this.forca}\n
    Defesa: ${this.desefa}`)
}

desaquiparArma();{
    this.arma?.removerBeneficios(this);
    this.arma = null;
}
