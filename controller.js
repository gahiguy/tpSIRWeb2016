
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
		
		//on regarde la forme + on donne la valeur à l'attribut currEditingMode + on crée la forme
		if(butRect.checked) {
			this.currEditingMode=editingMode.rect;
			this.currentshape = new Rectangle(DnD.posInitX,DnD.posInitY,DnD.posFinX-DnD.posInitX,DnD.posFinY-DnD.posInitY,this.currLineWidth,this.currColour);
		
		}else if(butLine.checked){
			this.currEditingMode = editingMode.line;
			this.currentshape = new Ligne(DnD.posInitX,DnD.posInitY,DnD.posFinX,DnD.posFinY,this.currLineWidth,this.currColour);
		}else{
			console.log('Forme inexistante ou aucune forme');
		}
		
	}.bind(this);
	
	this.onInteractionUpdate=function(DnD){
		if(butRect.checked) {
			this.currentshape.largeur = DnD.posFinX-DnD.posInitX;
			this.currentshape.hauteur = DnD.posFinY-DnD.posInitY;
			//this.currentshape = new Rectangle(DnD.posInitX,DnD.posInitY,largeur,hauteur,this.currLineWidth,this.currColour);
		
		}else if(butLine.checked){
			this.currentshape.x2 = DnD.posFinX;
			this.currentshape.y2 = DnD.posFinY;
			//this.currentshape = new Ligne(DnD.posInitX,DnD.posFinX,DnD.posInitY,DnD.posFinY,this.currLineWidth,this.currColour);
		}else{
			console.log('Forme inexistante ou aucune forme');
		}
		
		
	
	}.bind(this);
	
	this.onInteractionEnd=function(DnD){
		drawing.addForm(this.currentshape);
		drawing.paint(ctx);
	}.bind(this);
	
};


