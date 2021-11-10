class Professor {
    nome: string;
    idade: number;
    materia: string;

    constructor(nome: string, idade: number, materia: string) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }

    seApresentar(): string {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e vou lecionar ${this.materia} para vocês.`;
    }

    dizerNotas(...notas: number[]) {
        const totalSoma = notas.reduce((soma, nota) => {
            return soma + nota;
        }, 0);

        return totalSoma / notas.length;
    }
}

const ted = new Professor('Ted Mosby', 47, 'Arquitetura');
console.log(ted.seApresentar());
console.log(ted.dizerNotas(8, 10, 5.5, 7.5));

