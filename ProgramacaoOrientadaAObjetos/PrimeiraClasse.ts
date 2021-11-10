class Pessoa {
    nome: string;
    idade: number;
    altura: number;

    constructor(nome: string, idade: number, altura: number) {
        this.nome = nome;
        this.altura = altura;
        this.idade = idade;
    }

    toString(): string {
        return `A pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura`;
    }
}

const pessoa = new Pessoa('Teste', 10, 10); //Instanciando a classe Pessoa
const pessoa2 = new Pessoa('Marcos', 20, 1.20); //pessoa e pessoa2 são objetos individuais

console.log(pessoa);
pessoa.nome = 'Ronaldo';
console.log(pessoa);
console.log('--------------');
console.log(pessoa.toString());
console.log(pessoa2.toString());
console.log('--------------');
console.log(""+pessoa); //Como definimos o método toString() ele será executado e retornar um valor
// Se o método toString() não foi definido aparecerá um Object







