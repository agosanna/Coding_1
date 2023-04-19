let slide_corrente = 1; //1 -> 5

function current_slide() {
  let slides = document.getElementsByClassName('slide');    //le immagini appartengono tutte alla classe slides
  let obj_prev = document.getElementById('prev');           //dichiariamo le variabili che pui useremo di seguito
  let obj_next = document.getElementById('next');

  for (i = 0; i < slides.length; i++) {                   //ciclo iterativo che prende tutte le immagini facendole scomparire
    slides[i].style.display = "none";
  }
  obj_prev.style.display = 'block';                      //le frecce restano visibili
  obj_next.style.display = 'block';

  slides[slide_corrente-1].style.display = "block";     //mostra solo la prima immagine

}

current_slide();                                       //richiamo la funzione in modo che si esegua

function torna_indietro(){
  slide_corrente = slide_corrente - 1;                      //vado indietro di una slide
  let slides = document.getElementsByClassName('slide');
  if (slide_corrente < 1) slide_corrente = slides.length;  //condizione in cui se torno piu indietro della prima slide riparto dall'ultima
  current_slide();                                         //e infine richiamo la funzione current slide
}

function vai_avanti(){
  slide_corrente = slide_corrente + 1;
  let slides = document.getElementsByClassName('slide');
  if (slide_corrente > slides.length) slide_corrente = 1;
  current_slide();
}