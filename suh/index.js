let spaceshipName = prompt("Digite o nome da nave") //Recebe o nome da nave
let spaceshipVelocity = 0 //Declara a variável naveVelocidade
let chosenOption //Declara a variável opcaoEscolhida
function showMenu() { //cria a função mostrarMenu
    let option  //decalra a variável opcao
    while(option != "1" && option != "2" && option != "3" && option != "4") { //laço, enquanto opcao for diferente de 1,2,3,4
        option = prompt("O que deseja fazer?\n" + //opcao continua recebendo as opções desta lista
                        "1- Acelerar a nave em 5km/s\n" + // \n pula linha
                        "2- Desacelerar a nave em 5km/s\n" +
                        "3- Imprimir dados de bordo\n" +
                        "4- Sair de programa")
    }
    return option //retorna o valor de opcao

    //testar para a turma usando console.log(mostrarMenu()), deve retornar o valor da lista quando pressionado
}

//pular para a exemplificação com o Do While, mostrar opcaoEscolhida recebendo mostrarMenu

function speedUp(velocity) {  //função acelerar, recebe como parâmetro velocidade
    let newVelocity = velocity + 5 //declara a variável novaVelocidade que recebe velocidade e ++ 5
    return newVelocity // retorna valor da velocidade atualizado
}
function slowDown(velocity) { //função desacelerar, recebe como parâmetro velocidade
    let newVelocity = velocity - 5 //declara a variável novaVelocidade que recebe velocidade e -- 5
    if(newVelocity < 0) { // se o valor for menor que zero, a variável recebe zero
        newVelocity = 0
    }
    return newVelocity //retorna valor da velocidade atualizado
}
function printSpaceshipBoardData(name, velocity) { //função dadosDeBordo, recebe como parâmetros nome e velocidade
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "km/s") //exibe a mensagem com o nome e a velocidade atual
}
do { //inicia laçõ de repetição
    chosenOption = showMenu() // chama a função mostrarMenu
    switch(chosenOption) {  //inicia segundo laço de repetição, opcaoEscolhida é o parâmetro
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break
        case "3":
            printSpaceshipBoardData(spaceshipName, spaceshipVelocity)
            break
        default:
            alert("Encerrando programa de bordo")
    }
} while(chosenOption != "4") //executa enquanto a opcaoEscolhida for diferente de 4