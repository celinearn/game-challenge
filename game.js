<<<<<<< HEAD
let flyingFish = document.getElementById("flyingFish");
const niveauDeFlotaison = 0;

function main() {
	document.getElementById("bouttonPlay").addEventListener("click", fishAuBonEndroit(){
				return flyingFish.positionY = niveauDeFlotaison;
		})
	
}

main();
fishAuBonEndroit();
=======
// class FyingFish {
//     constructor(){
//         this.positionX=posX, //position sur l'axe X
//         this.positionY= height-this.size, //position sur l'axe Y = la hauteur du bloc - la taille du FlyingFish
//         this.vitesseY=O //vitesse sur l'axe Y
//         this.gravity=2 //gravité à appliquer (au plus elle est elevée, au plus l'objet redescend vite)
//         this.size=50; //la taille du FlyingFish
        
//     };

//     jump(){
//         this.vitesseY= -20; //changer la vitesse sur l'axe Y (au plus c'est elevé au plus l'objet saute haut)
//     }

//     move(){
//         this.positionY=this.vitY; //on déplace le FlyingFish sur l'axe Y en fonction de sa vitesse
//         this.vitY=this.gravity //on applique la gravité au FlyingFish

//         this.positionY= constrain(positionY,0,height-this.size) //Contraindre la position Y entre 0(le sol) et la hauteur-sa taille

//     }
// }
let boutonPlay=document.getElementById("boutonPlay");
let flyingFish=document.getElementById("flyingfish");


function main(){
    boutonPlay.addEventListener("click",function FlyingFishAuBonEndroit(){
        boutonPlay.style.display="none";
    })


};

window.addEventListener("keyup", event => {
    if (event.isComposing || event.keyCode === 38) {
      flyingFish.style.transform = "translateY(-200px)"
      setTimeout(function(){ 
        flyingFish.style.transform = "translateY(0px)"
    }, 500);
    }
    // do something
  });

  setInterval(function(){ 
    document.getElementById('sw-box').insertAdjacentHTML("afterbegin",'<div class="seaweed"></div>')
    let seaweed=document.querySelector(".seaweed");
    setTimeout(function(){ 
        seaweed.style.transform = "translateX(-2000px)"
    }, 50);

    
    }, 2000);

main();
>>>>>>> 513f26d99138d43a208ea520780b1c95e4994aec
