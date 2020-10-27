class FyingFish {
    constructor(){
        this.positionX=posX, //position sur l'axe X
        this.positionY= height-this.size, //position sur l'axe Y = la hauteur du bloc - la taille du FlyingFish
        this.vitesseY=O //vitesse sur l'axe Y
        this.gravity=2 //gravité à appliquer (au plus elle est elevée, au plus l'objet redescend vite)
        this.size=50; //la taille du FlyingFish
        
    };

    jump(){
        this.vitesseY= -20; //changer la vitesse sur l'axe Y (au plus c'est elevé au plus l'objet saute haut)
    }

    move(){
        this.positionY=this.vitY; //on déplace le FlyingFish sur l'axe Y en fonction de sa vitesse
        this.vitY=this.gravity //on applique la gravité au FlyingFish

        this.positionY= constrain(positionY,0,height-this.size) //Contraindre la position Y entre 0(le sol) et la hauteur-sa taille

    }
}