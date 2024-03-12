# Pourquoi React Native ? 

La réponse est plutôt naturelle : développer en hybride tout en gardant les bases que j'aime tant de React et Next.JS ! J'ai d'ailleurs fais la découverte de Expo qui se veut très prometteur. 
Expo permet de lancer en local son application et ainsi de voir ce que cela donne sur téléphone. Meilleur encore, Expo facilite le déploiement de l'application sur les deux stores !


# Comment React Native fonctionnne ? 

C'est vraiment pas si difficile que ce que suggérais ma **première** impression, j'avais certes eu des difficultés à utiliser Expo et je ne comprenais pas la **structure** des fichiers. 

Une chose qui ne facilite pas la montée en compétences rapide : l'affichage des erreurs ne se fait que dans un bazar total, ou dans un flou brumeux. Il faut donc être patient et lire chaque ligne jusqu'à trouver l'erreur.

React Native reprends le fonctionnement de... REACT. Tout ce qui est composant et hook restent donc tout à fait similaire. React fonctionne donc avec TypeScript (ou JavaScript quand on ne veut pas typer) et du JSX pour le rendu. 


Les **différences** restent présentes :
- La **navigation**... non c'est faux, seulement la documentation est moins claire que celle de Next.JS à ce niveau là, il y a aussi 2 façons de naviguer sur les pages. Expo Router permet d'avoir des routes _nested_. C'est-à-dire les **dossiers** forment automatiquement les routes
- Les **composants** changent : sur mobile ce n'est pas du html, c'est 100% **react-native** : _Text_, _Image_, sans oublier _View_ qui regroupe tout. Il faut également rajouter _FlatList_ pour scroller.
- Le **style** : c'est avec _stylesheet_ de react-native, dans le **même** fichier que le composant bien sûr, que l'on rajoute du style aux différents éléments (couleurs (n'oublie pas de parler de _Colors.light.tint_), _alignement_, _flex_..). C'est assez limpide.

C'est approximativement tout ce que j'ai remarqué de différent jusque maintenant.


# Par où j'ai commencé ? 

Je pense que tout le monde le sait : les technologies **évoluent** vite, plus encore les **frameworks** React & Cie (nous pourrions parler de **Next.JS** 14 avec App Router dont ChatGPT 4 n'en connaît toujours **pas** l'existence dans un _autre_ article). 
Expo ne fait **pas** exception avec ses versions de navigation par exemple. J'ai commencé un **tutoriel** Youtube de **2023** (nous sommes en 2024) avec rassurance, après 15 minutes d'explications très **utiles** pour comprendre React Native, 
Je m'aperçois que la **documentation** utilisée n'est plus la même, je tente quand même (en me doutant des résultats). Et paf, la console est toute **rouge** et me demande de me mettre à **jour**.

J'ai donc fais un tour dans la **documentation** (actuelle !), surprise : un **tutoriel** complet pour commencer le développement mobile : https://docs.expo.dev/tutorial/introduction/
Je fais le tutoriel en quelques heures (avec des petites modifications te souviens tu les _MaterialUI_ ?). 
Puis je cherche à me lancer **seul** pour faire une _petite_ application. 

**Nouvelle surprise** : je suis **perdu**, il y a **plusieurs** commandes pour construire le projet de base et je ne trouve **pas** comment naviguer entre les écrans....
D'où l'allusion à la navigation dans les différences...

Je me pars donc à la quête d'aide

# Commander des Pizzas ? 
Il est donc primordial de choisir la vidéo la plus **récente** possible : _il y a un mois_, une vidéo de 8 heures pour construire une application de commande sort. 
J'ai trouvé avec qui je passerais mes prochaines heures pour coder !! En plus il utilise Supabase et je voulais tester.

J'ai commencé et je me suis arrêté à 54 minutes, de quoi bien avancer !
Je ne les ai même pas vu passer tellement les **explications** sont **claires** (même en vitesse _x2_) et le code est **simple**.

Le _youtubeur_, bien que (_seulement_) 45k vues, nous met a disposition un **tableau** _notion_ avec absolument toutes les étapes claires et simples. 

Je suis vraiment **impressionné** par la **qualité** de travail des développeurs sur youtube, cette nouvelle decouverte ne fait qu'**améliorer** mon impression !

Je vais donc diviser les sections par _commit_, comme il a d'ailleurs fais sur son tableau. 

## Init
L'initialisation d'un projet peut-être la plus simple possible en fonction des technologies utilisées, ou devenir la plus longue à mettre en place pour d'autres. Sachant mon vécu avec React Native et les différentes documentations, je ne me rassure pas jusqu'à voir ce qu'il fait exactement, puis j'exécute. 

Il rappelle le besoin d'avoir node sur sa machine. 

Et quelle est la (nouvelle) surprise, des commandes que je faisais sans rélféchir, trouvent au final des options : 
`npx create-expo-app@latest FoodOrdering -t`

le `-t` nous propose de choisir un template entre : 
- Blank
- Blank (TypeScript)
- Navigation (TypeScript)
- Blank (Bare)

Voyez-vous où je veux en venir ? Le sourire se dessine-t-il sur votre visage ? 
En tous cas c'est ce qu'il m'est arrivé. 
Enfin on me propose la navigation !
Ce n'est pas tout, j'ai homis de parler d'un autre problème lors de ma première découverte du React Native, enfin d'expo plutôt : le JavaScript
Le projet était en JavaScript, enfin non les fichiers étaient en format `.js` mais tout le contenu des fichiers soulignait rouge. Je pensais donc à un problème de VSCode qui ne détecte pas tout, mais c'est visuellement agaçant de lire tout souligné en rouge. Je vous épargne mes péripéties. 

_Pourquoi utiliser TypeScript ?_ 
Par soucis de **qualité** de développement, un professeur me l'a bien expliqué : **typer** enlève facilement **50%** des **tests** à faire après. TypeScript est **principalement** venu compléter JavaScript pour cela. Et bien qu'à chaque **déploiement** je me retrouve à devoir tout typer, et qu'il m'arrive de ne pas comprendre un _type_, je préfère.

Egalement ce projet avait bien plus de dossier que ce que j'avais vu auparavant, le _youtubeur_ nous a donc recommandé de rassembler les dossiers utiles au développement dans un dossier _src_ (_assets_ pour les datas, _app_ pour les pages, _components_ pour les composants). 






