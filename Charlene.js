// * * *   C O N S T A N T E S   &   V A R I A B L E S   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
const canvas= document.getElementById("gameZone");
const ctx= canvas.getContext("2d");

//dimension du canvas adapter à celle du support (non responsive?)
canvas.width= window.innerWidth;

//Mettre en place le background 
ctx.fillStyle = '#88F2E8';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.save();

//Initialiser les variables utiles au jeu
gameOn= false;
let highscore;
let score;
let player;
let gravity;
let obstacles= [];
let gameSpeed;
let keys ={};

//Instancier l'objet FlyingFish
const Fish={
    position:{
        x:canvas.width/7,
        y:canvas.height-15,
    },
    dimension: {
        w:canvas.width/7,
        h:canvas.width/7,
        hOrigin:canvas.width/7,
    },
    couleur: '#F28322',
    deplacementY: 0,
    grounded: false, //atterit
    saut:0,
    force: 16,

  
    //fonction qui "dessine" notre objet dans le contexte du canvas
    afficher:()=>{
        ctx.fillStyle= Fish.couleur;
        ctx.fillRect(Fish.position.x,Fish.position.y,Fish.dimension.w,Fish.dimension.h);
    },

    
    animer:()=>{
        Fish.afficher();

        //LE SAUT
        if(keys[' '] || keys['j']){
            Fish.saute();
        }else{
            Fish.saut=0;
        };

        //LE RETRECISSEMENT(shrinking)
        if(keys['n'] ){
            Fish.dimension.h= Fish.dimension.hOrigin/2;
        }else{
            Fish.dimension.h= Fish.dimension.hOrigin;
        }

        //LE DEPLACEMENT
        Fish.position.y += Fish.deplacementY;

        //LA GRAVITE
        if(Fish.position.y+Fish.dimension.h < canvas.height){
            Fish.deplacementY += gravity;
            Fish.grounded= false;
        }else{
            Fish.deplacementY=0;
            Fish.grounded= true;
            Fish.position.y= canvas.height-Fish.dimension.h;
        };
    },

    saute:()=>{
        if(Fish.grounded && Fish.saut==0){
            Fish.saut=1;
            Fish.deplacementY =- Fish.force;
        }else if(Fish.saut>0 && Fish.saut<10){
            Fish.saut++;
            Fish.deplacementY =- Fish.force - (Fish.saut/50);
        };
    }
};

//Instancier le constructeur d'obstacle
class Obstacle{
    constructor (x,y,w,h,c,s){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.c=c;
        this.deplacementX= -s;
    };

    animer(s){
        this.x += this.deplacementX;
        this.afficher();
        this.deplacementX= -s;
    };

    afficher(){
        ctx.fillStyle= this.c;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    };
};
// * * *   F O N C T I O N S   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//fonction pour generer un chiffre aléatoire
const Random=(min,max)=>{
    return Math.round(Math.random()*(max-min)+min)
};
    
//fonction pour générer des obstacles de taille aléatoire
const GenereObstacles=()=>{
    let size= Random(20,70); //pour avoir des tailles différentes
    let type= Random(0,1); //pour avoir des obstacles volants et au sol
    let newObstacle = new Obstacle(canvas.width+size, canvas.height-size, size, size, '#C0F20C', gameSpeed);
    
    if (type==1){
        newObstacle.c="#04D9C4";
        newObstacle.y -= Fish.dimension.hOrigin-10;
    };

    obstacles.push(newObstacle);

    if(obstacles.length>=5){
        obstacles.shift();        
    };
};

//fonction principale du jeu
const PlayTheGame=()=>{
    

    
    gameSpeed=5;
    gravity=1;
    score=0;
    highscore=0;

    //équivalant d'un SetInterval. pour l'annuler: cancelAnimationFrame(const)
    requestAnimationFrame(Anim=()=>{

        requestAnimationFrame(Anim); //Recursivité; ça tourne en boucle

        ctx.clearRect(0, 0, canvas.width, canvas.height);


        timerObstacle--; //diminue, à chaque raffraichissement le moment d'afficher un obstacle
        if(timerObstacle<=0){
            GenereObstacles()
            timerObstacle= timerInitObstacles-gameSpeed*8;
            if(timerObstacle<60){
                timerObstacle=60
            };
        };

        obstacles.forEach(element => {
            element.animer(gameSpeed);
            if( element.x<=Fish.position.x+Fish.dimension.w &&
                element.x+element.w>=Fish.position.x &&
                element.y<=Fish.position.y+Fish.dimension.h &&
                element.y+element.h>=Fish.position.y){
                gameOn=false;
                console.log('gameOn:', gameOn)

            }
        });

        Fish.animer();

        gameSpeed+=0.003;
        score++;
    }); 
};

//Instancie le temps d'apparition des obstacles
let timerInitObstacles= 200;
let timerObstacle= timerInitObstacles;

//Bouton "start"
let START= document.querySelector("#START");
START.addEventListener("click",()=>{
    START.style.display="none";
    gameOn=true;
    if(gameOn){
        PlayTheGame();
    };
})
//Interaction clavier
document.addEventListener("keydown",event=>{
    keys[event.key]=true;
});

document.addEventListener("keyup",event=>{
    keys[event.key]=false;
});



