class Operacao {
    constructor(opts, operacao = []) {
        this.operacao = operacao;
        this.onCalculado = opts.onCalculado;
    }
    adicionar(valor) {
        if (this.operacao.length === 3) {
            this.calcular();
        }
        this.operacao.push(valor);
        return this.operacao.length;
    }
    obterResultado() {
        let resultado = "0";
        try {
            resultado = eval(this.operacao.join("")).toString();
        }
        catch (error) {
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
    limpar() {
        this.operacao = [];
    }
    adicionarPonto() {
        let valorUltimaPosicao = this.ultimaPosicao;
        if (isNaN(Number(valorUltimaPosicao)) || valorUltimaPosicao.includes('.')) {
            return;
        }
        valorUltimaPosicao = `${valorUltimaPosicao}.`;
        this.ultimaPosicao = valorUltimaPosicao;
    }
    get ultimaPosicao() {
        return this.operacao.length ?
            this.operacao[this.operacao.length - 1] : "0";
    }
    set ultimaPosicao(valor) {
        const ultimoIndex = this.operacao.length ?
            this.operacao.length - 1 : 0;
        this.operacao[ultimoIndex] = valor;
    }
    get length() {
        return this.operacao.length;
    }
}
export default Operacao;
//# sourceMappingURL=Operacao.js.map