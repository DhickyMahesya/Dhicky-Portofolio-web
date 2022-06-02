//btn kirim
var tombolAlert = document.querySelector(".btn");
tombolAlert.addEventListener("click",function(){window.alert('Pesan anda sudah dikirim')});

//jumbotron Bola Memantul
const kanvasKita = document.getElementById("myCanvas");
        
        kanvasKita.height = 80;
        kanvasKita.width = 1350;
        let ctx = kanvasKita.getContext('2d');

        var x = kanvasKita.width/6;
        var y = kanvasKita.height/1;
        var alurX = 4; //arah jalan ball
        var alurY = -2;//arah jalan ball

        draw();

        function draw() {

            ctx.clearRect(0,0,kanvasKita.width,kanvasKita.height);
            ctx.beginPath();
            ctx.save();
            ctx.arc(x,y,40,0,Math.PI*2,false);
            ctx.fillStyle = 'yellow';
            ctx.fill();
            ctx.closePath();

            
            if(x + alurX >kanvasKita.width || x + alurX < 0 ){
                alurX = -alurX;
            } 
            
            if(y+alurY>kanvasKita.height || y + alurY <0){
                alurY =-alurY;
            }
            
            //penyamaan antara arah jalur bola dan koordinat kanvas
            x += alurX;
            y += alurY;
            
            
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    



        //efek ketik
const txtElement = ['Desain Grafis | Illustrator Artist | Digital Art'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function typing(){
    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];
    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.myskill').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }
    setTimeout(typing, 150);
})();