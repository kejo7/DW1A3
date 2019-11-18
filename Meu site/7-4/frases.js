function obterFrase (){
    var r_text = new Array ();
    r_text[0] = "Eu já tô fechado com a ousadia" + "<br />" + "Uma rebola de lado, a outra vem e joga por cima" + "<br />" + "Elas não entende, compromisso prende" + "<br />" + "Solteiro sempre tem um contatin no pente";
    r_text[1] = "Seu coração não faz tum tum" + "<br />" + "Agora ela só bate com o bumbum";
    r_text[2] = "Quer virar meu contatinho, ter o seu nome na lista" + "<br />" + "Então facilita, então facilita";
    r_text[3] = "Eu vou de combo, de Jack" + "<br />" + "Cîroc e Chandon";
    r_text[4] = "Mexe a raba, mexe a rabiola";
    r_text[5] = "E, quando eu mandar, é papum" + "<br />" + "Esse movimento que ela faz, papum";
    r_text[6] = "Olha a explosão" + "<br />" + "Quando ela bate com a bunda no chão";
    r_text[7] = "Que pena que acabou a gente" + "<br />" + "Mas já que tá com saudade";
    var i = Math.floor(8*Math.random())
    document.getElementById("sorte").innerHTML = "<p>" + r_text[i] + "</p>";
}