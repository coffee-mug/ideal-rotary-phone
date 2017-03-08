# tereza

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Pour démarrer:

``` bash
# Dans une console, depuis le root (tereza), lancer le serveur de dev webpack pour le front
npm run dev

# Pour le serveur, se rendre dans tereza/dist et depuis une autre console (considérer utiliser foreman plus tard) :
node server.js
```

## BDD

On utilise principalement deux solutions pour définir les modèles, les connecteurs et pour effectuer des appels depuis serveur.js, qu'on pourra renommer api.js éventuellement

[Knex.js](http://knexjs.org/)
[Bookshelf.js](http://bookshelfjs.org/)
[Tuto pour appréhender rapidement](https://travishorn.com/what-did-i-learn-this-week-knex-js-bookshelf-js-95d3490e3a6f#.x4h4dj7pe)

Comme expliqué, en local c'est la base sqlite qui est utilisée (stockée dans un fichier) et postgresql en "prod".

## Serveur

dist/server.js : le fichier contenant le serveur [express.js](http://expressjs.com/fr/) 

La partie login / création de compte est déjà bien implémentée, avec une bonne lib pour la [sécurité des comptes (hash+salt des mdp)](https://github.com/ericelliott/credential)

Pour l'implémentation du login FB et Google, une fois les apps créés dans le dev panel respectif de chaque provider, on utilisera [passport.js](http://passportjs.org/)
 
## Déploiement
``` bash
npm run build # minifie tout le front

git add . 
git commit
git push origin master # sur git

npm run deploy # sur heroku, la "prod" actuelle
```
