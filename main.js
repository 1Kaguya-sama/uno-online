
const player1 =[];
const player2 =[];
const player3 =[];
const player4 =[];
const stack = [];

const redcards = ["r0","r1","r2","r3","r4","r5","r6","r7","r8","r9"];
const bluecards = ["b0","b1","b2","b3","b4","b5","b6","b7","b8","b9"];
const greencards = ["g0","g1","g2","g3","g4","g5","g6","g7","g8","g9"];
const yellowcards = ["y0","y1","y2","y3","y4","y5","y6","y7","y8","y9"];
const allcards = [redcards, bluecards, greencards, yellowcards];


function RandomStartCard(){
    //Randomly select a card from allcards
    let randomColor = Math.floor(Math.random() * 4);
    let randomCard = Math.floor(Math.random() * 10);
    let card = allcards[randomColor][randomCard];
    stack.push(card);
}



var playercards = [];
function RandomCards(){
    //Randomly select 7 unique cards from allcards
    //Generate 7 random cards for each player
    //The cards can't be repeated
    //Generate for 4 players
    
    for (let i = 0; i < 4; i++){
        let player = [];
        for (let j = 0; j < 7; j++){
            let randomColor = Math.floor(Math.random() * 4);
            let randomCard = Math.floor(Math.random() * 10);
            let card = allcards[randomColor][randomCard];
            if (player.includes(card) || playercards.flat().includes(card)){
                j--;
            } else {
                player.push(card);
            }
        }
        playercards.push(player);
        
    }
}
RandomCards();
player1.push(playercards[0]);
player2.push(playercards[1]);
player3.push(playercards[2]);
player4.push(playercards[3]);
console.log(stack);
console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);

RandomStartCard();

function SelectCard(){
    
}



function StackCard(){
    //The selected card is added to the stack, and removed from the player's hand
    
}
