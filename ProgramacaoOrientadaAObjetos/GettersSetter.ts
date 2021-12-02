class Permissao {
    constructor(
        private _nome: string,
        private nivel: number
    ) { }

    get nome(): string { return this._nome.toUpperCase() };

    set nome(novoNome) {
        if (novoNome.length < 5) {
            throw new Error('O nome da permissão deve ter no mínimo 5 letras');
        }

        this._nome = novoNome;
    }

}

const p = new Permissao('Administrador', 1);

try {
    p.nome = 'adm';

}
catch (err: any) {
    console.log(err.message);
}

