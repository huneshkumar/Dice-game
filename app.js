var randomNumber1= Math.floor( Math.random()*6)+1;
var randonDiceImage="dice"+ randomNumber1+".png";
var randomImgSrc = "images/"+randonDiceImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSrc);

var randomNumber2= Math.floor( Math.random()*6)+1;
var randonDiceImage="dice"+ randomNumber2+".png";
var randomImgSrc2 = "images/"+randonDiceImage;
var image1= document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImgSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="player 1 won the game";

}
else if( randomNumber1=== randomNumber2){
    document.querySelector("h1").innerHTML="Tie paly again";
}
else{
    document.querySelector("h1").innerHTML="player 2 won the game";
}