const mongoose = require('mongoose'), 
    Pet = mongoose.model('Pet')

module.exports = {
    index: function(req, res){
        Pet.find({}, null, {sort: {type: 1}}, function(err, pets){
            if (err){
                console.log('something went wrong');
            }
            else{
                res.json({pet: pets});
            }
        })
    },
    addPet: function(req, res){
        console.log("POST DATA", req.body);
        const pet = new Pet({name: req.body.name, description: req.body.description, type: req.body.type, skill1: req.body.skill1, skill2: req.body.skill2, skill3: req.body.skill3,});
        pet.save(function(err){
            if (err){
                res.json({err: err.errors});
            }
            else{
                console.log('succesfully added a pet');
                res.json({pets: pet});
            }
        })
    },
    getPet: function(req, res){
        let id = req.params.id;
        console.log(id+ "in pets.js")
        Pet.find({_id: id}, function(err, pet){
            if (err){
                console.log('Something went wrong');
            }
            else{
                res.json({pets: pet});
            }
        })
    },
    addLike: function(req, res){
        let id = req.body.id
        let like= req.body.up;
        Pet.update({_id:id}, {likes: like}, function(err){
            if(err){
                console.log('Like Error');
            }
            else{
                console.log('Like Added')
            }
        })
    },
    updatePet: function(req, res){
        console.log(req.body.pet.name+ ' in update');
        let id = req.params.id;
        console.log(id);
        Pet.update({_id: id}, {name: req.body.pet.name, description: req.body.pet.description, type: req.body.pet.type, skill1: req.body.pet.skill1, skill2: req.body.pet.skill2, skill3: req.body.pet.skill3,}, function(err){
            if(err){
                console.log('Pet did not update');
                res.json({err: err.errors});
            }
            else{
                console.log('Pet Updated!');
            }
        });
    },
    deletePet: function(req, res){
        let id = req.params.id;
        Pet.remove({_id: id}, function(err){
            if(err){
                console.log('something went wrong')
            }
            else{
                console.log('Pet Deleted')
            }
        })
    }, 
}