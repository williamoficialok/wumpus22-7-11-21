let port = 9999; 

var express = require('express');
 var app = express();

 app.set('view engine', 'ejs');

 app.get('/', function(req, res) {
     res.render('/root/Dats/wumpus/dashboard/');
 });


 app.listen(port);
 //console.log('[WEB] Dashboard lista en el puerto 2195.');


/* const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dashboard/'));

app.listen('9898', function() {
  console.log('[Web] Dashboard lista en el puerto 9898');
}); */
