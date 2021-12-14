/**
 * 
 * @param target "Alvo"
 * @param propertyKey Captura o nome do método
 * @param descriptor Objeto contendo: 
 * value -> Contém o método
 * writable -> Opção que indica se permite escrita
 * enumerable ->Opção que indica se permite enumerar
 * configurable -> Opção que indica se permite reconfiguração
 */
const decoratorMetodo = (
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor) => {

    console.log({
        target,
        propertyKey,
        descriptor
    });

    descriptor.value = (...args: unknown[]) => { //Sobrescreve o método
        return args.map(item => (<string>item).toUpperCase());
    }
}


class TratarMensagem {
    @decoratorMetodo
    dizerMensagem(...mensagens: string[]) {
        return mensagens;
    }
}

const instancia = new TratarMensagem();

console.log(instancia.dizerMensagem('Olá', 'Seja', 'Bem', 'Vindo'));

