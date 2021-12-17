class Tela {
    constructor(
        private elemento: HTMLDivElement | null = document.querySelector('#values')
    ) {
        this.conteudo = "0";
    }

    set conteudo(valor: string) {
        if(valor.length > 12){
            valor = "ERRO";
        }

        if(this.elemento){
            this.elemento.innerHTML = valor.replace(".", ",");
        }
    }

    get conteudo(): string {
        return this.elemento ? 
        this.elemento.innerHTML : "0";
    }
}

export default Tela;