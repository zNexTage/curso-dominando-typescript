interface IProcessamento<T> {
    valor: T
    realizarProcessamento(arg: T): T;
}

const proc: IProcessamento<string> = {
    valor: "hcode",
    realizarProcessamento: (arg: string): string => {
        return arg.toUpperCase();
    }
}

console.log(proc.valor);
console.log(proc.realizarProcessamento('hcode treinamentos'));

const num: IProcessamento<number> = {
    valor: 10,
    realizarProcessamento: (v: number): number => {
        return v * v;
    }
}

console.log(num.valor);
console.log(num.realizarProcessamento(num.valor));
