function calcular() {
    var n1 = parseInt(document.getElementById('n1').value);     //Entrada do primeiro número através da id=n1
    var n2 = parseInt(document.getElementById('n2').value);     //Entrada do segundo número através da id=n2

    document.getElementById('soma').innerHTML = ("Soma: " + (n1 + n2) + "<br />");
    document.getElementById('produto').innerHTML = ("Produto: " + (n1 * n2) + "<br />");
    document.getElementById('divisao').innerHTML = ("Divisão: " + (n1 / n2) + "<br />");    //Calculo de divisão (/)"
    document.getElementById('resto').innerHTML = ("Resto: " + (n1 % n2) + "<br >");         //Calculo do resto de uma divisão (%)
}