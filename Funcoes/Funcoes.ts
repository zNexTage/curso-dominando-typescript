function mostrarMensagem(texto: string | object | number): boolean {
    console.log(texto);

    return true;
}

console.log(mostrarMensagem('Testando!!!!!!!!'));
console.log(mostrarMensagem(100));
console.log(mostrarMensagem({ url: 'teste@email.com' }));


const show = (codigo: number) => {
    console.log(codigo);

    return mostrarMensagem;
}

show(100)(120)