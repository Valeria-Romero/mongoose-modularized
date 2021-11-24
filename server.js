const express = require('express');
const { AnimalRouter } = require( './server/routes/animalRouter' );

require( './server/config/database' );
const app = express();

app.set( 'views', __dirname + '/client/views' );
app.set( 'view engine', 'ejs' );

app.use( express.urlencoded({extended:true}) );
app.use( '', AnimalRouter );

app.listen( 8080, function(){
    console.log( "The users server is running in port 8080." );
});