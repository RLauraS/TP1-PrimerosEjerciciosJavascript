/* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)*/
let frase = prompt("Por favor,escriba una frase o palabra");
let longitud = (frase.length);
for(let i=0;i<=longitud-1;i=i+1){
if (frase.charAt(i) === 'a'|| frase.charAt(i) ==='e'||frase.charAt(i) ==='i'||frase.charAt(i) ==='o'|| frase.charAt(i) ==='u'||frase.charAt(i) === 'A'|| frase.charAt(i)==='E'||frase.charAt(i) ==='I'||frase.charAt(i) ==='O'|| frase.charAt(i) ==='U'){
    document.write(frase.charAt(i));}
}