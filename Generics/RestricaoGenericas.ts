interface IHCode {
    length: number
}

const mostrarQuantidadeTotal = <HCode extends IHCode>(valor: HCode): HCode => {
    console.log(`Total: ${valor.length}`);

    return valor;
}

console.log(mostrarQuantidadeTotal([10, 10, 20, 20]));
console.log(mostrarQuantidadeTotal({ name: 'Ronaldo', length: 1 }));