const prompt = require("prompt-sync")()
const { criar, atualizar, listar, remover} = require("./usuario.js");

console.log("Bem Vindo(a) ao cadastro de usuários!");

while(true) {
    console.log(`
    1 - Criar usuário;
    2 - Listar usuários;
    3 - Atualizar dados do usuário;
    4 - Remover usuário;
    5 - Sair.
    `)

    const opcao = prompt("Escolha uma opção: ");

    switch(opcao) {
        case "1": criar()
        break;
        case "2": listar()
        break;
        case "3": atualizar()
        break;
        case "4": remover()
        break;
        case "5": console.log("Agradecemos a preferência! Até logo!")
        process.exit();
        break;
        default: console.log("Opção inválida.")
    }
}