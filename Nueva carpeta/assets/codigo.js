/**
 *Codigo para transicion de loader a loader2 
 **/
window.addEventListener("load",function(){
    console.log('Entre');
    document.getElementById('loader').classList.toggle("loader2");
});

/**
 * Codigo para dar efecto de escritura a titulo
 * */
var i=0;
var txt = 'Hola, Bienvenido a mi portafolio digital';
var speed = 100; /*Velocidad*/
console.log(txt.length);
function write(){
    if(i < txt.length){
        document.getElementById('texto').innerHTML += txt.charAt(i);
        i++;
        setTimeout(write, speed);
        if(i >= 40){
            i=0;
            if(i < txt.length){
                document.getElementById('texto').innerHTML='';
                document.getElementById('texto').innerHTML += txt.charAt(i);
                i++;
            }
        }
    }
}
write();
