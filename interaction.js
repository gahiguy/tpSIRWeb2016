
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	this.posInitX = 0;
	this.posInitY = 0;
	this.posFinX = 0;
	this.posFinY = 0;
	this.pression = false;
	
	//fonction pour afficher les coordonnées "eventText = la fonction gerant les evenements" 
	this.debug  = function (eventText) {
		console.log(eventText, this.posInitX, this.posInitY, this.posFinX, this.posFinY, this.pression);
	}.bind(this);

	// Developper les 3 fonctions gérant les événements
	//fonction click
	this.maFctGérantLaPression = function(evt){
		var res = getMousePosition(canvas, evt) ;
		//recuperer les coordonnées du curseur
		this.posInitX = res.x;
		this.posInitY = res.y;
		//je suis en mode click
		this.pression = true;
		
		interactor.onInteractionStart(this);
		
		//affiche les coordonnées et le mode 
		this.debug("mouse down");
		
		
	}.bind(this)
	//fonctiondeplacement
	this.maFctGérantLeDéplacement = function(evt){
		if(this.pression){
			var res = getMousePosition(canvas, evt) ;
			//recuperer les coordonnées du curseur
			this.posFinX = res.x;
			this.posFinY = res.y;
			interactor.onInteractionUpdate(this);
			//affiche les coordonnées 
		this.debug("mouse move");
		}
		
	}.bind(this)
	//fonctionRelachement
	this.maFctGérantLeRelâchement= function(evt){
		
		var res = getMousePosition(canvas, evt) ;
		
		interactor.onInteractionEnd(this);
		//affiche les coordonnées et le mode 
		this.debug("mouse up");
		
		this.pression = false;
		///
		
		
		
	}.bind(this);
	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown', this.maFctGérantLaPression, false);
    canvas.addEventListener('mousemove', this.maFctGérantLeDéplacement, false);
    canvas.addEventListener('mouseup', this.maFctGérantLeRelâchement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



