const getFilm = require('../utiles/films')
const film = require('../utiles/films')

const filmObject = {
    
    home: async(req, res) => {
        console.log('holag');
        let title = req.params.title
        let data = await getFilm.fetchFilm(title)
        res.status(200).json(data)
    },
    film: async (req, res) => {
        let name = req.params.title 
        let film = await getFilm.fetchFilm(name)
        res.status(200)
    },
    filmPost: async (req, res) => { 
 
        console.log("Se ha realizado el POST");
        //let msj = "Se ha guardado"
        res.status(200).send(req.body)
     
    },
    putFilm: (req, res) => {
        res.status(200).send('Creado en el PUT') 
    },
    filmDelete: (req,res) => {

    },
    
    err: (req, res) => {
        res.status(404).send('Error 404 Not Found!') 
    }
}
module.exports = filmObject


