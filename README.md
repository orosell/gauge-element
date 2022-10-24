# gauge-element

## Informations 

Web component permettant d'afficher une jauge de remplissage.
On lui passe en paramètres les infos suivantes :

* size : la taille de l'élément (en pixels)
* progress : le taux de remplissage (pourcentage)
* text : le texte affiché au centre
* color : la couleur de remplissage
* track : la couleur de la piste
* background : la couleur de fond du cercle central

Pour les couleurs, on peut lui passer n'importe quelle valeur hexa / rgb / rgba (avec la nomemclature adéquate).
La taille de la police de l'élément centrale se calcule automatiquement en fonction du nombre de caractères dans le texte.

## Installation

Il suffit d'inclure le fichier <code>gauge.component.js</code> en tant que module dans la page :
<pre>
&lt;script type="module" src="./gauge.component.js"&gt;&lt;/script&gt;
</pre>
On pourra ensuite appeler l'élément :
<pre>
 &lt;gauge-element progress="65" size="100" background="#fff" track="#eee" color="#336699" text="12"&gt;&lt;/gauge-element&gt;
</pre>
 à l'emplacement que l'on souhaite.
