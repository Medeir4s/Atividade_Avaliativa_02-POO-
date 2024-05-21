import { Item } from "./Item";
import { Personagem } from "./Personagem";

export class Arma extends Item {
    aplicarBeneficios(persornagem: Personagem) {
        persornagem.setForca(persornagem.getForca() + 10)
        
        persornagem.setDefesa(persornagem.getDefesa() + 5)
    }

    RemoverBeneficios(persornagem: Personagem) {
        persornagem.setForca(persornagem.getForca() - 10)
        
        persornagem.setDefesa(persornagem.getDefesa() - 5)
    }
}