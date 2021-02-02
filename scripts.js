var cars = ["SMILE!", 
"POSITIVE!", 
"GREAT!",
"PLEASURE!", 
"EMPATHY!",
"COMPASSION!", 
"COMMUNICATION!",
"APPRECIATION!", 
"AMIABLE!",
"KIND!", 
"CARING!",
"HUMBLE!", 
"FRIEND!",
"LOVE!", 
"GIVER!",
"HELPING!", 
"CHARITY!",
"BEAUTIFL!", 
"JOYFUL!",
"DURABLE!", 
"BLESSED!",
"BELOVED!", 
"AMAZING!",
"THOUGHTFUL!", 
"INTELLECTUAL!",
"HARMONY!", 
"GRACE!",
"HOPE!", 
"SWEET!",
"LIFE!", 
"LAUGH!"];

var n = 0;

function releaseAffirmation(){
    n++;
    console.log(n);

    if (n<21){
        console.log("Release the affirmation!");
        var randCar = cars[Math.floor(Math.random()*cars.length)]
        console.log(randCar);
    
        var randLeft = Math.floor(Math.random() * Math.floor(60));
        var randTop = Math.floor(Math.random() * Math.floor(85));
    
        document.getElementById("message-cont").innerHTML += "<p  class='message' style='left:" + randLeft + "%;top:" + randTop + "%;'>" + randCar +"</p>";
    }else if(n==21){
        document.getElementById("iloveyou-cont").classList.add('fadeIn');
    }else{
        // nothing
    }
    



}