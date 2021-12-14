const debug = (classe: unknown) => console.log('Classe foi criada', classe);

@debug
class PrimeiraClasse {
    constructor() {

    }
}

const logger = (construtor: any) => {
    return class extends construtor {
        createdAt: Date = new Date('2021-02-15');
    }
}

@logger
class SegundaClasse {
    constructor() { }
}

console.log(new SegundaClasse());