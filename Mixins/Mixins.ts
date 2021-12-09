import applyMixins from "./ApplyMixins";

class Product {
    vender(quantidade: number) {
        return `Foram vendidos ${quantidade} itens deste produto`;
    }

    comprar(quantidade: number) {
        return `Foram comprados ${quantidade} itens deste produto`;
    }
}

class Movel {
    sentar() {
        return "Você sentou no móvel";
    }

    empurrar(metros: number) {
        return `O móvel foi empurrado ${metros} metros`
    }
}


class Sofa   {
    constructor(
        public nome: string
    ) {
        
    }
}

interface Sofa extends Product, Movel{}
applyMixins(Sofa, [Product, Movel]);

const p = new Sofa('Meu sofá');

console.log(p.vender(25));
console.log(p.empurrar(25));
console.log(p.nome);



