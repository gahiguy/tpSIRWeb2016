
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(DnD){
		var butRect = document.getElementById('butRect');
		var butLine = document.getElementById('butLine');
		var spinnerWidth = document.getElementById('spinnerWidth');
		var colour = document.getElementById('colour');
		
		this.currLineWidth= spinnerWidth.value;
		this.currColour= colour.value;
		
		// le début commence à zéro
		var largeur = 0;//DnD.posFinX-DnD.posInitX
		var hauteur = 0;//DnD.posFinY-DnD.posInitY
		
		// le début commence à zéro
		DnD.posFinX = DnD.posInitX;
		DnD.posFinY = DnD.posInitY;

		//on regarde la forme choisie + on donne la valeur à l'attribut currEditingMode + on crée la forme
		if(butRect.checked) {
			this.currEditingMode=editingMode.rect;
			this.currentshape = new Rectangle(DnD.posInitX,DnD.posInitY,largeur,hauteur,this.currLineWidth,this.currColour);
		
		}else if(butLine.checked){
			this.currEditingMode = editingMode.line;
			this.currentshape = new Ligne(DnD.posInitX,DnD.posInitY,DnD.posFinX,DnD.posFinY,this.currLineWidth,this.currColour);
		}else{
			console.log('Forme inexistante ou aucune forme');
		}
		
	}.bind(this);
	
	this.onInteractionUpdate=function(DnD){
		//on recupère les nouvelles coordonnées
		if(butRect.checked) {
			
			this.currentshape.largeur = DnD.posFinX-DnD.posInitX;
			this.currentshape.hauteur = DnD.posFinY-DnD.posInitY;
		
		}else if(butLine.checked){
			this.currentshape.x2 = DnD.posFinX;
			this.currentshape.y2 = DnD.posFinY;
		}else{
			console.log('Forme inexistante ou aucune forme');
		}
		
		
	
	}.bind(this);
	//on affiche la nouvelle forme créée et on l'ajoute dans la liste des formes
	this.onInteractionEnd=function(DnD){
		
			
			if(butRect.checked) {
				//ça dessine/enregistre que quand le rectangle n'est pas nul(un clic = null)
				if(this.currentshape.largeur !==0 && this.currentshape.largeur !==0) {
					drawing.addForm(this.currentshape);
					drawing.paint(ctx);
					updateShapeList(drawing.tabForm);
				}
			}else if(butLine.checked){
				//ça dessine/enregistre que quand la ligne n'est pas nulle (un clic = null)
				if(DnD.posFinX !== DnD.posInitX && DnD.posFinY !== DnD.posInitY){
					drawing.addForm(this.currentshape);
					drawing.paint(ctx);
					updateShapeList(drawing.tabForm);
				}
			}
			
	}.bind(this);
	
	
};


