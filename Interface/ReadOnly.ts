/*
    const é para variável
    readonly é para propriedade
 */
interface ICurso {
    readonly titulo: string; //Campo somente leitura
    descricao?: string;
    readonly preco: number;
    cargaHoraria: number;
    classificacao: number;
}

const curso: ICurso = {
    titulo: "Typescript",
    preco: 5000,
    cargaHoraria: 10000,
    classificacao: 5
};

// curso.titulo = "Php 8"; Não é mais possível alterar o valor de titulo, pois ele é um atributo readonly

console.log(curso);