
function CalcularMedia(){
    var primeiro = parseFloat(document.getElementById("primeiroBimestre").value);
    var segundo = parseFloat(document.getElementById("segundoBimestre").value);
    var terceiro = parseFloat(document.getElementById("terceiroBimestre").value);
    var quarto = parseFloat(document.getElementById("quartoBimestre").value);
    var notaFinal = (primeiro+segundo+terceiro+quarto)/4;
    var notaFixado = notaFinal.toFixed(1);
    if (notaFixado >= 7){ 
      var saidaMediaSim = document.getElementById("resultadoSaidaMedia");
      var resultadoSaidaMedia = "O Aluno esta Aprovado com média "+ notaFixado;
      saidaMediaSim.innerHTML = resultadoSaidaMedia;
    }else {
        var saidaMediaNao = document.getElementById("resultadoSaidaMedia");
        var resultadoSaidaMedia = "O Aluno foi Reprovado com média "+ notaFixado;
      saidaMediaNao.innerHTML = resultadoSaidaMedia;
      }
    }
    //toFixed usado para controlar a quantidade de casas decimais
    //parseFloat é para transformar o document (tipo: string) em (tipo: float)
    //innerHTML pega o resultado e transforma em document dentro do HTML para exibicao em tela
    //console exibir saida em console
    