interface IUser {
    nome: string;
    email: string;
    telefone: string;
    idAndroid?: string;
}

abstract class Notificacao {
    abstract enviar(usuario: IUser): boolean;
}

class Email extends Notificacao {
    enviar(usuario: IUser): boolean {
        console.log(`Enviando email para o usuário ${usuario.email} ...`);

        return true;
    }
}

class Sms extends Notificacao {
    enviar(usuario: IUser): boolean {
        console.log(`Enviando sms para o usuário ${usuario.telefone} ...`);

        return true;
    }
}

class Android extends Notificacao {
    enviar(usuario: IUser): boolean {
        console.log(`Enviando mensagem para no Android ${usuario.idAndroid} ...`);

        return true;
    }
}

new Email().enviar({
    nome: 'João',
    email: 'joão@email.com',
    telefone: '11912344321'
});

new Sms().enviar({
    nome: 'João',
    email: 'joão@email.com',
    telefone: '11912344321'
});

new Android().enviar({
    nome: 'João',
    email: 'joão@email.com',
    telefone: '11912344321',
    idAndroid: '123'
});