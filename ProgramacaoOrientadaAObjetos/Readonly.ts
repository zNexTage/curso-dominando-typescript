class Usuario {
    readonly id: string = '01';
    nome: string = 'João';
    private senha: string = '123456';
    readonly dataCadastro: Date = new Date('2021-01-01');
}

const u = new Usuario();
console.log(u.id);

