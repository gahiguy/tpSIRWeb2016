TP Web : JavaScript et HTML5

Le Tp consiste � la r�alisation d�une application web en Javascript et HTML en utilisant l�architecture MVC. Le but est de construire l�application � la main pour voir et comprendre la n�cessit� d�utiliser des framework tel que AngularJs et d�autres.

L�interaction
Le fichier d�interaction � interaction.js � en JavaScript consiste � cr�er 3 fonctions g�rant la souris le � Drag�n�Drop � en affichant � chaque fois les coordonn�es de la souris quand on clique, on se d�place et quand on rel�che, afin de dessiner les diff�rentes formes avec ces coordonn�es plus tard. 

Le mod�le
Le mod�le constitue l�ensemble des classes/objets que l�on va utiliser dans notre application � savoir :
- Drawing contenant un tableau de Formes
- Forme
- Rectangle et Ligne qui h�ritent de la classe Forme.

La Vue
Dans la vue, se trouvent les fonctions paint, une pour chaque objet, permettant de dessiner les diff�rents objets de notre application et ainsi la visualisation des objets.
Apr�s, on cr�e des boutons � chaque r�alisation d�un objet(updateShapeList), un bouton g�n�r� par objet cr��, permettant ainsi de supprimer l�objet (removeFormTabForm) si voulu.

Le Contr�leur
Le contr�leur va se charger de la gestion des �v�nements et ainsi la mise � jour du mod�le et de la vue. Il contient 3 fonctions permettant � classe Pencil de r�aliser des formes (rectangles/lignes).
-onInteractionStart : permet de commencer � cr�er/dessiner l�objet
-onInteractionUpdate : met � jour les coordonn�es de l�objet qui est entrain d��tre dessin�.
�onInteractionEnd : -nous affiche la forme apr�s dessin
                    -enregistre la forme dans le tableau des formes du mod�le. 



