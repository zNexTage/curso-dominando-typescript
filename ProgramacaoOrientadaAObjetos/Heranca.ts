class Cadastro {
    nome: string;
    nascimento: Date;

    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}

class Cliente extends Cadastro {
    email: string;
    empresa: string;

    constructor(
        nome: string,
        nascimento: Date,
        email: string,
        empresa: string) {
        super(nome, nascimento); //Chama o construtor da classe pai
        this.email = email;
        this.empresa = empresa;
    }
}

const joao = new Cliente("João", new Date("2000-01-01"), "joao@email.com", 'hcode');
console.log(joao);

