class InventarioLimiteException extends error{
    nome = InventarioLimiteException
}


class Personagem{
    private ataque:number;
    private defesa:number;

    constructor(at:number, def:number){
        this.ataque = at;
        this.defesa = def;
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
}
class Pocao extends Item{
}

class Inventario{
    private itemInventario: ItemInventario[];
    private quantidadeMaximaItens: number;

    adicionarItem(it:Item){
     if(this.itemInventario.length >= this.quantidadeMaximaItens){
        throw new InventarioLimiteException()
     }
    }
}

class ItemMenu{
   private opcao:string;
    private textoOpcao:string;
}

class Menu{
    private itemMenu: ItemMenu[];

    imprimirMenu(){
        return this.imprimirMenu
    }
}