let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
let randomIndexOne = Math.floor(Math.random()*fighters.length);
let randomIndexTwo = Math.floor(Math.random()*fighters.length);
let fighterOne = document.querySelector(".fighterOne");
let fighterTwo = document.querySelector(".fighterTwo");
let fightButton = document.querySelector(".generate");
let fight = document.querySelector(".fight");
let randomWinner = Math.floor(Math.random()*2);
let oneWinner = document.querySelector(".oneWinner");
let twoWinner = document.querySelector(".twoWinner");
let tie = document.querySelector(".tie");
let hasChose = false;
let round = [];

fightButton.addEventListener("click",function() {
    oneWinner.textContent = " ";
    twoWinner.textContent = " ";
    hasChose = true;
    randomIndexOne = Math.floor(Math.random()*fighters.length);
    randomIndexTwo = Math.floor(Math.random()*fighters.length);
    fighterOne.textContent = fighters[randomIndexOne];
    fighterTwo.textContent = fighters[randomIndexTwo];
    tie.textContent = " ";
    
}
)
fight.addEventListener("click", function(){
    randomWinner = Math.floor(Math.random()*2);
    if(randomIndexOne === randomIndexTwo){
        tie.textContent = "Tie!";
        return;
    }
    if(hasChose){
    if(randomWinner === 0) {
        oneWinner.textContent = "Winner!";
    }
    else(twoWinner.textContent = "Winner!");
}
})
