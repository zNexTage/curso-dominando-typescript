import 'reflect-metadata';

const decoratorParametros = (
    target: any,
    key: string,
    propertyKey: number
) => {
    return Reflect.getMetadata("design:paramtypes", target, key)
        .map(item => item);
}

class TratarParametros {
    metodo1(@decoratorParametros mensagem: string) {

    }

    metodo2(@decoratorParametros numero: number) {

    }
}

new TratarParametros();