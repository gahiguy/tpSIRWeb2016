
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

//variable globale
var globalDrawing;

//classe dessin:Drawing
function Drawing(){
	//tableau de formes
	this.tabForm = new Array();
	
	globalDrawing = this;
	
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
	
	this.nom = function(){
		return 'Rectangle:'+this.x+','+this.y+','+this.largeur+','+this.hauteur;
	}.bind(this);
	
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
	
	this.nom = function(){
		return 'Ligne:'+this.x1+','+this.y1+','+this.x2+','+this.y2+','+this.couleur+','+this.epaisseur;
	}.bind(this);
};
//l'heritage
Ligne.prototype = new Form();