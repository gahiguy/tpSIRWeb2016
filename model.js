
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

//classe dessin:Drawing
function Drawing(){
	//tableau de formes
	this.tabForm = new Array();
	//ajout + suppression de formes
	this.addForm = function(form) {
        this.tabForm.push(form);
    }.bind(this);
    this.removeForm = function(index) {
        this.tabForm.splice(index,1);
    }.bind(this);
};

//la classe forme
function Form(couleur,epaisseur){
	this.couleur = couleur;
	this.epaisseur = epaisseur;
};

//la classe rectangle
function Rectangle(x, y, largeur, hauteur, epaisseur , couleur ){
	Form.call(this, couleur, epaisseur);
	this.x = x;
	this.y = y;
	this.largeur = largeur;
	this.hauteur = hauteur;
	
};
//l'heritage
Rectangle.prototype = new Form();

//la classe ligne
function Ligne(x1,y1,x2,y2,epaisseur,couleur){
	Form.call(this, couleur, epaisseur);
	this.x1 = x1;
	this.x2 = x2;
	this.y1 = y1;
	this.y2 = y2;
};
//l'heritage
Ligne.prototype = new Form();