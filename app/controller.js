const movies = require(`../data/films.json`)

const controller = {
    // permet d'afficher la homepage
    displayHomePage(req,res,next){
        console.log("je suis dans le controller");

        console.log("req.params",req.params);

        // res.render envoie la réponse
        res.render("index");
    },
    displayList(req,res,next){

        console.log("req.params", req.params);

        // res.render envoie la réponse
        res.render("films");
    },
    displayMovie(req,res,next){
        console.log("je suis dans le controller");
        // je récupère l'ID de l'article
        const movieId = req.params.id;
        console.log("req.params", movieId);

        // je cherche l'article dans le tableau sinon je retourne une 404
         const currentMovie = movies.find(movie => movie.id == movieId)
         console.log(currentMovie)
         console.log(movieId)
         if (!currentMovie) {
            res.render("404");
            return;
        }
             // res.render envoie la réponse
             res.render("details", {
                id: movieId,
        });
    }
}

module.exports = controller;

