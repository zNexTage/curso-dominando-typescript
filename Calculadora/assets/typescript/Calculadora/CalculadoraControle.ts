import DataHora from "./DataHora.js";
import Operacao from "./Operacao.js";
import Tela from "./Tela.js";


class CalculadoraControle {
    constructor(
        private tela = new Tela(),
        private operacao = new Operacao({
            onCalculado: (resultado: string) => this.tela.conteudo = resultado
        })
    ) {
        new DataHora();
        this.eventosBotoes();
    }

    eventosBotoes(): void {
        const botoes = document.querySelectorAll("#teclado button");

        botoes.forEach(btn => {
            btn.addEventListener('click', (evento: Event) => {
                const target = <HTMLButtonElement>evento.target;

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
                        this.adicionarOperador(<string>target.dataset.valor);
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
    calcular(): void {
        this.operacao.calcular();
    }

    adicionarOperacao(valor: string): void {        
        const index = this.operacao.ultimaPosicao.indexOf(".");

        if(index === this.operacao.ultimaPosicao.length - 1){
            this.operacao.ultimaPosicao = this.operacao.ultimaPosicao.replace(".", "");

            this.tela.conteudo = this.operacao.ultimaPosicao;
        }

        this.operacao.adicionar(valor);
    }

    adicionarNumero(numero: number): void {
        if (isNaN(Number(this.operacao.ultimaPosicao))) {
            this.adicionarOperacao(numero.toString());
        }
        else {
            numero = Number(
                this.operacao.ultimaPosicao.toString() + numero.toString()
            );

            this.operacao.ultimaPosicao = numero.toString();
        }

        this.tela.conteudo = numero.toString();
    }

    adicionarOperador(operador: string): void {
        if (
            isNaN(Number(this.operacao.ultimaPosicao))
        ) {
            this.operacao.ultimaPosicao = operador;
        } else {
            if (this.operacao.length === 0) {
                this.adicionarOperacao("0");
            }

            this.adicionarOperacao(operador);
        }
    }

    adicionarPonto(): void {
        this.operacao.adicionarPonto();

        this.tela.conteudo = this.operacao.ultimaPosicao;
    }

    desfazer(): void {
        const ultimaAcao = this.operacao.desfazer();

        this.tela.conteudo = ultimaAcao.toString();
    }


    limpar(): void {
        this.operacao.limpar();

        this.tela.conteudo = '0';
    }
}

export default CalculadoraControle;