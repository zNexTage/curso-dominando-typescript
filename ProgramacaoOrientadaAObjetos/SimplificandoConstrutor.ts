class Pedido {
    constructor(
        private produto: string, 
        protected valorTotal: number, 
        public previsaoEntrega: Date) { //Passando o encapsulamnto (private,protected e public) os atributos são criados e os valores são passados.
        
    }
}

const meuPedido = new Pedido("TV 64 polegadas", 2000, new Date('2022-01-01'));
console.log(meuPedido);
