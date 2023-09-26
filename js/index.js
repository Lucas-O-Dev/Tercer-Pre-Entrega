let palabracorrecta = "si";


function turno(){
    let intentos = 3;
    for(let i = intentos;i>0;i--){
        let confirmacion = prompt('Confirma el turno con un "si". Tenés '+i+' intentos. ');
if(confirmacion === palabracorrecta){
alert("Gracias por reservar un turno. Estaremos en contacto con usted.")
break;
}else{
    alert("Te podes comunicar con nosotros en venecia-staff@gmail.com o entrando a nuestra pagina web www.venecia-estética.com.ar")
    
}
    }

console.log("Gracias por utilizar mi función.")
}