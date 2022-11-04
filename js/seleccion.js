function guardarInput (){
    let input=document.getElementById('pepito1');
    let inputt=document.getElementById('pepito2');
    
    let pepito1=input.value;
    let pepito2=inputt.value;
    
    sessionStorage.setItem('pepito1',pepito1);
    sessionStorage.setItem('pepito2',pepito2);
    
    window.location.href="index.html";
}

//como obtener el valor del session storage
function obtenerValor (){
    let pepito1=sessionStorage.getItem('pepito1');
    let pepito2=sessionStorage.getItem('pepito2');
   
    console.log(pepito1,pepito2);
}
