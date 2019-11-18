function calcular(){

    var formulario = document.getElementById("formulario");	
    			
    var kilos  		= +formulario.kilos.value;
    var metros 		= +formulario.metros.value;
    var centimetros = +formulario.centimetros.value;
    		
    var altura = (metros * 100 + centimetros) / 100;

    var imc = kilos / (altura * altura);
    		
    formulario.imc.value = imc.toFixed(2);
    		
    if(imc < 16.9){
        document.getElementById('status').innerHTML = ("Muito abaixo do peso");
    }
    else if(imc > 17 && imc <= 18.4){
        document.getElementById('status').innerHTML = ("Abaixo do peso");
    }
    else if(imc > 18.5 && imc <= 24.9){
        document.getElementById('status').innerHTML = ("Peso normal");
    }
    else if(imc > 25 && imc <= 29.9){
        document.getElementById('status').innerHTML = ("Acima do peso");
    }
    else if(imc > 30 && imc <= 34.9){
        document.getElementById('status').innerHTML = ("Obesidade Grau I");
    }
    else if(imc > 35 && imc <= 40){
        document.getElementById('status').innerHTML = ("Obesidade Grau II");
    }
    else{
        document.getElementById('status').innerHTML = ("Obesidade Grau III");
    }
}