function shuffler() {
  var l = Math.floor(Math.random()*7)+1; // for the left dice
  var r = Math.floor(Math.random()*7)+1; // for the right dice

  if(l == 0 || l>6) {
    l = 1;
  }
  if(r == 0 || r>6) {
    r = 1;
  }

  if( l > r){
    document.querySelector('h3').innerText = 'Player 2 wins!';
    document.querySelector('.name1').classList.remove("winner");
    document.querySelector('.name2').classList.remove("losser");
    document.querySelector('.name2').classList.add("winner");
    document.querySelector('.name1').classList.add("losser");
  }
  else if ( l == r ) {
    document.querySelector('h3').innerText = 'Its a Draw!';
    document.querySelector('.name1').classList.remove("losser");
    document.querySelector('.name2').classList.remove("losser");
    document.querySelector('.name2').classList.add("winner");
    document.querySelector('.name1').classList.add("winner");
  }
  else if ( l < r ) {
    document.querySelector('h3').innerText = 'Player 1 wins!';
    document.querySelector('.name2').classList.remove("winner");
    document.querySelector('.name1').classList.remove("losser");
    document.querySelector('.name1').classList.add("winner");
    document.querySelector('.name2').classList.add("losser");
  }
  document.querySelector('.the_diceL').src = "dice_"+l+".jpg";
  document.querySelector('.the_diceR').src = "dice_"+r+".jpg";

}
