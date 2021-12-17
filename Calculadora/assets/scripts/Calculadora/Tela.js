class Tela {
    constructor(elemento = document.querySelector('#values')) {
        this.elemento = elemento;
        this.conteudo = "0";
    }
    set conteudo(valor) {
        if (valor.length > 12) {
            valor = "ERRO";
        }
        if (this.elemento) {
            this.elemento.innerHTML = valor.replace(".", ",");
        }
    }
    get conteudo() {
        return this.elemento ?
            this.elemento.innerHTML : "0";
    }
}
export default Tela;
//# sourceMappingURL=Tela.js.map