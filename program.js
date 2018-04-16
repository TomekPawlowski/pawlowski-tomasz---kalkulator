
function zapamietaj(znak) {                 //Funkcja zapmietujaca liczby oraz znaki

  
  document.kalkulator.wynik.value += znak;

  
}

function oblicz() {                    // funkcja obliczajaca wartosc pola input

document.kalkulator.wynik.value = eval(document.kalkulator.wynik.value);


}

function wyczysc() {                   // Funkcja czyszczaca pole input

  document.kalkulator.wynik.value = "";

}


function rysuj1(sinus){              // funkcja rysujaca wykres sinus

 var c = document.getElementById("sinus");    // przypisanie do zmiennej elementu canvas
var ctx = c.getContext("2d");                 // stworzenie obektu (?? :)) 


ctx.moveTo(0,180);                           // przesuniecie rysika to wskazanego punktu

for(x=0; x<=540; x+=1){                      // petla po wartosciach x oraz wyliczanej wartosci y
    y = 180.0 - Math.sin(x*Math.PI/180)*120;
    ctx.lineTo(x,y);                          // rysowanie linik do punktu x oraz wyliczonego punktu y
}
ctx.moveTo(0,180);                            // przesuniecie rysika do wskazanego puntku
ctx.lineTo(540,180);                          // rysowanie linik do wskazanego punktu
ctx.stroke();                                 // koniec rysowania
}

function rysuj2(cosinus){

 var c = document.getElementById("cosinus");
var ctx = c.getContext("2d");


ctx.moveTo(0,60);

for(x=0; x<=540; x+=1){
    y = 180.0 - Math.cos(x*Math.PI/180)*120;
    ctx.lineTo(x,y);
}

ctx.moveTo(0,180);
ctx.lineTo(540,180);


ctx.stroke();
}

function rysuj3(tangens){

 var c = document.getElementById("tangens");
var ctx = c.getContext("2d");


ctx.moveTo(0,180);

for(x=0; x<540; x+=1){
    y = 180.0 - Math.tan(x*Math.PI/180)*120;
    ctx.lineTo(x,y);
}
ctx.moveTo(0,180);
ctx.lineTo(540,180);

ctx.stroke();
}

function rysuj4(cotangens){

 var c = document.getElementById("cotangens");
var ctx = c.getContext("2d");


ctx.moveTo(0,180);

for(x=0; x<=540; x+=1){
    y = 180.0 - (Math.cos(x*Math.PI/180)/Math.sin(x*Math.PI/180)*120);
    ctx.lineTo(x,y);
}
ctx.moveTo(0,180);
ctx.lineTo(540,180);
ctx.stroke();
}











