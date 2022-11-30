/**
* @index Reto:Piedra papel o tijera*
* @author Dmos
* @version 0.1
*/

/**
* Logica del Juego 
* Ninguna opcion (0)
* La piedra (1) gana a las tijeras porque las rompe.
* El papel  (2) gana a la piedra porque la envuelve.
* La tijera (3) gana al papel porque le puede cortar. 
* @param {String} choice Opcion Jugador1
* @returns {String} Resultado= Jugador2(cpu)+Ganador+Texto descriptivo
*/
function  game(choice)
{
  var rta = "Gano!!!!!";
  var cpu = Math.floor((Math.random() * 3) + 1);
  var win = choice;
  
  if(choice == 0)
  {
    rta = "Escoja jugador!!!";
    win = 0;
    cpu = 0;
  }
  else
  if(choice == cpu)
  {
    rta = "Empate!!!";
    win = 0;
  }
  else
  if((cpu == 1 && choice == 3)||(cpu == 2 && choice == 1 )||(cpu == 3 && choice == 2))
  {
    rta = "Perdio. Intentalo de nuevo...";
    win = cpu;
  }
  return(cpu+"-"+win+"-"+rta);

}
/**
* Cambia la imagen de un elemento 
* @param {String} id Identificador del img
* @param {String} val Valor a colocar en atributo src
*/
function setImage(id,val){ 
    var x = document.getElementById(id);
    x.setAttribute("src","./images/"+ val);
} 
/**
* Evento click Boton
* @param {String} val Opcion seleccionada
*/
function ejecutaEventoOnclick(val){ 
    var rta = game(val).split("-");    
    (rta[1] == val)?setImage("Player1",val+"G.png"):setImage("Player1",val+"R.png");
    (rta[1] == rta[0] )?setImage("Player2",rta[0]+"G.png"):setImage("Player2",rta[0]+"R.png");
    setImage("Win",rta[1]+"W.png");
    document.getElementById('myLabel').innerHTML= rta[2];
    document.getElementById("checkbox1").value = val;
} 
