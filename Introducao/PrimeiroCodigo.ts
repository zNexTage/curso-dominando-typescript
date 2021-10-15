const text: string = "Hello World! Esse não é meu primeiro código TypeScript";
console.log(text);

class Produto {
    name: string;
    price: number;

    constructor({ name, price }: { name: string, price: number }) {
        this.name = name;
        this.price = price;
    }
}

const play = new Produto({ name: 'Play', price: 5000 });

