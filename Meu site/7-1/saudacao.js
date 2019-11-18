d = new Date();
hour = d.getHours();

if(hour < 6){
    document.write("Boa noite");
}

else if(hour < 8){
    document.write("Bom dia");
}

else if(hour < 12){
    document.write("Bom dia");
}

else if(hour < 18){
    document.write("Boa tarde");
}

else{
    document.write("Boa noite");
}