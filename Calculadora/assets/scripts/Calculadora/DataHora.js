class DataHora {
    constructor(elementoData = document.querySelector('#datetime > div:nth-child(2)'), elementoHora = document.querySelector('#datetime time')) {
        this.elementoData = elementoData;
        this.elementoHora = elementoHora;
        this.renderizar();
        setInterval(() => { this.renderizar(); }, 1000);
    }
    renderizar() {
        const dataAtual = new Date();
        const data = this.obterData(dataAtual);
        const hora = this.obterHora(dataAtual);
        this.data = data;
        this.hora = hora;
    }
    set data(valor) {
        if (this.elementoData) {
            this.elementoData.innerHTML = valor;
        }
    }
    set hora(valor) {
        if (this.elementoHora) {
            this.elementoHora.innerHTML = valor;
        }
    }
    obterData(data) {
        const dia = data.getDate();
        const mes = data.toLocaleDateString("pt-BR", {
            month: "long"
        });
        const ano = data.getFullYear();
        return `${dia} ${mes} ${ano}`;
    }
    obterHora(data) {
        const hora = data.getHours();
        const minuto = data.getMinutes().toString().padStart(2, '0');
        const doisPontos = data.getSeconds() % 2 === 0 ? ":" : " ";
        return `${hora}${doisPontos}${minuto}`;
    }
}
export default DataHora;
//# sourceMappingURL=DataHora.js.map