function insert(numeroDigitado) {
    let numero = document.getElementById('visorDaCalculadora').innerHTML;
    document.getElementById('visorDaCalculadora').innerHTML = numero + numeroDigitado;
}

function deletar() {
    let resultado = document.getElementById('visorDaCalculadora').innerHTML;
    document.getElementById('visorDaCalculadora').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcularResultado() {
    let resultado = document.getElementById('visorDaCalculadora').innerHTML;

    if(resultado){
        document.getElementById('visorDaCalculadora').innerHTML = eval(resultado)
    } else {
        document.getElementById('visorDaCalculadora').innerHTML = "Erro"
    }
}


function limpar() {
    document.getElementById('visorDaCalculadora').innerHTML = '';
}