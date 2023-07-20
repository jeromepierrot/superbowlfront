# Superbowl Website (Front-end)

## Présentation

Ce projet (fictif) est la partie Front-end de l'application Superbowl (projet Stania).

Cette application est destinée à pouvoir visualiser les matches du Superbowl et à permettre aux utilisateur de parier sur des matches à venir.

Il fait appel à une une architecture N-Tiers classique avec : 
- 1 application web front (celle-ci)
- 1 application back-end permettant un accès à : 
- 1 système de gestion de base de données (MariaDB).

Le code source de la partie back-end du projet se trouve à ici :
https://github.com/jeromepierrot/SuperbowlBackend.git

La base de donnée est hébergée sur un serveur séparé des applications.

2 autres applications sont en cours de développement : 
- 1 version bureautique (Desktop) destiné aux commentateurs des matches.
- 1 version mobile (Android/iOS) pour que les utilisateurs puissent visualiser leur paris effectués sur le site web.

_(liens à venir)_

## Pré-requis
- npm et yarn pour l'installation d'Angular CLI
- Angular CLI v16.0.6 pour compiler le projet Front-end
- Un IDE comme **VS Code** ou IntelliJ **WebStorm** est fortement recommandé

## Installation de Angular CLI (Front-end)
### 1. Installation de NPM 9.6.0 (via NodeJS 18.16.1)

https://nodejs.org/en/download/
Choisir la version LTS (18) de NodeJS (et non pas 20)

Vérification de l'installation :

`npm -v`

Remarque : NPM ne sert qu'à installer Yarn et Angular CLI.
Vous pouvez trouver d'autres méthodes d'installation de Yarn (Chocolatey, Homebrew, Macports, Curl, etc...) selon vos préférences et votre OS :
https://chore-update--yarnpkg.netlify.app/fr/docs/install#windows-tab


### 2. Une fois NPM installé, installer Yarn (v1.22.19)

`npm install --global yarn`

Vérification de l'installation :

`yarn -v` ou `yarn version` (sans '**s**')

### 3. Installer Angular CLI

- Si Angular CLI v16.x.x n'est pas déjà installé :

`yarn global add @angular/cli`

- Plus d'info sur Angular:
  - https://angular.io/
  - https://material.angular.io/
  - fichier local [README.md](./README.md)

- Vérification de l'installation :

`ng version`

![angular_CLI.png](res%2Fangular_CLI.png)
- 
- Mettre à jour Angular :

`ng update @angular/cli @angular@core`
`yarn global add @angular/cli`

- Si Angular CLI est déjà installé et à jour, mais utilise NPM comme Package Manager, allez dans le dossier du projet (`cd superbowlfrontend`), et entrer la commande ci-dessous pour basculer sur Yarn :
(normalement c'est inutile car le projet est configuré avec Yarn)

`ng config cli.packageManager yarn`

- Pour une utilisation globale de Yarn avec Angular CLI :
(Important : avant d'utiliser Yarn, bien lire la section '5. (facultatif) Basculer de YARN à NPM' pour Angular CLI, ci-dessous

`ng config -g cli.packageManager yarn`

_Dans ce dernier cas, tout nouveau projet Angular CLI sera créé avec des packages téléchargés et/ou mis à jour avec Yarn.
Avant d'utiliser Yarn, il faudrait nettoyer (= supprimer) le dossier local "node_modules" de l'application en question (cf. §5 pour revenir à NPM)._

### 4. Téléchargement des dépendances :

Allez à la racine du dossier du projet (`cd superbowlfrontend`), **NE PAS TOUCHER - NI EFFACER le fichier 'package.json'**, puis taper la commande suivante :

`yarn install`

Cela installera les packages nécessaires à la compilation du projet ainsi qu'un fichier 'yarn.lock' (qui se réfère au fichier 'package.json')

Vérification des packages installés :

`yarn versions` (avec '**s**')

### 5. (facultatif) Basculer de YARN à NPM pour Angular CLI :
Avant d'utiliser ou de mettre à jour des packages d'anciens projets Angular CLI, managés avec NPM, il faut nettoyer le dossier sinon, il faut revenir à NPM :

`ng config -g cli.packageManager npm`

Ensuite, allez dans le dossier du projet (ex: `cd mon_projet`) puis effacez le dossier complet '**node_modules**' ainsi que le fichier '**yarn.lock**'
puis relancer l'installation des dépendances avec NPM.

Pour basculer d'un projet NPM à YARN :
`ng config -g cli.packageManager yarn`
Ensuite, allez dans le dossier du projet (ex: `cd mon_projet`) puis effacez le dossier complet '**/node_modules**' ainsi que le fichier '**package.json.lock**' (**NE PAS EFFACER le fichier 'package.json'**).
Puis relancer l'installation des dépendances avec YARN.

~~( `ng set --global packageManager=npm` , pour Angular 5 et moins)~~


## Lancement du projet :

- lancement du serveur Front-end et du navigateur sur la page d'accueil du site, en local:

`ng serve -o`

- Le message "Compilation successful" devrait apparaitre, confirmant que le serveur est lancé et le site opérationnel.
La page d'accueil du site s'affichera dans le navigateur par défaut, à l'adresse http://localhost:4200

- Une fois le serveur Front lancé, il faut évidemment le laisser tourner.
Utiliser le raccourci ctrl+C, pour stopper le serveur (ce qui rendra le site inopérant, bien évidemment).

## Communication avec le serveur back-end et variable d'environnement

Le dossier 'src/environments' contient plusieurs fichiers de configuration selon le type de déploiement (local, developpement/test ou production) et contient la variable apiURL définissant le chemin du serveur back-end (API RESTful):
ex : apiUrl : 'http://localhost:8080/api/' cible l'environnement de développement local (appli backend lancée sur le même poste de travail et utilisant le port 8080).

On peut donc redéfinir le chemin d'accès au serveur API selon ses besoins.

## Installation de Java et Spring boot (pour le Back-end)
Pour l'installation du back-end, merci de se référer au dépôt Github correspondant :
https://github.com/jeromepierrot/SuperbowlBackend.git
