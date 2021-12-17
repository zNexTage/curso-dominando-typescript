import DataHora from "./DataHora.js";
import Operacao from "./Operacao.js";
import Tela from "./Tela.js";
class CalculadoraControle {
    constructor(tela = new Tela(), operacao = new Operacao({
        onCalculado: (resultado) => this.tela.conteudo = resultado
    })) {
        this.tela = tela;
        this.operacao = operacao;
        new DataHora();
        this.eventosBotoes();
    }
    eventosBotoes() {
        const botoes = document.querySelectorAll("#teclado button");
        botoes.forEach(btn => {
            btn.addEventListener('click', (evento) => {
                const target = evento.target;
                switch (target.id) {
                    case "zero":
                    case "um":
                    case "dois":
                    case "tres":
                    case "quatro":
                    case "cinco":
                    case "seis":
                    case "sete":
                    case "oito":
                    case "nove":
                        this.adicionarNumero(Number(target.dataset.valor));
                        break;
                    case "adicao":
                    case "subtracao":
                    case "divisao":
                    case "multiplicacao":
                    case "porcentagem":
                        this.adicionarOperador(target.dataset.valor);
                        break;
                    case "ponto":
                        this.adicionarPonto();
                        break;
                    case "limpar":
                        this.limpar();
                        break;
                    case "desfazer":
                        this.desfazer();
                        break;
                    case "igual":
                        this.calcular();
                        break;
                }
            });
        });
    }
    calcular() {
        this.operacao.calcular();
    }
    adicionarOperacao(valor) {
        const index = this.operacao.ultimaPosicao.indexOf(".");
        if (index === this.operacao.ultimaPosicao.length - 1) {
            this.operacao.ultimaPosicao = this.operacao.ultimaPosicao.replace(".", "");
            this.tela.conteudo = this.operacao.ultimaPosicao;
        }
        this.operacao.adicionar(valor);
    }
    adicionarNumero(numero) {
        if (isNaN(Number(this.operacao.ultimaPosicao))) {
            this.adicionarOperacao(numero.toString());
        }
        else {
            numero = Number(this.operacao.ultimaPosicao.toString() + numero.toString());
            this.operacao.ultimaPosicao = numero.toString();
        }
        this.tela.conteudo = numero.toString();
    }
    adicionarOperador(operador) {
        if (isNaN(Number(this.operacao.ultimaPosicao))) {
            this.operacao.ultimaPosicao = operador;
        }
        else {
            if (this.operacao.length === 0) {
                this.adicionarOperacao("0");
            }
            this.adicionarOperacao(operador);
        }
    }
    adicionarPonto() {
        this.operacao.adicionarPonto();
        this.tela.conteudo = this.operacao.ultimaPosicao;
    }
    desfazer() {
        const ultimaAcao = this.operacao.desfazer();
        this.tela.conteudo = ultimaAcao.toString();
    }
    limpar() {
        this.operacao.limpar();
        this.tela.conteudo = '0';
    }
}
export default CalculadoraControle;
//# sourceMappingURL=CalculadoraControle.js.map