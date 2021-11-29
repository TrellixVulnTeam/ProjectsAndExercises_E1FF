function computerPlay(){
    let options =["rock","paper","scissors"];
    let choice =Math.floor(Math.random()*3);
    console.log(options[choice]); 
    return options[choice];
}

computerPlay();

function playerSelection(){
    let options =["rock","paper","scissors"];
    const result=window.prompt("Baga aici baros");
     if(result.toLowerCase()===options[0].toLowerCase()){
        console.log(options[0]); 
        return options[0];
     }else if(result.toLowerCase()===options[1].toLowerCase()){
        console.log(options[1]); 
        return options[1];
     }else if(result.toLowerCase()===options[2].toLowerCase()){
        console.log(options[2]); 
        return options[2];
    }
}

//playerSelection("PaPer");



function round(computerPlay,playerSelection){
    if(computerPlay==playerSelection){
        console.log("Equality");
        return"Equality";
    }else if(computerPlay=="rock"&&playerSelection=="scissors"||
            computerPlay=="paper"&&playerSelection=="rock"||
            computerPlay=="scissors"&&playerSelection=="paper"){
        console.log("You lose");
        return "You lose";
    }else{
        console.log("You win");
        return "You win";
    }
}
console.log("Start fron here!!!")
//round(computerPlay(),playerSelection("Rock"));

const result=window.prompt("Baga aici baros");

function game(){
    round(computerPlay(),playerSelection());
    round(computerPlay(),playerSelection());
    round(computerPlay(),playerSelection());
    round(computerPlay(),playerSelection());
    round(computerPlay(),playerSelection());
}

game();