var arregloPar = [];
var arregloImp = [];

function calcularNumerosDeSuerte() {
    var numero;
    for (let index = 0; index < 50; index++) {
        numero = Math.floor((Math.random() * 100) + 1);

        if (esPar(numero)) 
        {
        agregarPar(numero);
        }
        else 
        {
        agregarImp(numero);
        }
    }
    console.log(agregarPar);
    console.log(arregloImp);
    escribiNumerosImp(); 
    document.write("<br>");
    escribiNumerosPares(); 

}

function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    return false;

}

function agregarImp(numero) 
{
   arregloImp.push(numero);
}

function agregarPar(numero) 
{
    arregloPar.push(numero);
}

function escribiNumerosPares() 
{
    document.write("arregloPar: ");
    arregloPar.forEach(element => {
        document.write(element + " ");
    });
}

function escribiNumerosImp() 
{
    document.write("arregloImp: ");
    arregloImp.forEach(element => {
        document.write(element + " ");
    });
}

