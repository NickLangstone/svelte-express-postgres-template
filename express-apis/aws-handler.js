import express from 'express';
import * as itemDB from './itemDBaccess.js';
import serverless from 'serverless-http';

const app = express();
app.use(express.json());   

  // return the full array of all the vehicles
  app.get('/api', function(req, res, next){
    console.log('/api called with no parameters' );  
    const allItems = itemDB.getItems().then ( allItems => {
      res.send( '{"result":"OK" , "data": '+JSON.stringify( allItems )+ '}' );
  
    })
   
 });

 app.post('/api', function(req, res, next){
    console.log('/app POST called' + JSON.stringify(  req.body )   );  

    const allItems = itemDB.getItems();

    res.send( '{res:OK , req: '+JSON.stringify( allItems )+ '}' );
 });

 /* istanbul ignore next */
 if (!app.parent) {
   app.listen(3000);
   console.log('Express started on port http://localhost:3000');
 }


export const thisapp = serverless(app);


