/* 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/
let num1 = parseInt( prompt("Por favor, ingrese un numero"));
let num2 = parseInt( prompt("Por favor ingrese otro numero para comparar"));
if (num1 > num2){
    alert(num1 +' es mayor que '+ num2)
}else if(num1 < num2){
    alert(num1+' es menor que '+num2)
}else{
alert('Ambos numeros son iguales')
};