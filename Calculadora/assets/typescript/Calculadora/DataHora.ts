class DataHora {
    constructor(
        private elementoData: HTMLDivElement | null = document.querySelector('#datetime > div:nth-child(2)'),
        private elementoHora: HTMLTimeElement | null = document.querySelector('#datetime time')

    ) {
        this.renderizar();

        setInterval(
            () => { this.renderizar() },
            1000
        );
    }

    renderizar() {
        const dataAtual = new Date();

        const data = this.obterData(dataAtual);
        const hora = this.obterHora(dataAtual);

        this.data = data;
        this.hora = hora;
    }

    set data(valor: string) {
        if (this.elementoData) {
            this.elementoData.innerHTML = valor;
        }
    }

    set hora(valor: string) {
        if (this.elementoHora) {
            this.elementoHora.innerHTML = valor;
        }

    }

    private obterData(data: Date): string {
        const dia = data.getDate();
        const mes = data.toLocaleDateString("pt-BR", {
            month: "long"
        });
        const ano = data.getFullYear();

        return `${dia} ${mes} ${ano}`;
    }

    private obterHora(data: Date): string {
        const hora = data.getHours();
        const minuto = data.getMinutes().toString().padStart(2, '0');

        const doisPontos = data.getSeconds() % 2 === 0 ? ":" : " ";

        return `${hora}${doisPontos}${minuto}`;
    }
}

export default DataHora;