class Veiculo {
    public cor: string;

    constructor(cor: string) {
        this.cor = cor;
    }

    public tentarAbrirPorta(): boolean {
        return false;
    }
}

const carro = new Veiculo('Azul');

console.log(carro.cor);

carro.cor = 'Preto';
console.log(carro.cor);
