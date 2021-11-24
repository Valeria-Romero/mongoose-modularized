const {AnimalModel} = require( './../models/animalModel' );

const AnimalController = {

    findAnimals : function(request, response){
        AnimalModel
            .findAllAnimals()
            .then( result =>{
                if( result === null ){
                    throw new Error("There are no animals in the database");
                }
                response.render('index', { found: true, animals: result});
            })
            .catch(error =>{
                console.log( error );
                response.render( 'index', {found: false});
            });
    },

    loadAddAnimalForm :  function(request, response){
        response.render('add');
    },

    getAnimalById : function(request, response){
        var id = request.params.id;
        AnimalModel
            .getAnimalById(id)
            .then( data => {
                console.log( data );
                response.render( 'info', { animal : data } );
            });  
    },

    addNewAnimal : function(request, response){
        const animal = request.body.animal;
        const animalId = request.body.id;
        
        const newAnimal = {
            animal,
            animalId
        };
    
        AnimalModel
            .addAnimal( newAnimal )
            .then( result =>{
                console.log(result)
            })
            .catch( err =>{
                console.log("Something went wrong!");
                console.log(err);
            })
        response.redirect('/');
    },

    editAnimal : function( request, response){
        const animal = request.body.animal;
        const animalId = request.params.id;
        
        console.log(animalId);
    
        const newAnimal={
            animal,
            animalId
        }
    
        AnimalModel
            .update(animalId, newAnimal)
            .then( result =>{
                console.log(result);
            })
            .catch( err =>{
                console.log(err);
            })
        response.redirect('/');
    },

    getAnimalToEdit : function(request, response){
        var id = request.params.id;
        response.render('update', {id: id});
        console.log(id);
    },

    deleteAnimal : function( request, response ){
        var animalId = Number(request.params.id);
        console.log(animalId);
        AnimalModel
            .delete( animalId )
            .then( result => {
                console.log(result );
            })
            .catch( err => {
                console.log( "Something went wrong!" );
                console.log( err );
            })
        response.redirect( '/' );
    }
};

module.exports = { AnimalController };