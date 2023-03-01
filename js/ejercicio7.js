/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. */
let num1 = parseInt(prompt('Ingrese un numero, por favor'));
let num2 = parseInt(prompt('Ingrese otro un numero, por favor'));
let num3 = parseInt(prompt('Ingrese el ultimo numero a comparar, por favor'));
if(num1 >= num2 && num1 >= num2){
    alert(num1+' es mayor');
}else if(num2 >= num1 && num2 >= num3){
    alert(num2+' es mayor');
}else{
    alert(num3+' es mayor');
}