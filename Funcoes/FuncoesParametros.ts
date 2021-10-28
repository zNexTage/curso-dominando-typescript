const enviarEmail = (para: string, assunto: string = "Sem assunto", remetente?: string): void => {
    console.log({para, assunto, remetente});
}

enviarEmail('christian');
enviarEmail('christian', 'Assunto Legal');
enviarEmail('christian', 'Assunto Legal', 'remetente legal');