let slide_corrente = 1; //1 -> 5

function current_slide() {
  let slides = document.getElementsByClassName('slide');   
  let obj_prev = document.getElementById('prev');         
  let obj_next = document.getElementById('next');

  for (i = 0; i < slides.length; i++) {                   
    slides[i].style.display = "none";
  }
  obj_prev.style.display = 'block';                    
  obj_next.style.display = 'block';

  slides[slide_corrente-1].style.display = "block";     
}

current_slide();                                      

function torna_indietro(){
  slide_corrente = slide_corrente - 1;                     
  let slides = document.getElementsByClassName('slide');
  if (slide_corrente < 1) slide_corrente = slides.length;  
  current_slide();                                         
}

function vai_avanti(){
  slide_corrente = slide_corrente + 1;
  let slides = document.getElementsByClassName('slide');
  if (slide_corrente > slides.length) slide_corrente = 1;
  current_slide();
}