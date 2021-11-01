interface IProduto {
    nome: string;
    preco: number;
    descricao?: string; //Atributo opcional
    dataValidade: Date;
}

const produtoDados: IProduto = {
    nome: "Notebook",
    preco: 2500,
    // descricao: "Meu notebook super legal", //Não é obrigado a passar
    dataValidade: new Date(2022, 11, 1)
};

console.log(produtoDados);


