import express from 'express';
import cors from 'cors';
import * as itemDB from './itemDBaccess.js';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';


const app = express();
app.use(cors());
app.use(express.json());   
app.use(bodyParser.json());



  // return the full array of all the vehicles
  app.get('/api', function(req, res, next){
    console.log('/api called with no parameters' );  
    const allItems = itemDB.getItems().then ( allItems => {
      res.send( '{"result":"OK" , "data": '+JSON.stringify( allItems )+ '}' );
  
    })
   
 });

 app.post('/api', function(req, res, next){
    console.log('/app POST called ' + JSON.stringify(  req.body )   );  

    const  cnt = itemDB.storeItem(req.body)
    .then( cnt => { res.send( '{"result":"OK" , "updated":'+cnt+'}' )});

   // res.send( '{"result":"OK"}' );
 });

 /* istanbul ignore next */
 if (!app.parent) {
   app.listen(3001);
   console.log('Express started on port http://localhost:3001/api');
 }


export const thisapp = serverless(app);


