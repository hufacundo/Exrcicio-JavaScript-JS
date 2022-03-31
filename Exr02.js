function mult(){ 
    const params = arguments;
    var maior = Math.max.apply(Math, params);
    var menor = Math.min.apply(Math, params);
 
    console.log("Maior: "+maior);
    console.log("Menor: "+menor);
 }
 
 mult(5,8,6,10,1,15,23,56,48,1156,145,89,24,26)

