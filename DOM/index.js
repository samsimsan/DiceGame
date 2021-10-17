// random number generator:



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
    document.querySelector('h2').innerText = 'Player 2 wins!';
    document.querySelector('.name1').classList.remove("winner");
    document.querySelector('.name2').classList.remove("losser");
    document.querySelector('.name2').classList.add("winner");
    document.querySelector('.name1').classList.add("losser");
  }
  else if ( l == r ) {
    document.querySelector('h2').innerText = 'Its a Draw!';
    document.querySelector('.name1').classList.remove("losser");
    document.querySelector('.name2').classList.remove("losser");
    document.querySelector('.name2').classList.add("winner");
    document.querySelector('.name1').classList.add("winner");
  }
  else if ( l < r ) {
    document.querySelector('h2').innerText = 'Player 1 wins!';
    document.querySelector('.name2').classList.remove("winner");
    document.querySelector('.name1').classList.remove("losser");
    document.querySelector('.name1').classList.add("winner");
    document.querySelector('.name2').classList.add("losser");
  }
  document.querySelector('.the_diceL').firstElementChild.src = 'file:///C:/Users/Hp/Documents/web%20development/DOM/dice_'+l+'.jpg';
  document.querySelector('.the_diceR').firstElementChild.src = 'file:///C:/Users/Hp/Documents/web%20development/DOM/dice_'+r+'.jpg';

}