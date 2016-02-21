TP Web : JavaScript et HTML5

Le Tp consiste à la réalisation d’une application web en Javascript et HTML en utilisant l’architecture MVC. Le but est de construire l’application à la main pour voir et comprendre la nécessité d’utiliser des framework tel que AngularJs et d’autres.

L’interaction
Le fichier d’interaction « interaction.js » en JavaScript consiste à créer 3 fonctions gérant la souris le « Drag’n’Drop » en affichant à chaque fois les coordonnées de la souris quand on clique, on se déplace et quand on relâche, afin de dessiner les différentes formes avec ces coordonnées plus tard. 

Le modèle
Le modèle constitue l’ensemble des classes/objets que l’on va utiliser dans notre application à savoir :
- Drawing contenant un tableau de Formes
- Forme
- Rectangle et Ligne qui héritent de la classe Forme.

La Vue
Dans la vue, se trouvent les fonctions paint, une pour chaque objet, permettant de dessiner les différents objets de notre application et ainsi la visualisation des objets.
Après, on crée des boutons à chaque réalisation d’un objet(updateShapeList), un bouton généré par objet créé, permettant ainsi de supprimer l’objet (removeFormTabForm) si voulu.

Le Contrôleur
Le contrôleur va se charger de la gestion des événements et ainsi la mise à jour du modèle et de la vue. Il contient 3 fonctions permettant à classe Pencil de réaliser des formes (rectangles/lignes).
-onInteractionStart : permet de commencer à créer/dessiner l’objet
-onInteractionUpdate : met à jour les coordonnées de l’objet qui est entrain d’être dessiné.
–onInteractionEnd : -nous affiche la forme après dessin
                    -enregistre la forme dans le tableau des formes du modèle. 



