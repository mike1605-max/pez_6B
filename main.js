canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


//Define el ancho y alto de la imagen del explorador.






background_image = "barco.jpeg";


pez_image = "pez.jpeg";


pez_x = 10;
pez_y = 10;


//Crea la función "add()"
 function add(){
background_imaTag = new Image ();    //Define la variable con una nueva imagen
background_imaTag.onload= uploadBackground;  // Define una función para cargar esta variable
background_imaTag.src=background_image;  // Carga la imagen

pez_imgTag=new Image ();  //Define la variable con una nueva imagen
pez_imgTag.onload = uploadpez;  // Define una función para cargar esta variable
pez_imgTag.src=pez_image;   // Carga la imagen
 }
                                         
//Crea una función "uploadBackground()".
 function uploadBackground (){
    ctx.drawImage(background_imaTag,0,0, canvas.width, canvas.height );  //Dibuja la imagen del explorador
 }                            
                                        


//Crea una función "uploadrover()".
function uploadpez(){
    ctx.drawImage(pez_imgTag, pez_x, pez_y, 100,90);  //Dibuja la imagen del explorador
}

window.addEventListener("keydown", my_keydown  );
function my_keydown(e)
{

    keyPressed = e.keyCode;
    console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
       window.addEventListener("Keydown",my_keydown);
       function my_keydown(e)   
       {
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if (keyPressed == '38')
        {
            up();
        }
        if (keyPressed== '40')
        {
            down();
        }
        if(keyPressed == '37')
        {
            left();
        }
        if(keyPressed == '39')
        {
            right();
        }
       }


}



function up()
{
     if(pez_y >=0)
     {
        console.log("hola",pez_y);
        pez_y = pez_y + 10;
        uploadBackground();
        uploadpez();
     }

}
function down()
{
 if(pez_y <=500)
    {
        console.log("hola",pez_y);
        pez_y = pez_y +10;
        uploadBackground();
        uploadpez();
    }  
}
function right()
{
    if(pez_x <=700)
        {
           pez_x = pez_x +10;
           uploadBackground();
           uploadpez();
        }
   
}
function left(){
    if(pez_x >=0)
        {
           pez_x = pez_x -10;
           uploadBackground();
           uploadpez();
        }
   
   
}


