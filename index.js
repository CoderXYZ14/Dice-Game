document.addEventListener('DOMContentLoaded', function() {
    // Initial setup when the DOM is loaded
    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");
    let res1=0;
    let res2=0;
    function rollDice() {
        let randNum1 = Math.floor(Math.random() * 6) + 1;
        let randNum2 = Math.floor(Math.random() * 6) + 1;
        res1=randNum1;
        res2=randNum2;
        img1.src = `./images/dice${randNum1}.png`;
        img2.src = `./images/dice${randNum2}.png`;
    }

    // Roll the dice when the page loads

    // Add event listener for the button click
    let button = document.querySelector('.button');
    button.addEventListener("click", () => {
        // Roll the dice again on button click
        rollDice();
        checkAns();
    });
    let h1=document.querySelector('h1');
    function checkAns(){
        if(res1>res2)
        h1.innerHTML = "<h1>🚩 Player 1 Wins !! \</h1>";

    else if(res1<res2){
        h1.innerHTML = "<h1> Player 2 Wins !! 🚩</h1>";
    }
    else{
        h1.innerText="Draw !!";
    }
    }
});
