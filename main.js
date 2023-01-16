const playBtn = document.querySelector('#play-btn')
const result =document.querySelector('.result')

let hands = ["rock", "paper", "scissor"]

function randomHands(){
    
    let randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
     
 };

const randomP1 = document.querySelector('.random-p1')
const randomP2 = document.querySelector('.random-p2')


playBtn.addEventListener('click',function(e){
    let target = e.target
    playBtn.innerText = 'Play Again'
    
    let player1Hand = randomHands();
    let player2Hand = randomHands();

    if(player1Hand === player2Hand){
        result.innerHTML = "Draw!"
        randomP1.innerHTML = player1Hand
        randomP2.innerHTML = player2Hand
        
    }else if(player1Hand === 'rock' && player2Hand === 'paper'){
        result.innerHTML = "Player-2 Wins"
        randomP1.innerHTML = player1Hand
        randomP2.innerHTML = player2Hand
         
    }else if(player1Hand === 'paper' && player2Hand === 'scissor'){
        result.innerHTML = "Player-2 Wins"
        randomP1.innerHTML = player1Hand
        randomP2.innerHTML = player2Hand

    }else if(player1Hand === 'scissor' && player2Hand === 'rock'){
        result.innerHTML = "Player-1 Wins"
        randomP1.innerHTML = player1Hand
        randomP2.innerHTML = player2Hand


    }else if(player1Hand === 'paper' && player2Hand === 'rock'){
        result.innerHTML = "Player-1 Wins" 
        randomP1.innerHTML = player1Hand
        randomP2.innerHTML = player2Hand


    }else if(player1Hand === 'scissor' && player2Hand === 'paper'){
        result.innerHTML = "Player-1 Wins"
        randomP1.innerHTML = player1Hand
        randomP2.innerHTML = player2Hand


    }else if(player1Hand === 'rock' && player2Hand === 'scissor'){
        result.innerHTML = "Player-2 Wins"
        randomP1.innerHTML = player1Hand
        randomP2.innerHTML = player2Hand


    }

}); 

