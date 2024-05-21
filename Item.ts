import { Personagem } from "./Personagem";

export abstract class  Item{
    protected nome:string;
    protected descricao: string;

    constructor(n:string, d:string, ){
        this.nome = n;
        this.descricao = d;
    }
    abstract aplicarBeneficios(persornagem: Personagem);

    abstract RemoverBeneficios(persornagem: Personagem);
}