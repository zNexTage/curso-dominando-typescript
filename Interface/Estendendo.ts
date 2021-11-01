interface IModelo {
    id: number;
    createdAt: Date;
    updatedAt?: Date;
}

//Estende a estrutura de dados
interface IPessoa extends IModelo {
    nome: string;
    idade?: number;
}

interface IUsuario extends IPessoa {
    // id: number; O id é herdado de IPessoa
    // nome: string; O nome é herdado de IPessoa
    email: string;
    senha: string;
};

const christian: IUsuario = {
    id: 1,
    nome: "Christian",
    email: "christian@email.com",
    createdAt: new Date(),
    senha: "senha@123",
    idade: new Date().getFullYear() - 1999,
}

console.log(christian);
