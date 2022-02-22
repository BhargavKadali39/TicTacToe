
var obj1 = {'a1':null,'b1':null,'c1':null,'a2':null,'b2':null,'c2':null,'a3':null,'b3':null,'c3':null};
var r = document.getElementById('res');
var i=2;
function documentti(a){
    console.log(a);

    if(i%2==0){
        var b = document.getElementById(a);
        b.innerHTML="X";
        b.disabled = true;
        b.style.boxShadow = "inset 5px 5px 12px #041719,inset -5px -5px 12px #0e5d63";
        obj1[a]='X';
        chks();
    }
    else{
        var b = document.getElementById(a);
        b.innerHTML="O";
        b.disabled = true;
        b.style.boxShadow = "inset 5px 5px 12px #041719,inset -5px -5px 12px #0e5d63";
        obj1[a]='O';
        chks();
    }
    i=i+1;
}

function chks(){
    if(obj1.a1 == 'X' && obj1.a2 == 'X' && obj1.a3 == 'X'){
        r.innerHTML="Player X won";
        disb();
    } else if (obj1.a1 == 'O' && obj1.a2 == 'O' && obj1.a3 == 'O') {
        r.innerHTML="Player O won";
        disb();
    } else if(obj1.b1 == 'X' && obj1.b2 == 'X' && obj1.b3 == 'X'){
        r.innerHTML="Player X won";
        disb();
    } else if(obj1.b1 == 'O' && obj1.b2 == 'O' && obj1.b3 == 'O') {
        r.innerHTML="Player O won";
        disb();
    } else if (obj1.c1 == 'X' && obj1.c2 == 'X' && obj1.c3 == 'X') {
        r.innerHTML="Player X won";
        disb();
    } else if(obj1.c1 == 'O' && obj1.c2 == 'O' && obj1.c3 == 'O') {
        r.innerHTML="Player O won";
        disb();
    } else if(obj1.a1 == 'X' && obj1.b1 == 'X' && obj1.c1 == 'X') {
        r.innerHTML="Player X won";
        disb();
    } else if(obj1.a1 == 'O' && obj1.b1 == 'O' && obj1.c1 == 'O') {
        r.innerHTML="Player O won";
        disb();
    } else if(obj1.a2 == 'X' && obj1.b2 == 'X' && obj1.c2 == 'X') {
        r.innerHTML="Player X won";
        disb();
    } else if(obj1.a2 == 'O' && obj1.b2 == 'O' && obj1.c2 == 'O') {
        r.innerHTML="Player O won";
        disb();
    } else if(obj1.a3 == 'X' && obj1.b3 == 'X' && obj1.c3 == 'X') {
        r.innerHTML="Player X won";
        disb();
    } else if(obj1.a3 == 'O' && obj1.b3 == 'O' && obj1.c3 == 'O') {
        r.innerHTML="Player O won";
        disb();
    } else if(obj1.a1 == 'X' && obj1.b2 == 'X' && obj1.c3 == 'X') {
        r.innerHTML="Player X won";
        disb();
    } else if(obj1.a1 == 'O' && obj1.b2 == 'O' && obj1.c3 == 'O') {
        r.innerHTML="Player O won";
        disb();
    } else if(obj1.a3 == 'X' && obj1.b2 == 'X' && obj1.c1 == 'X') {
        r.innerHTML="Player X won";
        disb();
    } else if(obj1.a3 == 'O' && obj1.b2 == 'O' && obj1.c1 == 'O') {
        r.innerHTML="Player O won";
        disb();
    }else if (i>=10){
        r.innerHTML="TIE"
    }
}

function disb(){
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
}
