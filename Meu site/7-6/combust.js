function calcular(){
    var etanol = parseFloat(document.getElementById('etanol').value.replace(",","."));
    var gasolina = parseFloat(document.getElementById('gasolina').value.replace(",","."));

    if (etanol < 0.7 * gasolina) {
        document.getElementById('status').innerHTML = ("O mais vantajoso é etanol");
    }
    else{
        document.getElementById('status').innerHTML = ("O mais vantajoso é gasolina");
    }
}