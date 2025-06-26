let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector(".winner");

let turnX = true;//player1 and player2

// 1D Array
// let arr = []
// //2D Array
// let arr2 = [[], []]

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        console.log("box was clicked")

        if (turnX) {
            box.innerText = "X";
            turnX = false;
        }

        else {
            box.innerText = "O";
            box.style.color = "orange";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();

    });
});

const resetGame = () => {

    turnX = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msg.classList.add("hide");
    }

}

const disableBoxes = () => {

    for (let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (pos1Val) => {

    if (pos1Val === "X") {
        msg.innerText = `Player 1 Wins`;
        msg.style.color = "white";
    }
    else {
        msg.innerText = `Player 2 Wins`;
        msg.style.color = "white";

    }


    msg.classList.remove("hide");
    disableBoxes();

}

resetBtn.addEventListener("click", () => {
    resetGame();
    location.reload()
})

const checkWinner = () => {

    // for (let pattern of winPatterns) {
    //     console.log(pattern[0], pattern[1], pattern[2]);
    //     console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innertext, boxes[pattern[2]].innerText);
    // }
    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {

            if (pos1Val === pos2Val && pos1Val === pos3Val) {

                // console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }

        }

    }

};