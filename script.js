var randomNumber1=Math.floor(Math.random()*6)+1;//1-6
var randomDiceImage1="images/dice"+randomNumber1+".png"; //images/dice1.png-images/dice6.png
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDiceImage1);

var randomNumber2=Math.floor(Math.random()*6)+1;//1-6
var randomDiceImage2="images/dice"+randomNumber2+".png"; //images/dice1.png-images/dice6.png
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML="Player 1 Wins!!";
}

else if(randomNumber1<randomNumber2){
        document.querySelector("h2").innerHTML="Player 2 Wins!!";
}

else{
        document.querySelector("h2").innerHTML="DRAW!";
}
    