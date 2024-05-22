import { Arma } from "./Arma";
import { Inventario } from "./Inventario";
import { ItemInventario } from "./ItemInventario";
import { Personagem } from "./Personagem";
import { Pocao } from "./Pocao";

export class Jogo{
    private menu:Menu;
    private personagem:Personagem;

    constructor (m, p, i){
        this.menu = m;
        this.personagem = p;
    };
     
    jogar() {
        do {
            let opcao = this.menu.imprimirMenu();
            
            if(opcao == "3"){
                var enter = require('prompt-sync')();
                let nomeItem = enter("Nome do Item: ");
                let descricaoItem = enter("Discrição do Item:: ")
                let quantidadeItem = enter("Digite a quantidade: ");
                let novaArma = new Arma(nomeItem, descricaoItem);
                let itemInv = new ItemInventario(novaArma, quantidadeItem);
                this.personagem.getinventario().getItensInventario().push(itemInv)
            } else if (opcao == "4"){
                var enter = require('prompt-sync')();
                let nomeItem = enter("Nome do Item: ");
                let descricaoItem = enter("Discrição do Item: ")
                let quantidadeItem = enter("Digite a quantidade: ");
                let novaPocao = new Pocao(nomeItem, descricaoItem);
                let itemInv = new ItemInventario(novaPocao, quantidadeItem);
                this.personagem.getinventario().getItensInventario().push(itemInv)
            } else if (opcao == "1"){
                for(let i:number = 0; i < this.personagem.getinventario().getItensInventario().length; i++){
                    console.log(this.personagem.getinventario().getItensInventario()[i])
                }
            }
             else if (opcao == "5"){
                this.personagem.informacoesPersonagem()
            } else if (opcao == "0"){
                console.log("Programa finalizado!!")
            } else if (opcao == "6"){
                this.personagem.desaquiparArma();
            } 
      
            } while();   
    }
}