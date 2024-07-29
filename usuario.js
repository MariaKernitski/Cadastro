const prompt = require("prompt-sync")();

const usuários = [];

let ultimoID = 1;

const emailValido = email => {
    let valido = true;

    usuários.forEach(usuario => {
        if(email == usuario.email) {
            valido = false;
            console.log("E-mail duplicado.");
        }
    })

    return valido && email != "" && email.includes("@");
}

const modelo = (id) => {
    const nome = prompt("Digite o nome do usuário: ");
    const email = prompt("Digite o e-mail do usuário: ");
    const telefones = [];

    while(true) {
        const telefone = prompt("Digite o número de telefone do usuário, ou digite 'sair' para encerrar: ");
            if (telefone == "sair") {
                break;
            }
            telefones.push(telefone);
    }

    if(nome != "" && telefones.length > 0 && emailValido(email)) {

        let usuario = {};
        if(id != undefined) {
            usuario = {
                nome, 
                email, 
                telefones, 
                id,
            };
            return usuario;
        }
        else { 
            usuario = {
                nome, 
                email, 
                telefones, 
                id: ultimoID,
            };
        }

        ultimoID++;

        return usuario;
    }
    else {
        console.log("Os dados inseridos são inválidos.")
    }
}

const criar = () => {

    const usuario = modelo();

    if(usuario != undefined) {
        usuários.push(usuario);
        console.log("Usuário adicionado com sucesso!");
    }

}

const listar = () => {

    usuários.forEach(usuario => {
        console.log(`
        ID: ${usuario.id}
        Nome: ${usuario.nome}
        E-mail: ${usuario.email}
        Telefones: ${usuario.telefones} 
        `);

        /*
        usuários.telefones.forEach((telefone, indice) => {
            console.log(`Telefone: ${indice + 1}: ${telefone}`);
        })
        */
    })

}

const atualizar = () => {
    listar();

    const id = prompt("Digite o ID que deseja atualizar: ");

    const novo = modelo(id);

    usuários.forEach((usuario, indice) => {
        if(id == usuario.id) {
            usuários[indice] = novo;
            console.log("Usuário atualizado com sucesso!");
        }
    })
}

const remover = () => {
    listar();

    const id = prompt("Digite o ID que deseja remover: ");

    usuários.forEach((usuario, indice) => {
        if(id == usuario.id) {
            const confirma = prompt("Deseja realmente remover? ");
            if (confirma == "sim") {
            usuários.splice(indice, 1);
            console.log("Usuário removido com sucesso!")
            }
        }
    })
}

module.exports = {
    criar,
    listar,
    atualizar,
    remover
}