var counter=0;
var array_x=[];
var array_o=[];
var array_win=[];
var state=false;
var computer=false;
var check_player=false;
function set_cell(number) {
  if(computer==true){
      computer_player(number);
  }
  else{
       Human_Player(number);
  }
}
function Human_Player(number) {
    if(counter<9 && state==false && check(number)==0 && computer==false){
      if(counter%2==0){
         document.getElementById("cell"+number).innerHTML="X";
         array_x+=[number];
         counter++;
         state=check_cell(array_x ," Player 1 ");
      }
      else {
         document.getElementById("cell"+number).innerHTML="O";
         array_o+=[number];
         counter++;
         state=check_cell(array_o," Player 2 ");
      }
  }
  if (counter==9 && state==false) {
      alert("no any one win game finish play again");
      try_again();
  }
  if(counter>9 || state==true ){
      alert("game finish");
      try_again();
  }
}
function computer_player(number) {
    if(counter<9 && state==false && check(number)==0 ){
         document.getElementById("cell"+number).innerHTML="X";
         array_x+=[number];
         counter++;
         state=check_cell(array_x ," YOU !! ");
         var num= Math.floor( 1 + Math.random() * 9 );
         if (counter<9 && state==false) {
          while (check(num)==1)
          {num= Math.floor( 1 + Math.random() * 9 );}
         document.getElementById("cell"+num).innerHTML="O";
         array_o+=[num];
         counter++;
         state=check_cell(array_o," Computer ");
         }
  }
  if(counter>9 || state==true ){
      alert("game finish");
      try_again();
  }
  if (counter==9 && state==false) {
      alert("no any one win game finish play again");
      try_again();
  }
}
function check_cell(array,array_name) {
    if(array.includes("1") && array.includes("2") && array.includes("3")){
    array_win=[1,2,3];
    change_color(array_win);
    alert("The Win is : "+array_name);
    return true;
    }
    if(array.includes("1") && array.includes("4") && array.includes("7")){
    array_win=[1,4,7];
    change_color(array_win);
    alert("The Win is :"+array_name);
    return true;
    }
    if(array.includes("1") && array.includes("5") && array.includes("9")){
    array_win=[1,5,9];
    change_color(array_win);
    alert("The Win is :"+array_name);
    return true;
    }
    if(array.includes("2") && array.includes("5") && array.includes("8")){
    array_win=[2,5,8];
    change_color(array_win);
    alert("The Win is :"+array_name);
    return true;
    }
    if(array.includes("3") && array.includes("6") && array.includes("9")){
    array_win=[3,6,9];
    change_color(array_win);
    alert("The Win is :"+array_name);
    return true;
    }
    if(array.includes("4") && array.includes("5") && array.includes("6")){
    array_win=[4,5,6];
    change_color(array_win);
    alert("The Win is :"+array_name);
    return true;
    }
    if(array.includes("7") && array.includes("8") && array.includes("9")){
    array_win=[7,8,9];
    change_color(array_win);
    alert("The Win is :"+array_name);
    return true;
    }
    if(array.includes("3") && array.includes("5") && array.includes("7")){
    array_win=[3,5,7];
    change_color(array_win);
    alert("The Win is :"+array_name);
    return true;
    }
    else{
        return false;
    }
}
function change_color(array) {
    for (let index = 0; index < array.length; index++) {
        document.getElementById("cell"+array[index]).style.backgroundColor="red";
    }
}
function check(num) {
    return(array_o.includes(num)+array_x.includes(num));
}
function tip() {
    document.getElementById("tip").style.display="block";
    document.getElementById("all").style.display="block";
}
function close_tip() {
    if (check_player) {
    document.getElementById("tip").style.display="none";
    document.getElementById("all").style.display="none";
    }
    else
    document.getElementById("label_tip").innerHTML="YOU HAVE TO CHOOSE PLAYER !!!!!"
}
function choose_player(player) {
    if (player==1) {
        computer=true;
        check_player=true;
    }
    else if (player==2) {
        check_player=true;
    }
}
function try_again() {
    document.getElementById("try").style.display="block";
}