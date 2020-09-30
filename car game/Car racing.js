console.log('online');

const score  = document.getElementById('score');
const startScreen =document.getElementById('startScreen');
const gameArea = document.getElementById('gameArea');
const screenWidth = screen.width;
const screenHeight = screen.height;
let  scorepoint = 0;
document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);
startScreen.addEventListener('click',start);
// let speed = 
let player = {'speed':3};
let keys = {'ArrowUp': false,'ArrowDown': false,'ArrowLeft':false,'ArrowRight':false};

function keyDown(e){
    e.preventDefault();
    keys[e.key] = true;
    // console.log(e.key);
}

function keyUp(e){
    e.preventDefault();
    keys[e.key] = false;
    // console.log(e.key);
}

function isCollide(a,b){
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();
    return !((aRect.bottom < bRect.top)||(aRect.top >bRect.bottom)||(aRect.right < bRect.left)||(aRect.left > bRect.right));
}

function moveLines(){
    let line = document.querySelectorAll('.line');
    let num =0;
    line.forEach(function(item){
        if(item.getBoundingClientRect().y > screenHeight){
            item.style.top = -5 + "px";
        }
       
        num = item.getBoundingClientRect().y;
        num += player.speed;
        item.style.top = num + "px";
       
    })
}

function moveEnemy(car){
    let line = document.querySelectorAll('.enemy');
    let num =0;
    line.forEach(function(item){
        
        if(isCollide(car,item)){
            console.log('collide');
            player.start = false;
            console.log('car',car.getBoundingClientRect(),car);
            console.log('enemy',item.getBoundingClientRect(),item)
        }

        if(item.getBoundingClientRect().y > screenHeight*1.05){
            item.style.top = -5 + "px";
            item.style.left = screenWidth*0.3 + Math.floor((Math.random()*screenWidth*0.34) + 0) + "px";
        }
       
        num = item.getBoundingClientRect().y;
        num += player.speed;

        item.style.top = num + "px";
       
    })
}



function gamePlay(){
    let car = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();
    scorepoint++;
    score.innerHTML = `Score<br> ${scorepoint}`;
    
    if(player.start){

        moveLines();
        moveEnemy(car);

        if(keys.ArrowUp && player.y > (screenHeight*0.05) ) {player.y -= player.speed}
        if(keys.ArrowDown && player.y < (screenHeight*0.85)) {player.y += player.speed}
        if(keys.ArrowRight && player.x < (road.x+ road.width - screenWidth*0.065)) {player.x += player.speed}
        if(keys.ArrowLeft && player.x > (road.x + 5)) {player.x -= player.speed}

        car.style.top = player.y + "px";
        car.style.left = player.x + "px";

        window.requestAnimationFrame(gamePlay);
    }
    else{
        startScreen.className ='startScreen';
    startScreen.innerHTML = `!Congratulation! you scored ${scorepoint}<br>Press here to restart.`;
    
    }
}

function start(){
    player.start = true;
    gameArea.innerHTML = '';
    scorepoint = 0;
    gameArea.className = 'gameArea';
    startScreen.className = 'hide';

    let roadLine = document.createElement('div');
    roadLine.className = 'line';
    gameArea.appendChild(roadLine);


    window.requestAnimationFrame(gamePlay);

    for(x=0;x<3;x++){
        let roadLine = document.createElement('div');
    roadLine.className = 'line';
   
    
    gameArea.appendChild(roadLine);
    roadLine.style.top = (x*screenHeight)*0.375 + "px";
    
    }
    let car =document.createElement('div');
    car.className  = 'car';
    // car.setAttribute('style','width:4%;height:4%;')
    gameArea.appendChild(car);
    // car.style.top = 85;
    // car.style.left = 30;
    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    // console.log(car.offsetTop);
    // console.log(car.offsetLeft);
    // console.log('road ',gameArea.getBoundingClientRect());
    // console.log(screen.height,screen.width);

    for(x=0;x<3;x++){
        let enemyCar = document.createElement('div');
        enemyCar.className = 'enemy';
        enemyCar.setAttribute('style',`background-image: url('finalenemycar${x+2}.jpg');
        background-size: 100%;`);
    gameArea.appendChild(enemyCar);
    enemyCar.style.top = (x*screenHeight)*0.375 + "px";
    enemyCar.style.left = screenWidth*0.3 + Math.floor(Math.random()*screenWidth*0.34 +0) + "px";
    }

}
