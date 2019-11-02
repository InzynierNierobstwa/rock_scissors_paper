document.addEventListener("DOMContentLoaded", function(){
    const paper = document.querySelector(".container__image1");
    const rock = document.querySelector(".container__image2");
    const scissors = document.querySelector(".container__image3");

    const Ainumber = document.querySelector(".container__points--person");
    const PlayerNumber = document.querySelector(".container__points--ai");

    const mainBox = document.querySelector(".container");

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

    const gameOptions = {
        win: function(){
            PlayerPoints += 1
            gameComment("wygrałeś!");
            PlayerNumber.innerHTML = PlayerPoints;
            gameEnd(AiPoints, PlayerPoints);
            console.log("wygrales", PlayerPoints);
        },
        lose: function(){
            AiPoints += 1;
            gameComment("przegrałeś!");
            Ainumber.innerHTML = AiPoints;
            gameEnd(AiPoints, PlayerPoints);
            console.log("przegrałeś", AiPoints);
        },
        draw: function(){
            gameComment("remis!");
            gameEnd(AiPoints, PlayerPoints);
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

    function gameEnd(outcomeAi, outcomePlayer){
        if(outcomeAi >= 5){
            alert("komputer wygrał")
        }
        else if(outcomePlayer >= 5){
            alert("gracz wygrał");
        }
        else{
            console.log("do nothing");
        }
    }

    function gameComment(comment){
        const game = document.createElement("div");
        game.classList.add("container__comment");

        const gameBar = document.createElement("div");
        gameBar.classList.add("container__comment--bar")

        const gameDate = document.createElement("div");
        gameDate.classList.add("container__todoBar--clock");
        const date = new Date();
        const dateText = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " godz.:" + date.getHours() + ":" + date.getMinutes();
        gameDate.innerHTML = dateText;

        gameBar.appendChild(gameDate);

        const gameComment = document.createElement("div");
        gameComment.classList.add("container__comment--comment");
        gameComment.innerHTML = comment;

        game.appendChild(gameBar);
        game.appendChild(gameComment);

        mainBox.append(game);
        }
})