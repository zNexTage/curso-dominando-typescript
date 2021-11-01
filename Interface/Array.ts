interface ICategoria {
    id: number;
    nome: string;
    categoriaPai?: ICategoria;
}

const frontEnd: ICategoria = {
    id: 1,
    nome: 'Front-end'
}

const backEnd: ICategoria = {
    id: 2,
    nome: 'Back-end'
}

interface IMenu {
    categorias: ICategoria[]
}

let menu: IMenu = {
    categorias: [frontEnd, backEnd]
};

//Interface voltada para um array
interface ITodos {
    [indice: number]: string | ICategoria
    //O que vai dentro do array vai ser o tipo do indice
    //Após os colchetes é o tipo do array
}

let minhasTarefas: ITodos;

minhasTarefas = ['Estudar Typescript', {
    id: 1,
    nome: 'Estudar Javascript',
    categoriaPai: backEnd
}, 'Estudar PHP8'];

console.log(minhasTarefas[1]);
