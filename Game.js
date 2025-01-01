const image_plyer=document.getElementById('img_Player');
const image_ai=document.getElementById('img_ai');

let life_ai=3;
let Life_plyer=3;

// les images

const pa='url(./images/ورقة_ai.svg)';
const sc='url(./images/مقص_ai.svg)';
const ro='url(./images/حجر_ai.svg)';

// les Audio 

const A1 = './audio/1.mp3';// if ai lose
const A2 = './audio/2.mp3';//if ai win 
const A3 = './audio/3.mp3';// if ai lose
const A4 = './audio/4.mp3';// if ai lose
const A5 = './audio/5.mp3';// if ai lose
const A6 = './audio/6.mp3';//if ai win 
const A7 = './audio/7.mp3';//drow

// chose audio ai lose
let chase_ai=[A1,A3,A4,A5];
let j = Math.floor(Math.random() * chase_ai.length);
let ch_ai=chase_ai[j];

// chose audio Plyer lose
let chase_ply=[A2,A6];
let x = Math.floor(Math.random() * chase_ply.length);
let ch_py=chase_ply[x];

// add animation 

function addAnimation() {
     image_ai.classList.add("bounce");
     image_plyer.classList.add("bounce");

     setTimeout(() => {
          image_ai.classList.remove("bounce");
          image_plyer.classList.remove("bounce");
     }, 6000);
 }


// les function 

function Rock() {
     image_plyer.style.backgroundImage = "url(./images/حجر.svg)";
     let chase=[ro,sc,pa];
     let i = Math.floor(Math.random() * chase.length);
     let chase_ai=chase[i];
     image_ai.style.backgroundImage = chase_ai;

     if(chase_ai==pa){
          Life_plyer-=1;
          const audio = new Audio(ch_py); 
          audio.play(); 
          image_ai.style.borderColor='#00ff00';
          image_plyer.style.borderColor='#ff0101';

     }

     if(chase_ai==ro){
          const audio = new Audio(A7); 
          audio.play(); 
          image_ai.style.borderColor='#000';
          image_plyer.style.borderColor='#000';
     }

     if(chase_ai==sc){
          life_ai-=1;
          
          const audio = new Audio(ch_ai); 
          audio.play(); 
          image_ai.style.borderColor='#ff0101';
          image_plyer.style.borderColor='#00ff00';
     }

     setTimeout(() => {
          image_ai.style.borderColor="#fff";
          image_plyer.style.borderColor="#fff";
     }, 6000);
}

function scissors() {
     image_plyer.style.backgroundImage = "url(./images/مقص.svg)";
     let chase=[ro,sc,pa];
     let i = Math.floor(Math.random() * chase.length);
     let chase_ai=chase[i];
     image_ai.style.backgroundImage = chase_ai;

     if(chase_ai==ro){
          Life_plyer-=1;
          const audio = new Audio(ch_py); 
          audio.play(); 
          image_ai.style.borderColor='#00ff00';
          image_plyer.style.borderColor='#ff0101';

     }

     if(chase_ai==sc){
          const audio = new Audio(A7); 
          audio.play(); 
          image_ai.style.borderColor='#000';
          image_plyer.style.borderColor='#000';
     }

     if(chase_ai==pa){
          life_ai-=1;
          
          const audio = new Audio(ch_ai); 
          audio.play(); 
          image_ai.style.borderColor='#ff0101';
          image_plyer.style.borderColor='#00ff00';
     }
     
     setTimeout(() => {
          image_ai.style.borderColor="#fff";
          image_plyer.style.borderColor="#fff";
     }, 6000);
}

function paper() {
     image_plyer.style.backgroundImage = "url(./images/ورقة.svg)";
     let chase=[ro,sc,pa];
     let i = Math.floor(Math.random() * chase.length);
     let chase_ai=chase[i];
     image_ai.style.backgroundImage = chase_ai;

     if(chase_ai==sc){
          Life_plyer-=1;
          const audio = new Audio(ch_py); 
          audio.play(); 
          image_ai.style.borderColor='#00ff00';
          image_plyer.style.borderColor='#ff0101';

     }

     if(chase_ai==pa){
          const audio = new Audio(A7); 
          audio.play(); 
          image_ai.style.borderColor='#000';
          image_plyer.style.borderColor='#000';
     }

     if(chase_ai==ro){
          life_ai-=1;
          
          const audio = new Audio(ch_ai); 
          audio.play(); 
          image_ai.style.borderColor='#ff0101';
          image_plyer.style.borderColor='#00ff00';
     }
     
     setTimeout(() => {
          image_ai.style.borderColor="#fff";
          image_plyer.style.borderColor="#fff";
     }, 5000);
}
