
var dimnesion=document.getElementsByClassName("combo").length;
 var cantidad=0;
 function inicio(){
 ajustar();
 sonidoFondo();
 
 }

 
 function ajustar(){
  var alto=$(window).height();
  var ancho=$(window).width();

   var tamanio= ancho/45;

    $(".tabla").css("left","3%");
    $(".tabla").css("top","30%");

    $(".tabla th").css("width",""+tamanio*10+"px");
    $(".tabla th").css("height",""+tamanio/1.2+"px");

    $(".tabla td").css("height",""+tamanio/1.2+"px");
     $(".tabla td").css("width",""+(tamanio*10)+"px");

     $("#consigna").css("fontSize",""+(tamanio*1.2)+"px");
    //$(".tabla").css("font-size",""+(tamanio/1.1)+"px");
     var vsubI= document.getElementsByClassName("subindice");
     for(var j=0; j<vsubI.length; j++){
      vsubI[j].style.fontSize=""+tamanio*0.5+"pt";
     }
     var voption=document.getElementsByTagName("option");
     var vtd=document.getElementsByTagName("td");
     var vselect= document.getElementsByClassName("combo");
    

      $( "td" ).css( "fontSize", ""+(tamanio)+"px" );
    //  $( "select" ).css( "fontSize", ""+(tamanio*0.87)+"px" );

      $( "option" ).css( "fontSize", ""+tamanio+"px" );
      //$( "select" ).css( "height", ""+tamanio+"px");
       
       $( ".combo" ).css( "fontSize", ""+tamanio+"px" );
      

      $( "select" ).css( "textAlign", "center" );
      $( "option" ).css( "textAlign", "center" );

 }


 function selecionado(e){
  var elemento=e.target.id;
  var obj=document.getElementById(elemento); 
   
  if(obj.value=="1"){
  pintarBien(obj);
   deshabilitar(elemento);
    
  
  cantidad++;
  }else{
  pintarMal(obj);
  }  
   console.log(cantidad);
  if(cantidad==dimnesion){
    pasarsiguiente();
  }
}
function deshabilitar(id){
  document.getElementById(id).disabled=true;
  document.getElementById(id).style.cursor="default";

}


function pasarsiguiente(){
  setTimeout(function(){  window.location="fin.html";  },1000);
}

function pintarBien(ob){
 ob.style.backgroundColor="#40C950";
  
 sonidoBien();
}
function pintarMal(ob){
ob.style.backgroundColor="#FB2F65";
sonidoMal();
}


 
function sonidoBien(){
  var audio = document.createElement("audio");
 
    audio.src = "sonido/bien.wav";
    audio.play();
}

function sonidoMal(){
  var audio = document.createElement("audio");
 
    audio.src = "sonido/mal.wav";
    audio.play();
}

   
function sonidoFondo(){
  var audio = document.createElement("audio");
 
    audio.src = "sonido/sonidoF.mp3";
    audio.play();
}