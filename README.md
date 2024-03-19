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

Egalement ce projet avait bien plus de dossier que ce que j'avais vu auparavant, le _youtubeur_ nous a donc recommandé de rassembler les dossiers utiles au développement dans un dossier _src_ (_constants_ pour les constantes, _app_ pour les pages, _components_ pour les composants). 

## Building UI
Oui c'est un terme joli et pourtant assez vague, mais j'ai préféré reprendre l'intitulé du _commit_. C'est seulement découvrir les composants React Native, notamment avec les différences cités précédement : 
Les composants _View_ et _Text_ ainsi que leur propriétés tel que style
Le composant _Stylesheet_ dans une variable à part pour la structure lisible de la page. Bref pas besoin de rester longtemps ici, il est utile de rappeler qu'au début nous utilisons un fichier data donné par le _youtubeur_ pour afficher des données. Le dossier _assets_ comprend donc les fichiers de données.

En gros c'est ce que je disais plus haut, on utilise le JSX pour le rendu. 

## Premier composant personnalisé
Ca reprends exactement le fonctionnement de React, on peut écrire un composant (avec _function_ ou _const_) et l'**exporter**, ajouter des _props_ (il faudra bien _typer_, j'ai retenu la leçon !).

Oui c'est court mais c'est vraiment simple ici, c'est du 100% React : faire des composants, les exporter pour les utiliser ailleurs pour le rendu. 

## Typer 
Pour typer j'ai d'abord ajouter le fichier _types.ts_ dans le dossier _src_ (donné par le _youtubeur_) qui contient tout simplement les types des données que l'on va utiliser dans le projet, en les lisant j'imagine assez bien la base de données derrière (hâte de te rencontrer Supabase). Puis on import le type que l'on veut dans notre composant et le rajoute dans les props. 

Une chose que j'ai apprise ici c'est ajouter un defaultData dans une variable qui peut être nulle : 
`export const defaultPizza = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png"
`
`        source={{ uri: product.image || defaultPizza}} 
`

Pour finir, j'ai enfin compris la configuration des alias personnalisé (@/components) en est un !
Cela permet tout simplement de déplacer des fichiers sans se soucier des imports. 
Pour cela il faut aller dans le fichier _app.json_ : 
`{
  "expo": {
    "experiments": {
      "tsconfigPaths": true
    }
  }
}`

Puis dans le fichier _tsconfig.json_
`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@assets/*": ["assets/*"]
    }
  }
}`

Très intéressant ! 

## FlatList
Un nouveau _composant_ qui n'est pas des moindre : _scroller_.  

`<FlatList 
      data={products} 
      renderItem={({item }) => <ProductListItem product={item} />} -> parcours les produits 
      numColumns={2} -> réalise des colonnes
      contentContainerStyle={{gap: 10, padding: 10}} -> style de chacun
      columnWrapperStyle={{gap: 10}} -> style horizontal je crois
/>`

Jusque là j'ai vraiment quelque chose de beau à voir bien que simple. C'est vraiment pro. 


## Link
Pour pouvoir cliquer sur les pizzas et aller sur la page de détails du produit, il faut évidemment ajouter un **nouveau** fichier mais aussi **changer** la structure du composant _ProductItemList_ qui avait initialement le composant _View_ et lui rajouter un lien, mais également le rendre cliquable. 
Il faut donc wrapper le tout dans le composant _Link_ de _expo-router_, lui ajouter un _href_ mais aussi _asChild_ afin de garder le style que l'on avait mis. 
On enlève également le _View_ pour mettre à sa place _Pressable_ qui garde le style du container.

Vu qu'on souhaite cliquer sur une pizza et pas une autre, on doit adapter l'url : 
`      <Link href={`../menu/${product.id}`} asChild>
`
Pour que cela fonctionne, le fichier que l'on crée se nomme `[id]`, et pour utiliser l'id il faut rajouter une _const_ : 
`    const { id } = useLocalSearchParams();
`

Le tour est joué !

## Screens (et plus page...)

Pour continuer, nous souhaitons que l'écran de détails doit être au **même** endroit que la liste. Pour cela il faut les **regrouper** dans un **dossier**. Ici, _menu_. 
Nous rajoutons donc le fichier _[id].tsx_ ainsi que _index.tsx_ de _(tabs)_. Cela crée un nouveau bouton dans le menu (en bas). 

Nous ajoutons donc un fichier __layout.tsx_ qui va wrapper les fichiers du dossier. 

Dedans on y retourne un... Stack. 

Pour que le menu reste le même il faut faire attention au name du Tabs.Screen afin qu'il soit celui du nom du dossier. 

On a cependant perdu quelque chose si vous avez bien suivi : le fichier _index.tsx_ de _(tabs)_, il faut donc en **refaire** un avec un _Redirect_ dans le _/menu/_ (ce qu'on vient de faire !). 
Problème : cela **ajoute** un bouton dans la barre en bas (compris ?), il faut donc le cacher en rajoutant une ligne dans le __layout.tsx_ de _(tabs)_ : 
`        <Tabs.Screen name='index' options={{ href: null }} />
`
Ne pas oublier de mettre à jour le _Link_ précédent car le menu ne se trouve plus dans le dossier source _(tabs)_ mais dans _menu_.

Dans les options de Tabs.Screen (_layout.tsx) on peut modifier les options pour par exemple cacher le headerqui vient de s'ajouter, changer les titres comme cela : 
`<Stack>
   <Stack.Screen name="index" options={{title: "Menu"}} />
</Stack>;`

le name est ce que l'on vise (url -> dossier car c'est _nested_)

On peut aussi directement le faire dans un fichier précis (comme _[id].tsx_) : 
`
            <Stack.Screen options={{title: "Details: " + id}} />`
Pas besoin du name car on est déjà dans le fichier. 

C'est vraiment un gros chapitre important, je pense que **beaucoup** le seront, mais lui est celui que je cherchais pour comprendre mieux la **navigation**. 

## Provider
C'est un très gros morceau (encore !) mais très intéressant et vous verrez le lien avec le précédent chapitre. 

J'ai déjà utilisé des providers dans un autre tutoriel, sans chercher à comprendre, sans vraiment comprendre d'ailleurs. 

Le contexte pour commander des pizzas : 
Après avoir mis en place la navigation, il faut faire la page produit avec le prix, les tailles et le bouton ajouter au panier bien sûr. Tout cela se trouve donc dans le fichier _[id].tsx_ car chaque produit est différent, mais la page reste la même ! Rentrons plus en détail sur son fonctionnement avant de passer à la suite.

### [id].tsx
Ce fichier est un nouvel écran qui doit afficher les détails d'un produit. Mais avant cela il faut comprendre les premiers écrans : 

#### menu/index.tsx

Il faut bien s'imaginer la page principale avec la grille de pizzas (menu/index.tsx) qui est un FlatList car on peut scroller. Ce qu'on scrolle sont les datas dans le dossier assets (products). le renderItem est en fait le rendu de chaque data, ici on appelle un autre composant en donnant en props l'item (qui est une pizza je rappelle). On va aller dans le composant juste après. 
Ensuite on a le nombre de colonnes (numColumns), le style du container (contentContainerStyle) et le style des colonnes (columnWrapperStyle). Pour le fun il y a aussi l'option de scroll horizontal !. Bref il faut faire un tour sur la [documentation](https://reactnative.dev/docs/flatlist?language=typescript) pour tout retrouver;

#### components/ProductListItem

C'est le composant qui représente chaque item de l'écran principal (grille de pizzas). Ce qu'on veut c'est voir à quoi ressemble chaque pizza, son nom et son prix pour faire attention à son porte-monnaie ! Le nom et le prix sont dans des [Text](https://reactnative.dev/docs/text) donc pas très difficile. Par contre le composant [Image](https://reactnative.dev/docs/image) m'intéresse vraiment. Il contient la source `source={{ uri: product.image || defaultPizza}}` avec une option très intéressante : l'affichae d'une iamge par défaut : `export const defaultPizza = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png"` qu'on définit bien en dehors du composant `ProductListItem`. On a ensuite le style qui est souvent le même pour toutes les images : `width: '100%',
      aspectRatio: 1`. On veut prendre toute la largeur du parent et l'_aspectRatio_ égalise la largeur et la hauteur (donc forme un carré). On a ensuite dans le composant _Image_ la propriété _reziseMode_ qui maintient les dimensions de l'image.

Je n'ai pas parlé du plus important dans ce composant : Il faut pouvoir cliquer dessus (et donc être redirigé...). 
On enveloppe donc les _Text_ et _Image_ dans [_Pressable_](https://reactnative.dev/docs/pressable) qui est nouveau selon la documentation React Native ! Je vous conseille vivement d'aller y faire un tour, cette fois vous ne serez pas déçu ! Il y a des propriétés vraiment intéressantes ! Dans ce projet (pour l'instant !) on n'utilise pas de propriété, ce n'est pas lui qui va rediriger vers le fameux écran de produit (que nous avons trop rapidement délaissé...). 

C'est le composant [_Link_}(https://docs.expo.dev/router/navigating-pages/) de _expo router_ qui va faire le travail. Pour rappel il y a deux différentes méthodes de navigation, la classique est [React Navigation](https://reactnavigation.org/docs/link/), sa documentation est plus complète oui, je devrais plus m'y pencher. Celle que nous utilisons dans ce projet est _expo router_. Je ne vais pas rentrer dans les différences des deux (moi-même je ne sais pas encore). Nous y reviendrons peut-être une autre fois. 
Dans le _Link_ on a donc `<Link href={`../menu/${product.id}`} asChild>`. Vous voyez où nous allons ? 
Il y a en effet avant le composant la déclaration du type `type ProductListItemProps = {
    product : Product}` et son ajout dans le composant : `const ProductListItem = ({ product }: ProductListItemProps) =>`
Enfin, le _asChild_ permet d'adopter le style de _Pressable_ qui est l'enfant de _Link_.


#### [id].tsx

Nous y (re)voilà enfin, il fallait bien commencer doucement avant d'expliquer 100 lignes de code. Je n'ai pas encore l'habitude !
Pourquoi le faire si cela n'est ni dans mes habitudes ni rapide (c'est long d'écrire, je devrais refaire des exercices de dactylograhpie) ?
Pour mieux comprendre et maîtriser le langage et le _framework_. Je ressens déjà une clarté presque sans pareil après l'explication des premiers composants.

**Remarque importante : le fichier est amené à évoluer car je n'ai pas terminé le tutoriel, je vais voir comment ajouter les éléments, est-ce que je le fais ici ou à part. On verra bien.** 

On va carrément faire autrement pour cette fois, je vais expliquer par ligne comme cela c'est plus simple de suivre. 
1. `const sizes: PizzaSize[] = ["S", "M", "L", "XL"];`
   On déclare un tableau de tailles (pour les pizzas !) et on le **type** (le fichier types.tsx partagé par le _youtuber_). Le _typer_ permet de ne pas mettre n'importe quoi. C'est pro hein. On fait donc cela en dehors du composant (comme vu précédemment).
2. `const ProductDetails = () => {`
   On rentre dans le dur, quand je dis _composant_ c'est très souvent des composants que je développe, mais ce nom porte à confusion car il y a les _composants_ natifs de React que l'on utilise (comme _Pressable_...). Je parle des deux car les composants natifs sont essentiels, ils sont en fait dans les composants que l'on développe.

3. `const { id } = useLocalSearchParams();`
    Première variable déclarée : celle qui nous permet de prendre l'_id_ **exact** représentant la pizza sur laquelle on a cliqué tout à l'heure (en cherchant la moins chère). Le tour est donc joué en récupérant l'id on récupère tous les détails du produit.

4. `const [selectedSize, setSelectSize] = useState<PizzaSize>('M');`
   On utilise enfin des _hooks_. La force de React ! Commençons donc par expliquer ce qu'est un hook selon mes propres mots pour tester mes connaissances : _hook_ signifie état en français, ça permet tout simplement de gérer l'état d'éléments dans le composant. D'où les deux variables _selectedSize_ et _**set**SelectedSize_ pour changer la taille. Il y a pleins de _hooks **natifs**_ comme celui là (_useState_) mais également _useRef_, _useEffect_... Le truc plutôt nouveau pour moi est surtout la conception de _hook_ **personnalisé**, c'est pour bientôt ne vous inquietez pas !
C'est clair ? Maintenant on va aller vérifier sur internet et ajouter ce la clarté. En regardant la documentation, je me rappelle mes débuts dans React (il y a de cela 6 mois en cours de React). Je ne comprenais absolument rien à la [documentation React](https://fr.legacy.reactjs.org/docs/hooks-overview.html#:~:text=Les%20Hooks%20sont%20des%20fonctions,d%27utiliser%20React%20sans%20classes.).
Les hooks (après la version 16.8) remplacent les _class_. Cela permet de se brancher sur le cycle de vie de React. Je trouve vraiment les ressources internet pas assez claires cpour définir les hooks, je vais donc demander à mon ami. Il répète la même chose, sa prouve qu'il ne prend pas ses informations de sa tête ! Les _hooks_ permettent d'être réutilisés facilement.

J'ai toujours pas expliqué le code ! En même temps c'est très important de comprendre les **concepts** (oui j'aime la **théorie** ET ? A quoi cela sert sans comprendre ?). En tous cas dans la pratique je reconnais la **facilité** d'utilisation ! _UseState_ permet de re-rendre la valeur du _state_ qui change, ici on comprend bien que si l'on **clique** sur une **taille** le _selectedSize_ va **changer** de valeur. **Initialement** elle est à M, toujours **typé** bien sûr. 

5. `const product = products.find((p) => p.id.toString() === id);`
   Même moi je buge en lisant cette ligne. On voit cependant rapidement ce qu'elle faire : c'est une variable qui cherche le produit avec l'_id_ donné précédemment. Il parcourt la liste de produit en comparant leur _id_ avec l'_id_ que l'on veut.

6. `const {addItem} = useCart();`
   Ca ne fait pas penser à un _hook_ ça ? On y reviendra un peu plus tard dans la mise en place du _hook_ complet. Cependant on comprend facilement que ce que l'on veut c'est ajouter un item au panier (cart = panier).

7. `const addToCart = () => {`
   Fonction pour ajouter le produit au panier, ici on va simplement appeler la méthode _addItem_ de _useCart_.
   8. `if (!product) { return;}`
      Il faut toujours prendre en compte les cas où c'est _null_, de toute façon _typescript_ nous le rappelle ! Dans ce cas on sort de la méthode
   9. `addItem(product, selectedSize);}`
       Voici la fameuse méthode, on donne en paramètre le produit ainsi que la taille.
10. `if (!product) {
        return <Text>Product not found</Text>
    }`
    En dehors de la méthode, on vérifie qu'il y a un produit, sinon on affiche cela pour informer l'utilisateur (je devrais le changer !).
11. `return (`
    On rentre dans le _return_ du composant : c'est tout l'affichage.
    12. `<View style={styles.container}>`
        (Presque) Toujours une _vue_ (sinon un _Pressable_) qui prend tout en charge, on va analyser le style maintenant pour ne pas se perdre mais il faut savoir que tout est géré à part tout en bas comme vous verrez. Le style du _container_ est simple et clair: `backgroundColor: 'white'`
    13. `<Stack.Screen options={{title: product.name}} />`
        Ah ça, il faut que je m'y replonge pour bien comprendre. Non en fait, pas besoin, on change juste le **layout** comme du _header_ par exemple, ici c'est le titre de l'écran affiché tout en haut.
    14. `<Image source={{ uri: product.image || defaultPizza}} style={styles.image} />`
        Pas besoin de réexpliquer ici, nous avons vu précédemment le composant _Image_ et ses propriétés.
    15. `View style={styles.sizes}>`
        Nouvelle vue dans une vue, parce qu'on veut un style précis : `flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,`
        La direction horizontal avec _row_, on veut de l'espace entre les éléments et une marge. Bref du CSS.
    16. `{sizes.map(size => (`
        Les boucles ! on boucle sur les tailles (voir le tableau _sizes_. Donc pour chaque taille on :
        17. `<Pressable`
            Ajoute un composant qui peut être appuyé (pour changer la taille logique !)
        18. `onPress={() => setSelectSize(size)}`
            Quand on clique on... change la taille ! comment vous avez deviné ? On voit la facilité d'utilisation des _hooks_, et la convention de nommage très claire
        19. `key={size}`
            Il faut bien prendre en compte comme clef la taille, sinon toutes les tailles seront les mêmes
        20. `style={[styles.size, {backgroundColor: selectedSize == size ?  'gainsboro' : 'white' } ]}>`
            Là c'est un style intéressant. Il y a un tableau [] car on prend en compte le style déclaré tout en bas, mais on ajoute du style. Notamment une couleur de background, mais pas pour toutes les tailles. Voici la syntaxe de choix booléan (on dit comme ça ?). Si la taille est celle selectionnée (?) on applique la couleur _gainsboro_, sinon (:) couleur _white_. J'aime beaucoup ce niveau de personnalisation en toute simplicité.
        21. `<Text style={[styles.sizeText, {color: selectedSize == size ? 'black' : 'gray'}]}>{size}</Text>`
            Pareil pour le texte, je vous laisse imaginer la couleur du texte de la taille selectionnée. La taille est entre {} car c'est la clef.
        22. `</Pressable>)
                )}

            </View>`
            On oublie pas de tout fermer, c'est juste pour vous embêter.
      23. `<Text style={{ fontSize: 20}}>
                {product.price}€
            </Text>`
          Le texte qui affiche le prix, sinon c'est pas drôle (on peut mettre le style directement comme cela quand il y en a pas beaucoup).
      24. `<Button text="Add to cart !" onPress={() => {addToCart()}} />`
          Et voici le bouton pour ajouter au panier, enfin ! La syntaxe m'a toujours fais peur, mais je vais bien m'y faire, on appelle la méthode _addToCart_ qui elle en appelle une autre.
      25. `const styles = StyleSheet.create({`
          Voici le tableau où se trouve tous les styles. Pas besoin de les écrire vous avez accès dans le projet.

C'est bien long de découper par ligne un fichier ! Si vous comptez bien il n'y a que 25 lignes ? Oui il y a beaucoup d'espace entre les lignes et j'ai rassemblé certaines lignes. Ca reste long à écrire et sûrement long à lire....
