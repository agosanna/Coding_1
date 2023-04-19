let slide_corrente = 1; //1 -> 5
let slides = document.getElementsByClassName('slide');

function current_slide() {
  for (i = 0; i < slides.length; i++) {                   
    slides[i].style.display = "none";
  }
  slides[slide_corrente-1].style.display = "block";     
}

current_slide();                                      

function torna_indietro(){
  slide_corrente = slide_corrente - 1;                     
  if (slide_corrente < 1) slide_corrente = slides.length;  
  current_slide();                                         
}

function vai_avanti(){
  slide_corrente = slide_corrente + 1;
  if (slide_corrente > slides.length) slide_corrente = 1;
  current_slide();
}