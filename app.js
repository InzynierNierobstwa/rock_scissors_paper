document.addEventListener("DOMContentLoaded", function(){
    const paper = document.querySelector(".container__image1");
    const rock = document.querySelector(".container__image2");
    const scissors = document.querySelector(".container__image3");

    const Ainumber = document.querySelector(".container__opponent--number");
    const PlayerNumber = document.querySelector(".container__player--number");

    const placeMessage = document.querySelector("container__opponentPlayer");

    let AiPoints = 0;
    let PlayerPoints = 0;

    paper.addEventListener("click", function(){
        console.log("papier");
        gameRule("p");

    })
    rock.addEventListener("click", function(){
        console.log("kamien");
        gameRule("r");
    })
    scissors.addEventListener("click", function(){
        console.log("nozyczki");
        gameRule("s");
    })

    function randomHand(){
        const rand = Math.floor(Math.random() * 3);
        const arrayRandom = ["p", "r", "s"];
        return arrayRandom[rand];
    }

    randomHand();

    function gameComment(){
        //tu ma być wyświetlany komunikat
        }



    const gameOptions = {
        win: function(){
            PlayerPoints += 1
            gameComment();
            PlayerNumber.innerHTML = PlayerPoints;
            console.log("wygrales", PlayerPoints);
        },
        lose: function(){
            AiPoints += 1;
            Ainumber.innerHTML = AiPoints;
            console.log("przegrałeś", AiPoints);
        },
        draw: function(){
            console.log("remis");
        }
    }

    function gameRule(userChoice){
       let AiChoice = randomHand(); 
       const outcome = AiChoice + userChoice;
       switch(outcome){
            case 'rs':
            case 'pr':
            case 'sp':
                gameOptions.win()
                break;
            case 'sr':
            case 'rp':
            case 'ps':
                gameOptions.lose();
                break;
            case 'ss':
            case 'rr':
            case 'pp':
                gameOptions.draw();
                break;
       }
    }
})