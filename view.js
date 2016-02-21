
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
	ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.largeur, this.hauteur);
    ctx.stroke();
};

Ligne.prototype.paint = function(ctx) {
	//TODO Manager color
	ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;

	    ctx.beginPath();
	    ctx.moveTo(this.x1, this.y1);
	    ctx.lineTo(this.x2, this.y2);
	    ctx.stroke();

	};


Drawing.prototype.paint = function(ctx) {
    console.log(this.tabForm);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log('******');
    this.tabForm.forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};



Form.prototype.paint = function(ctx){
	ctx.strokeStyle = this.color;
	ctx.lineWidth = this.size;
}


var shapeList = document.getElementById('shapeList');

updateShapeList = function(tabForm){
	
	var listtabForm = '';
	tabForm.forEach(function(Form){
		
		 listtabForm+= '<span><button type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove-sign"></span></button>'  + Form.nom() + '<br></span>';

	});
	shapeList.innerHTML = listtabForm;
}


removeFormTabForm = function(evt)
{
    var cible = evt.target || window.event.srcElement;
    var parentCible = cible.parentNode;
    var parentCible2 = parentCible.parentNode;
    var index = 0;
    if (cible.nodeName === 'BUTTON')
    {
        index = Array.prototype.indexOf.call(parentCible2.childNodes, parentCible );
        //alert(index);
        globalDrawing.tabForm.splice(index,1);
       
        while (parentCible2.firstChild)
        {
        	parentCible2.removeChild(parentCible2.firstChild);
        }
        globalDrawing.paint(ctx);
        updateShapeList(globalDrawing.tabForm)
    }
}
shapeList.addEventListener('click', removeFormTabForm, false);



