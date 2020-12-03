// // * * *   C O N S T A N T E S   &   V A R I A B L E S   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
// const canvas= document.getElementById("gameZone");
// const ctx= canvas.getContext("2d");

// //Initialiser les variables utiles au jeu
// let highscore;
// let score;
// let player;
// let gravity;
// let obstacles;
// let gameSpeed;
// let keys =[];

// //Instancier l'objet FlyingFish
// const Fish={
//     position:{
//         x:canvas.width/7,
//         y:canvas.height-15,
//     },
//     dimension: {
//         w:canvas.width/7,
//         h:canvas.width/7,
//         hOrigin:canvas.width/7,
//     },
//     couleur: '#F28322',
//     force: 15,
  
//     //fonction qui "dessine" notre objet dans le contexte du canvas
//     afficher:()=>{
//         ctx.fillStyle= Fish.couleur;
//         ctx.fillRect(Fish.position.x,Fish.position.y,Fish.dimension.w,Fish.dimension.h);
//     }
// };

// // * * *   F O N C T I O N S   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// //fonction principale du jeu
// const PlayTheGame=()=>{
//     //dimension du canvas adapter à celle de la fenêtre (non responsive?)
//     canvas.width= window.innerWidth;
//     canvas.height= window.innerHeight;

//     gameSpeed=3;
//     gravity=1;
//     score=0;
//     highscore=0;

//     //équivalant d'un SetInterval. pour l'annuler: cancelAnimationFrame(const)
//     requestAnimationFrame(Anim=()=>{
//         requestAnimationFrame(Anim);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         Fish.afficher();
//     }); 
// }

// PlayTheGame();



// * * *   C O N S T A N T E S   &   V A R I A B L E S   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
const canvas= document.getElementById("gameZone");
const contexte= canvas.getContext('2d');

let score;
let higthScore;
let gravity;
let speedGame;

const Fish= {
    dimension:{
        height: canvas.width/7,
        width: canvas.width/7,
    },
    position:{
        x:canvas.width/10,
        y:canvas.height-150,
    },
    deplacement:{
        y:0,
    },
    couleur: '#F28322',

    afficher:()=>{
        contexte.fillStyle= Fish.couleur;
        contexte.fillRect(Fish.position.x,Fish.position.y,Fish.dimension.width,Fish.dimension.height);
        Fish.position.y++;
    }
};

function PlayTheGame(){
    canvas.width= window.innerWidth;
    canvas.height= window.innerHeight;

    score=0;
    higthScore=0;
    gravity=1;
    speedGame=3;

    requestAnimationFrame(Anim=()=>{
        requestAnimationFrame(Anim);
        contexte.clearRect(0, 0, canvas.width, canvas.height);
        Fish.afficher();
    });
};

PlayTheGame()




// * * *   F O N C T I O N S   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

