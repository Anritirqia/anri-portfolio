// THEME SAVE
if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light");
}

document.getElementById("theme-toggle").onclick=()=>{
document.body.classList.toggle("light");
localStorage.setItem("theme",
document.body.classList.contains("light")?"light":"dark");
};

// MUSIC
const music=document.getElementById("bg-music");
document.getElementById("music-toggle").onclick=()=>{
music.paused?music.play():music.pause();
};

// TYPING
const text="Welcome To My Professional Portfolio 🚀";
let i=0;
function type(){
if(i<text.length){
document.querySelector(".typing").textContent+=text[i];
i++;
setTimeout(type,60);
}}
type();

// SCROLL REVEAL
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("active");
}
});
});

// CURSOR
const cursor=document.querySelector(".cursor");
const dot=document.querySelector(".cursor-dot");

document.addEventListener("mousemove",(e)=>{
cursor.style.top=e.clientY+"px";
cursor.style.left=e.clientX+"px";
dot.style.top=e.clientY+"px";
dot.style.left=e.clientX+"px";
});

// MINI GAME
let score=0;
let time=5;
let gameActive=false;

const gameBtn=document.getElementById("game-btn");
const scoreDisplay=document.getElementById("score");
const timerDisplay=document.getElementById("timer");

gameBtn.onclick=()=>{
if(!gameActive){
gameActive=true;
score=0;
time=5;

let countdown=setInterval(()=>{
time--;
timerDisplay.textContent="Time: "+time;
if(time<=0){
clearInterval(countdown);
gameActive=false;
alert("Game Over! Your score: "+score);
}
},1000);
}

if(gameActive){
score++;
scoreDisplay.textContent="Score: "+score;
}
};

// PARTICLES
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

for(let a=0;a<particles.length;a++){
let p=particles[a];

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="white";
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;

for(let b=a;b<particles.length;b++){
let dx=p.x-particles[b].x;
let dy=p.y-particles[b].y;
let dist=dx*dx+dy*dy;

if(dist<10000){
ctx.strokeStyle="rgba(255,255,255,0.1)";
ctx.beginPath();
ctx.moveTo(p.x,p.y);
ctx.lineTo(particles[b].x,particles[b].y);
ctx.stroke();
}
}
}
requestAnimationFrame(animate);
}
animate();