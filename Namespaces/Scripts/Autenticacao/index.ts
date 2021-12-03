namespace Autenticacao {
    interface IUsuario {
        email: string;
        senha: string;
    }

    interface ICadastro {
        nome: string;
        email: string;
        senha: string;
        dataNascimento: Date;
    }

    export class Autenticar {
        login(usuario: IUsuario) {
            return usuario;
        }

        registrar(novoUsuario: ICadastro) {
            return novoUsuario;
        }
    }

    export class Recuperacao {
        recuperarSenha() {
            return 'Enviando email para recuperação de senha...';
        }

        recuperarUsuario() {
            return 'Enviando email para recuperação de usuário...';
        }
    }
}