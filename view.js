
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
	ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    
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

