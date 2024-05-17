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

    adicionarItem(it:Item){
     if(this.itemInventario.length >= this.quantidadeMaximaItens){
        throw new InventarioLimiteException()
     }
    }
}

class itemMenu{
    private opcao:string;
    private textoOpcao:string;

    imprimirMenu(){
        constructor();{
            let arma = new ItemMenu("1", "Equipar arma");
            let addArmaInv = new ItemMenu("2", "Tomar poção");
            let addPocaoInv = new ItemMenu("3", "");
            let imprimiriInfo = new ItemMenu("4", "Restaurar MP");
            let desequiparArma = new ItemMenu("5", "Defender");
    
            this.itensMenu.push(ataque);
            this.itensMenu.push(ataqueEspecial);
            this.itensMenu.push(curaHp);
            this.itensMenu.push(MP);
            this.itensMenu.push(desefa);
        }
    }
}