//Resolução Navegador; 
document.write('Resolução do navegador: '+screen.width+' x '+screen.height+' e resolução real do navegador: ');
    
//Resolução 'Real' Navegador
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    
document.write(width+' x '+height);