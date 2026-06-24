const c=document.getElementById('game');
const ctx=c.getContext('2d');
let x=100,y=350,timer=30,round=1,running=false;
document.getElementById('startBtn').onclick=()=>running=true;
document.getElementById('resetBtn').onclick=()=>location.reload();

document.addEventListener('keydown',e=>{
 if(e.key==='a')x-=15;
 if(e.key==='d')x+=15;
 if(e.key==='j')alert('Punch!');
 if(e.key==='k')alert('Kick!');
 if(e.key==='l')alert('Slam!');
 if(e.code==='Space')alert('YALL KNOW!!!');
});

setInterval(()=>{
 if(running){
  timer--;
  if(timer<=0){
   if(round===1){round=2;timer=30;}
   else{running=false;alert('DESLOCK PICCOLO RUNS MIAMI');}
  }
 }
},1000);

function draw(){
 ctx.clearRect(0,0,c.width,c.height);
 ctx.fillStyle='skyblue';
 ctx.fillRect(0,0,c.width,c.height);
 ctx.fillStyle='green';
 ctx.fillRect(0,420,c.width,80);
 ctx.fillStyle='white';
 ctx.fillRect(x,y,40,80);
 ctx.fillStyle='black';
 ctx.fillText('Round '+round,20,20);
 ctx.fillText('Time '+timer,120,20);
 requestAnimationFrame(draw);
}
draw();
