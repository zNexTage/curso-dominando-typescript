interface IOperacaoOpcoes {
    onCalculado: (resultado: string) => void;
}


class Operacao {
    private onCalculado: (resultado: string) => void;

    constructor(
        opts: IOperacaoOpcoes,
        private operacao: string[] = []
    ) {
        this.onCalculado = opts.onCalculado;
    }

    adicionar(valor: string): number {
        if (this.operacao.length === 3) {
            this.calcular();
        }
        
        this.operacao.push(valor);
        
        return this.operacao.length;
    }

    obterResultado(): string {
        let resultado: string = "0";

        try {
            resultado = eval(
                this.operacao.join("")
            ).toString();
        } catch (error) {
            resultado = "ERRO";
        }

        return resultado;
    }

    calcular() {
        let resultado = this.obterResultado();

        if (resultado.length > 12) {
            resultado = resultado.substring(0, 12);
        }

        this.operacao = [resultado];

        this.onCalculado(resultado);
    }

    desfazer() {
        this.operacao.pop();

        return isNaN(Number(this.ultimaPosicao)) ? "0" : this.ultimaPosicao;
    }

    limpar(): void {
        this.operacao = [];
    }

    adicionarPonto(): void {
        let valorUltimaPosicao = this.ultimaPosicao;

        if (isNaN(Number(valorUltimaPosicao)) || valorUltimaPosicao.includes('.')) {
            return;
        }

        valorUltimaPosicao = `${valorUltimaPosicao}.`;

        this.ultimaPosicao = valorUltimaPosicao;
    }

    get ultimaPosicao(): string {
        return this.operacao.length ?
            this.operacao[this.operacao.length - 1] : "0";
    }

    set ultimaPosicao(valor: string) {
        const ultimoIndex = this.operacao.length ?
            this.operacao.length - 1 : 0;

        this.operacao[ultimoIndex] = valor;
    }

    get length(): number {
        return this.operacao.length;
    }
}

export default Operacao;