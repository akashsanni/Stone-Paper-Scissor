const playBtn = document.querySelector('#play-btn')
const result =document.querySelector('.result')

let hands = ["Rock", "Paper", "Scissor"]

function randomHands(){
    
    let randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];

 };

const randomP1 = document.querySelector('.random-p1')
const randomP2 = document.querySelector('.random-p2')
const start1 = document.querySelector('.start1')
const start2 = document.querySelector('.start2')

const imgBtns = document.querySelectorAll('.img-btns')
const img = document.querySelector('.img')

imgBtns.forEach((imgBtns)=>{
imgBtns.addEventListener('click',function(e){
    
    const target = e.currentTarget.dataset.id;
    console.log(target)
    target.innerText = 'Play Again'
    start1.style.visibility = "visible"
    start2.style.visibility = "visible"
    let player1Hand = randomHands();//CPU
    let player2Hand = target;//YOU
    // console.log(player2Hand)
    const again = document.querySelector('.again')
    const score = document.querySelector('.score')
    

    if(player1Hand === player2Hand){
        result.innerHTML = "Draw!"
        randomP1.innerHTML = player1Hand
        
        // randomP2.innerHTML = player2Hand
        
    }else if(player1Hand === 'Rock' && player2Hand === 'Paper'){
        result.innerHTML = "YOU Wins"
        randomP1.innerHTML = player1Hand
        
        // randomP2.innerHTML = player2Hand
         
    }else if(player1Hand === 'Paper' && player2Hand === 'Scissor'){
        result.innerHTML = "YOU Wins"
        randomP1.innerHTML = player1Hand
        
        // randomP2.innerHTML = player2Hand

    }else if(player1Hand === 'Scissor' && player2Hand === 'Rock'){
        result.innerHTML = "YOU Wins"
        randomP1.innerHTML = player1Hand
        // randomP2.innerHTML = player2Hand
        

    }else if(player1Hand === 'Paper' && player2Hand === 'Rock'){
        result.innerHTML = "CPU Wins" 
        randomP1.innerHTML = player1Hand
        // randomP2.innerHTML = player2Hand
        

    }else if(player1Hand === 'Scissor' && player2Hand === 'Paper'){
        result.innerHTML = "CPU Wins"
        randomP1.innerHTML = player1Hand
        // randomP2.innerHTML = player2Hand
        

    }else if(player1Hand === 'Rock' && player2Hand === 'Scissor'){
        result.innerHTML = "CPU Wins"
        randomP1.innerHTML = player1Hand
        // randomP2.innerHTML = player2Hand
        

    }

    again.innerText = 'Play Again!'
    
});
});