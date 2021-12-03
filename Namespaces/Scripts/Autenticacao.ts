///<reference path="./Autenticacao/index.ts" />

const novoRegistro = new Autenticacao.Autenticar();

const res = novoRegistro.registrar({
    nome: 'Christian',
    email: 'christian@email.com',
    senha: '123',
    dataNascimento: new Date(1999, 8, 19)
});

console.log(res);

// novoRegistro.login({ email: 'usuario@email.com', senha: '123' });
