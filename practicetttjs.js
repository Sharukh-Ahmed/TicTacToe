let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset");
let msg = document.querySelector(".winner");
let turnX = true;
let i = 0;

const winPatterns = [
    [0,1,2],//rows
    [3,4,5],//rows
    [6,7,8],//rows
    [0,3,6],//columns
    [1,4,7],//columns
    [2,5,8],//columns
    [0,4,8],//diagonals
    [2,4,6]//diagonals
];

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    }
)};

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        turnX = true;
        box.disabled = false;
        box.innerText = "";
        msg.classList.add("hide");
        box.style.color = "saddlebrown";
        i = 0;
    });
});

const checkWinner = () => {

    winPatterns.forEach((pattern) => {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val == pos2Val && pos2Val == pos3Val) {
                if(pos1Val === "X") {
                    msg.classList.remove("hide");
                    msg.innerText = "Winner is player 1";
                }
                else {
                    msg.classList.remove("hide");
                    msg.innerText = "Winner is player 2";
                }
                disableBoxes();
            }
        }
    });

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turnX == true) {//two equals are the equal operator and one is assign operator
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.innerText = "O";
            box.style.color = "orange";
            turnX = true;
        }
        
        box.disabled = true;
        i++;
        
    let isWinner = checkWinner();
    if (i === 9 && !isWinner) {//if i reaches 9 and winner condition does not satisfy then draw
        gameDraw();

    }
});

});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msg.classList.remove("hide");
    disableBoxes();
  };