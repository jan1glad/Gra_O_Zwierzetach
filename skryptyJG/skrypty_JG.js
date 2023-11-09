let zwierzeta = ['kot', 'krowa', 'pies', 'koń'];
let zwierze = '';
let ilePytan, wynik=0;
let imie = ''; 

function przedStart() {
    document.getElementById("start").style.display = "initial";
    document.getElementById("chleb").innerHTML = "Audio i Obrazy";
    document.getElementById("img").style.display = "none";
    document.getElementById("audio").style.display = "none";
    document.getElementById("end").style.display = "none";
    //ilePytan = document.getElementById("ilePytan").value;
    document.getElementById("imieGracza").innerHTML = imie;
    document.getElementById("jakiWynik").innerHTML = wynik;
    //ilePytan = document.getElementById("ilePytan").value;
   // document.getElementById("ilePytanJeszcze").innerHTML = ilePytan;
}

function start() {
    //wynik = 0;
    imie = document.getElementById("imie").value;
    ilePytan = document.getElementById("ilePytan").value;
    ilePytan--;
    document.getElementById("ilePytanJeszcze").innerHTML = ilePytan;

    document.getElementById("start").style.display = "none";

    let coLosuje = document.getElementById("coLosuje").value;

    switch (coLosuje) {
        case "img":
            document.getElementById("img").style.display = "initial";
            document.getElementById("audio").style.display = "none";
            zwierze = getAnimal();
            document.getElementById("zwierze").src = getImg(zwierze);
            document.getElementById("zwierze").title = zwierze;
            break;
        case "audio":
            document.getElementById("img").style.display = "none";
            document.getElementById("audio").style.display = "initial";
            zwierze = getAnimal();
            document.getElementById("audioDzwiek").title = zwierze;
            document.getElementById("audioDzwiek").src = getAudio(zwierze);
            document.getElementById("audioDzwiek").load();
            break;
    }

    document.getElementById("end").style.display = "initial";

    /*document.getElementById("imieGracza").innerHTML = imie;
    document.getElementById("jakiWynik").innerHTML = wynik;
    document.getElementById("ilePytanJeszcze").innerHTML = ilePytan;
*/}

function getAnimal(){
    let n = Math.floor(Math.random()*4);
    return zwierzeta[n];
}

function getImg(zz){
    return "Img_JG\\"+zz+".jpg";
}

function getAudio(zz){
    return "Mp3_JG\\"+zz+".mp3";
}

function grajImgDzwiek(){
    
    let dzwiek = document.getElementById("wyborDzwieku").value;
    document.getElementById("imgDzwiek").src = getAudio(dzwiek);
    document.getElementById("imgDzwiek").load();
    document.getElementById("imgDzwiek").play();


    
}

function koniecGry(){
     
     document.getElementById("img").style.display = "none";
     document.getElementById("imgDzwiek").src = "";
     document.getElementById("audio").style.display = "none";
     document.getElementById("audioDzwiek").src = "";
     document.getElementById("ilePytanJeszcze").innerHTML = "0";
     document.getElementById("chleb").innerHTML = "Koniec gry";
     
}

function checkImgAudio() {
    let wyborDzwieku = document.getElementById("wyborDzwieku").value;
    let zwierze = document.getElementById("zwierze").title;
    let ilePytanJeszcze = parseInt(document.getElementById("ilePytanJeszcze").innerHTML);
    let jakiWynik = parseInt(document.getElementById("jakiWynik").innerHTML);

    if (wyborDzwieku === zwierze) {
        jakiWynik++;
    } else {
        jakiWynik--;
    }

    ilePytanJeszcze--; 

    document.getElementById("jakiWynik").innerHTML = jakiWynik;
    document.getElementById("ilePytanJeszcze").innerHTML = ilePytanJeszcze;

    if (ilePytanJeszcze === -1) {
        koniecGry();
    }else{
        zwierze = getAnimal();
            document.getElementById("zwierze").src = getImg(zwierze);
            document.getElementById("zwierze").title = zwierze;
    }
}

function checkAudioImg() {
    let wyborZwierze = document.getElementById("wyborZwierze").value;
    let audioDzwiek = document.getElementById("audioDzwiek").title;
    let ilePytanJeszcze = parseInt(document.getElementById("ilePytanJeszcze").innerHTML);
    let jakiWynik = parseInt(document.getElementById("jakiWynik").innerHTML);

    if (wyborZwierze === audioDzwiek) {
        jakiWynik++;
    } else {
        jakiWynik--;
    }

    ilePytanJeszcze--; 

    document.getElementById("jakiWynik").innerHTML = jakiWynik;
    document.getElementById("ilePytanJeszcze").innerHTML = ilePytanJeszcze;

    if (ilePytanJeszcze === -1) {
        koniecGry();
    }else{
        zwierze = getAnimal();
            document.getElementById("audioDzwiek").title = zwierze;
            document.getElementById("audioDzwiek").src = getAudio(zwierze);
            document.getElementById("audioDzwiek").load();
    }
}
