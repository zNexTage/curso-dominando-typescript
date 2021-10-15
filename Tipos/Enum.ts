enum Permissoes {
    ADMIN,
    USUARIO = 'USER',
    READONLY = 'READONLY'
}

console.log(Permissoes[0]);
console.log(Permissoes.USUARIO);
console.log(Permissoes['READONLY']);