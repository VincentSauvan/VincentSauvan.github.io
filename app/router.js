// Je récupère la définition d'un Routeur dans le module express
const {Router} = require("express");

// Import du controller
const controller = require("./controller");

// J'instancie / je crèe un routeur
const router = Router();

router.use((req,res,next)=>{
    console.log("je suis bien rentré dans le routeur");

    //res.send("vous êtes bien sur mon site, n'hésitez pas à visiter les autres pages");

    // permet de passer à l'étape suivante
    next();
});

/*
    le verbe / la méthode "get" permet de filtrer le type de requête
    ici il s'agira de requête GET qui permet de récupérer des données
*/
router.get("/",controller.displayHomePage);

// route paramétré 
router.get("/films",controller.displayList);

// route paramétré 2
router.get("/films/:id",controller.displayMovie);

// J'exporte mon routeur
module.exports = router;