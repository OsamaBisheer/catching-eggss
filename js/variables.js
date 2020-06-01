window.onload=function(){
    chicken = document.getElementsByClassName("chicken");
    egg = document.getElementsByClassName("egg");
    scoreLabel = document.getElementById("score");
    attemptsLabel = document.getElementById("attempts");
    pauseclick = document.getElementById("pause");
    countDown = document.getElementById("countdown");
    audio = document.getElementById("my_audio");
    audio2 = document.getElementById("my_audio2");
    audio3 = document.getElementById("my_audio3");
    audio4 = document.getElementById("my_audio4");
    userName = document.getElementById("username");
    nameLabel = document.getElementById("namelabel");
    basket = document.getElementById("Basket");
    winDiv=document.getElementsByTagName("div")[5];
    loseDiv=document.getElementsByTagName("div")[6];
    body = document.body;
    M= document.getElementById("optionM");
    A= document.getElementById("optionA");

    };
    
    var seconds=59;
    if(localStorage.getItem('mode') == "hard")
    {
    var minutes=2;
    var attempts = 6;
    var target=30;
    }
    else
    {
    var minutes=3;
    var attempts = 8;
    var target=25;
    }
    var stopped = false;
    var score = 0;
    var flag = true;
    var timer;
    var cureentEggs=[];
    var Weggs=0;
    var randSpeed = 5;
    var sound = false;
    var offset=[0,0];