interface IBancoDeDados {
    ip: string;
    usuario: string;
    senha: string;
    tipoBanco: string;
}

class BancoDeDados {
    static LOCAL = 'localhost'; //Não precisamos armazenar esse valor em várias instâncias.
    static TIPO_MYSQL = 'MYSQL';
    static TIPO_SQL = 'SQL';

    constructor(
        private ip: string,
        private usuario: string,
        private senha: string,
        private tipoBanco: string
    ) { }

    //Possibilita criar regras para construção da classe
    static factory(params: IBancoDeDados) {
        const tiposBd = [BancoDeDados.TIPO_MYSQL, BancoDeDados.TIPO_SQL];

        if (!tiposBd.includes(params.tipoBanco)) {
            throw new Error("Tipo de banco incorreto.");
        }

        return new BancoDeDados(
            params.ip,
            params.usuario,
            params.senha,
            params.tipoBanco
        );
    }
}

const conexao = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_MYSQL,
    senha: 'root',
    usuario: 'root',
    ip: BancoDeDados.LOCAL
});

console.log(conexao);
