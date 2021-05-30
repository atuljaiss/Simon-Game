var level = 1;
var arr1 = [];
var arr2 = [];
var started = false;
$(".play").click(function(){
    if(!started){
        $(".play").fadeOut();
        showLevel();
        setTimeout(function(){
            newSeq();
        },1000);
        started = true;
    }   
});
$(".square").click(function(){
    var idinp=this.getAttribute("id"); 
    console.log("id of square clicked "+idinp);
    clicked(idinp);
    arr2.push(idinp);
    console.log("arr2 " +arr2);
    check(arr2.length-1);
});
 function newSeq()
 {  
    arr2 = [];
    var randomNum = Math.floor(Math.random()*4);
    console.log("randomNum :"+randomNum);
    var idNum=document.querySelectorAll(".square")[randomNum].getAttribute("id"); 
    console.log("square :"+idNum);
    clicked(idNum);
    arr1.push(idNum);
    console.log("array1 "+arr1);
}         
function clicked(idNum){
 
   $("#"+idNum).addClass("active");
   var audio = new Audio("sound/"+idNum+".mp3");
   audio.play();
   setTimeout(function(){
    $("#"+idNum).removeClass("active");
   },100);

}
function check(index){
             if (arr1[index] === arr2[index]) {
                 if(arr1.length===arr2.length){
                    console.log('They are equal!');
                    level = level +1;
                    showLevel();
                    setTimeout(function(){
                        newSeq()},1000);
                    }
            }
            else{
                console.log("n");
                level = 0;
                showEnd();
                start="false"; 
            }
        
}
function showLevel(){
    $("h1").html("Level "+level).css("color","#FEF2BF");
};
function showEnd(){
    $("h1").html("Game Over <br> Play Again").css("color","red");
    $("body").addClass("gameOver");
    var audio = new Audio("sound/wrong.mp3");
    audio.play();
    setTimeout(function(){
        $("body").removeClass("gameOver");
        $(".play").fadeIn();
    },200);
    arr1 = [];
    level = 1;
    started = false;
};
$(".help").hide();
$(".up").hide();
$(".helpButton").click(function(){
    $(".help").slideDown();
    $(".up").fadeIn();
    $(".up").click(function(){
        $(".help").slideUp();
        $(".up").fadeOut();
    })
});



