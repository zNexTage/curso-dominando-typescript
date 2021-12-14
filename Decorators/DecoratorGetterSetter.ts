const decoratorGetSet = (valor: boolean) => {
    return (
        target: unknown,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        descriptor.enumerable = valor;
    }
}

class Login {
    constructor(
        private _usuario: string,
        private _senha: string
    ) { }

    @decoratorGetSet(true)
    get usuario() {
        return this._usuario;
    }

    @decoratorGetSet(false)
    get senha() {
        return this._senha
    }

}

const login = new Login('teste@email.com', '123');
// console.log(login.usuario);
// console.log(login.senha);

for (const chave in login) {    
    console.log(login[chave]);
}
