class Banco {
    private cofreQtd: number = 10000;

    private debitarCofre(qtdDeb: number): number | string {
        if (this.cofreQtd >= qtdDeb) {
            this.cofreQtd = this.cofreQtd - qtdDeb; 

            return this.cofreQtd;
        } else {
            return 'O cofre não possui a quantidade requisitada';
        }
    }

    protected sacarDoCaixa(qtd:number){
        return this.debitarCofre(qtd);
    }

    sacarDoCaixaEletronico(qtd:number){
        return this.debitarCofre(qtd);
    }
}

class Banco24Horas extends Banco {
    sacar(qtd:number){
        return this.sacarDoCaixa(qtd);
    }
}

const nubank = new Banco();
// nubank.sacarDoCaixaEletronico();

const banco24Horas = new Banco24Horas();
banco24Horas.sacar(2500);