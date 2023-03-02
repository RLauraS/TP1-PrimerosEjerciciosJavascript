/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)*/
let num = parseInt(prompt("Ingrese un número"));
if(num%2===0||num%3===0 ||num%5===0||num%7===0 ){

if (num % 2 === 0) {
  document.write("Sipi! El numero es divisible por 2. ");
}
if (num % 3 === 0) {
  document.write("Sipi! El numero es divisible por 3. ");
}
if (num % 5 === 0) {
  document.write("Sipi! El numero es divisible por 5. ");
}
if(num % 7 === 0)
  document.write("Sipi! El numero es divisible por 7. ");
} else {
  document.write(
    "Oops, el número que ingresaste no es divisible por 2, 3,5 ni 7 :("
  );
}
