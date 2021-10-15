const showErro = (mensagem: string): never => {
    throw new Error(mensagem);
}

// showErro("Algo deu errado");


const loopInfinito = (): never => {
    let n = 0;

    while (true) {
        n = n + 1
    }
}