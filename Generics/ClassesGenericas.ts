interface ICadastroPadrao {
    readonly id: number;
    readonly createdAt: Date;
    readonly updateAt: Date
}


interface ICadastroUsuario extends ICadastroPadrao {
    nome: string;
    email: string;
    senha: string;
}


interface ICadastroCategoria extends ICadastroPadrao {
    nome: string;
}


class CadastroBasico<T> {
    private dados: Array<T>
    constructor() {
        this.dados = new Array();
    }

    criar(dado: T): T {
        console.log('Criando novo registro');
        this.dados.push(dado);

        return dado;
    }

    selecionar(id: number): T {
        console.log('Selecionando o registro de ID: ', id);

        return this.dados[id - 1] || {} as T;
    }

    atualizar(id: number, dadosAtualizar: T) {
        let item = this.selecionar(id);

        if (item) {
            console.log('Atualizando o item de ID: ', id);
            this.dados[id] = { ...dadosAtualizar };
        }

        return {};
    }

    remover(id: number): boolean {
        if (this.selecionar(id)) {
            console.log('Atualizando o item de ID: ', id);
            delete this.dados[id - 1];

            return true;
        }

        return false;
    }
}

class UsuarioModelo extends CadastroBasico<ICadastroUsuario>{ }

const novoUsuario = new UsuarioModelo();

const user = novoUsuario.criar({
    id: 1,
    nome: 'Glaucio Daniel',
    email: 'glaucio@email.com',
    senha: 'gl@ucio',
    createdAt: new Date('2015-06-01'),
    updateAt: new Date('2020-01-20')
})

console.log(user);
console.log(novoUsuario.selecionar(1));

class CategoriaModelo extends CadastroBasico<ICadastroCategoria>{}

const novaCategoria = new CategoriaModelo();

novaCategoria.criar({
    id: 1,    
    nome: "Javascript",
    createdAt: new Date('2015-06-01'),
    updateAt: new Date('2020-01-20')
})
