class InventarioLimiteException extends error{
    nome = InventarioLimiteException
}


class Personagem{
   private nome: string;
   private hp:number;
   private mp:number;
   private forca:number;
   private defesa:number;
   private inventario:Inventario;
   private arma:string;

   abrirInventario(){
    for(let i:number=0; i<this.inventario.getitemInventario.length;i++){
        console.log(i + "-" + this.inventario.getitemInventario[i].item.nome +this.inventario.getitemInventario[i].getquantidadeMaximaItens
        + "Total: " + this.inventario.getitemInventario.length + "/" + this.inventario.getitemInventario
        )
   }
}

abstract class  Item{
    protected nome:string;
    protected descricao: string;

    constructor(n:string, d:string, ){
        this.nome = n;
        this.descricao = d;
    }
    abstract aplicarBeneficios(persornagem: Personagem);

    abstract RemoverBeneficios(persornagem: Personagem);
}

class ItemInventario{
    private quantidade:number;
    private item:Item;
}

class Arma extends Item {
    aplicarBeneficios(persornagem: Personagem) {

    }

    RemoverBeneficios(persornagem: Personagem) {
    }
}

class Pocao extends Item{

}

class Inventario{
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

class ItemMenu{
    private opcao: string;
    private opcaoTexto:string;
}

class Menu{
    private itensMenu: ItemMenu[];

    constructor(){
        let arma = new ItemMenu("1", "Equipar arma");
        let addArmaInv = new ItemMenu("2", "Tomar poção");
        let addPocaoInv = new ItemMenu("3", "");
        let imprimiriInfo = new ItemMenu("4", "Restaurar MP");
        let desequiparArma = new ItemMenu("5", "Defender");

        this.itensMenu.push(arma);
        this.itensMenu.push(addArmaInv);
        this.itensMenu.push(addPocaoInv);
        this.itensMenu.push(imprimiriInfo);
        this.itensMenu.push(desequiparArma);
    }

    imprimirMenu(){  
    }


}