interface IEmail {
    nome: string;
    email: string;
}

interface IUser {
    nome: string;
    email: string;
    telefone: string;
    idAndroid?: string;
}

interface INotificacao {
    enviar(usuario: IUser): boolean;
}

abstract class NotificacaoExemplo {
    abstract enviar(usuario: IUser): boolean;
}

class EmailNotification extends NotificacaoExemplo implements INotificacao, IEmail {
    nome: string;
    email: string;

    constructor(usuario: Omit<IUser, 'telefone' | 'idAndroid'>) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }

    enviar(): boolean {
        console.log(`Enviando email para o usuário ${this.email} ...`);

        return true;
    }
}

class SmsNotification extends NotificacaoExemplo {
    enviar(usuario: IUser): boolean {
        console.log(`Enviando sms para o usuário ${usuario.telefone} ...`);

        return true;
    }
}

class AndroidNotification extends NotificacaoExemplo {
    enviar(usuario: IUser): boolean {
        console.log(`Enviando mensagem para no Android ${usuario.idAndroid} ...`);

        return true;
    }
}

new EmailNotification({
    nome: 'João',
    email: 'joão@email.com'
}).enviar();

new SmsNotification().enviar({
    nome: 'João',
    email: 'joão@email.com',
    telefone: '11912344321'
});

new AndroidNotification().enviar({
    nome: 'João',
    email: 'joão@email.com',
    telefone: '11912344321',
    idAndroid: '123'
});