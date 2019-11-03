document.addEventListener("DOMContentLoaded", function(){
    const paper = document.querySelector(".container__image1");
    const rock = document.querySelector(".container__image2");
    const scissors = document.querySelector(".container__image3");

    const Ainumber = document.querySelector(".container__points--player");
    const PlayerNumber = document.querySelector(".container__points--ai");

    const mainBox = document.querySelector(".container");

    const gameBox = document.querySelector(".container__loseGame");
    const gameDescription = document.querySelector(".container__loseGame--comment span");

    const btnOutcome = document.querySelector(".container__button--outcomes");
    const btnRestart = document.querySelector(".container__button--restart");

    const listItem = document.getElementsByClassName("container__comment");

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

    btnRestart.addEventListener("click", function(){
        gameOptions.reset();
        console.log("gra zrestartowana");
        while(listItem[0]){
            listItem[0].remove();
        }
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
        },
        reset: function(){
            AiPoints = 0;
            PlayerPoints = 0;
            PlayerNumber.innerHTML = PlayerPoints;  
            Ainumber.innerHTML = AiPoints;
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
            gameDescription.innerHTML = "wygrał";
            gameBox.style.zIndex = "1";
        }
        else if(outcomePlayer >= 5){
            gameDescription.innerHTML = "przegrał";
            gameBox.style.zIndex = "1";
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