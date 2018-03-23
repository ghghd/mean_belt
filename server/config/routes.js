const pets = require('../controllers/pets.js');


//-------------------Routes-------------------------

module.exports = function(app){
//-------------get all--------------------------
        app.get('/pets/', function(req, res){
            pets.index(req, res);
        })
//---------------add new pet-------------------------
        app.post('/new', function(req, res){
            pets.addPet(req, res);
        })
//---------------get pet ---------------------------------
        app.get('/pets/:id', function(req, res){

            pets.getPet(req, res);
        })
//--------------------update pet ----------------------------
        app.put('/pets/update/:id', function(req, res){
            pets.updatePet(req, res);
        })
//------------------add like --------------------------------
        app.put('/pets/addLike/', function(req, res){
            pets.addLike(req, res);
        })
//-----------------delete pet -------------------------------
        app.delete('/pets/delete/:id', function(req, res){
            pets.deletePet(req, res);
        })
}