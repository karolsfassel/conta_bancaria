import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import{ContaController} from './src/controller/ContaController';

export function main(){

     //instancia da classe ContaController
  let contas: ContaController = new ContaController();

console.log("\nCriar Contas\n");

let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
contas.cadastrar(cc1);

let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
contas.cadastrar(cc2);

let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
contas.cadastrar(cp1);

let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
contas.cadastrar(cp2);

contas.listarTodas();
    

  

  //variaveis auxiliares
  let opcao,numero,agencia,tipo,saldo,limite,aniversario:number;
  let titular: string;
  const tiposContas=['conta corrente','conta poupanca'];
  
  
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    while(true){
        console.log(colors.bg.black, colors.fg.yellow,"****************************************************");
        console.log("                                                    ");
        console.log("              BANCO DO BRAZIL COM Z                 ");
        console.log("                                                    ");
        console.log("****************************************************");
        console.log("                                                    ");
        console.log("              1 - Criar Conta                       ");
        console.log("              2 - Listar todas as Contas            ");
        console.log("              3 - Buscar Conta por Numero           ");
        console.log("              4 - Atualizar Dados da Conta          ");
        console.log("              5 - Apagar Conta                      ");
        console.log("              6 - Sacar                             ");
        console.log("              7 - Depositar                         ");
        console.log("              8 - Transferir valores entre Contas   ");
        console.log("              9 - Sair                              ");
        console.log("                                                    ");
        console.log("****************************************************");
        console.log("                                                    ",
        colors.reset);
       

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao ==9){
            console.log(colors.fg.greenstrong,"\nBanco do Brazil com Z - O seu futuro começa aqui!");
            sobre();
        console.log(colors.reset,"");
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log(colors.fg.whitestrong,"\n\nCriar conta\n\n", colors.reset);

                console.log("Digite o numero da agencia: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o nome do titular da conta: ");
                titular = readlinesync.question("");

                console.log("\nDigite o tipo da conta: ");
                tipo = readlinesync.keyInSelect(tiposContas,"", {cancel:false})+1;

                console.log("Digite o saldo da conta: ");
                saldo = readlinesync.questionFloat("");

                switch(tipo){
                    case 1: 
                    console.log("Digite o limite da conta (R$): ");
                    limite = readlinesync.questionFloat("");
                    contas.cadastrar(
                         new ContaCorrente(contas.gerarNumero(),agencia,tipo,titular,saldo,limite));
                    break;
               case 2:
                    console.log("Digite o dia do aniversario da conta poupanca: ");
               aniversario = readlinesync.questionInt("");
          contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia,tipo,titular,saldo,aniversario));
     break;
       }
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todas as contas\n\n", colors.reset);
                contas.listarTodas();

                keyPress()
                break;
            case 3:
                 console.log(colors.fg.whitestrong,"\n\nConsultar dados da conta - por numero\n\n", colors.reset);
                 console.log("Digite o numero da conta: ");
                 numero = readlinesync.questionInt("");
                 contas.procurarPorNumero(numero);
                 

                 keyPress()
                 break;
            case 4:
                 console.log(colors.fg.whitestrong,"\n\nAtualizar dados da conta\n\n", colors.reset); 
                 
                 console.log("digite o numero da conta: ");
                 numero = readlinesync.questionInt("");

                 let conta = contas.buscarNoArray(numero);

                 if(conta !=null){

                    console.log("digite o numero da agencia: ");
                    agencia = readlinesync.questionInt("");

                    console.log("digite o nome do titular da conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("digite o saldo da conta (R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch(tipo){
                         case 1:
                              console.log("digite o limite da conta (R$): ");
                              limite = readlinesync.questionFloat("");
                              contas.atualizar( new ContaCorrente(numero,agencia,tipo,titular,saldo,limite));
                              break;
                         case 2:
                              console.log("digite o dia do aniversario da conta poupança: ");
                              aniversario = readlinesync.questionInt("");
                              contas.atualizar(new ContaPoupanca(numero,agencia,tipo,titular,saldo,aniversario));
                              break;     
                    }
                 } else{
                    console.log(colors.fg.red, "\nA conta numero: " + numero + "nao foi encontrada!", colors.reset);
                 }


                 
                 keyPress()
                 break;
            case 5:
                 console.log(colors.fg.whitestrong,"\n\nApagar uma conta\n\n", colors.reset); 
                 console.log("digite o numero da conta: ");
                 numero = readlinesync.questionInt("");
                 contas.deletar(numero);

                 keyPress()
                 break;
            case 6:
                 console.log(colors.fg.whitestrong,"\n\nSaque\n\n", colors.reset);  
                 keyPress()
                 break;
            case 7:
                 console.log(colors.fg.whitestrong,"\n\nDeposito\n\n", colors.reset);   
                 keyPress()
                 break;
            case 8:
                 console.log("\n\nTranferencia entre contas\n\n", colors.reset);    
                 keyPress()
                 break;
            default:
                 console.log(colors.fg.whitestrong,"\n\nOpcao invalida!\n\n", colors.reset);  
                
                 keyPress()
                 break;
        }

    }
}

function sobre(): void{
     console.log("\n****************************************************");
     console.log("Projeto Desenvolvido por: ");
     console.log("Karoline - karolinef@genstudents.org");
     console.log("github.com/karolsfassel");
     console.log("\n****************************************************");
}

main();


function keyPress():void{
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
    
}
