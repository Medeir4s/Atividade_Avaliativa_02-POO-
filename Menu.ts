import { ItemMenu } from "./ItemMenu";

export class Menu{
    private itensMenu: ItemMenu[];

    constructor(){
        let arma = new ItemMenu("1", "Equipar arma");
        let tomarPocao = new ItemMenu("2", "Tomar poção");
        let addArmaInv = new ItemMenu("3", "Adicionar arma ao inventario");
        let addPocaoInv = new ItemMenu("4", "Adicionar poção ao inventario");
        let imprimiriInfo = new ItemMenu("5", "Imprimir informação");
        let desequiparArma = new ItemMenu("6", "Desequipar arma");
        let sair = new ItemMenu("0", "Sair");

        this.itensMenu.push(arma);
        this.itensMenu.push(tomarPocao);
        this.itensMenu.push(addArmaInv);
        this.itensMenu.push(addPocaoInv);
        this.itensMenu.push(imprimiriInfo);
        this.itensMenu.push(desequiparArma);
        this.itensMenu.push(sair)
    }

    imprimirMenu(){  
        this.itensMenu.forEach(ItemMenu =>console.log(ItemMenu.getOpcao() + "-" +ItemMenu.getOpcaoTexto()))

        var enter = require('prompt sync')();
        let opcaoEscolhida = enter('Selecionar Opção');
        return opcaoEscolhida
    }
}
