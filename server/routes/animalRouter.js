const express = require('express');
const AnimalRouter = express.Router();
const { AnimalController } = require( './../controllers/animalController' );

AnimalRouter
    .route( '/' )
    .get( AnimalController.findAnimals );

AnimalRouter
    .route( '/new' )
    .get( AnimalController.loadAddAnimalForm);

AnimalRouter
    .route( '/:id' )
    .get( AnimalController.getAnimalById );

AnimalRouter
    .route( '/add' )
    .post( AnimalController.addNewAnimal );

AnimalRouter
    .route( '/edit/:id' )
    .get( AnimalController.getAnimalToEdit)
    .post( AnimalController.editAnimal );

AnimalRouter
    .route( '/destroy/:id' )
    .post( AnimalController.deleteAnimal );

module.exports = { AnimalRouter };