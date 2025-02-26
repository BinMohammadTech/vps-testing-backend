import express, { urlencoded } from "express";
import cors from 'cors'
import bodyParser from "body-parser";
const app = express();

app.use(urlencoded({extended : true}));
app.use(cors());





// api routes
app.get('/', (req, res) =>{


  return  res.json({success : true, message : 'successfully reached api call!'});



});
app.get('/welcome', (req, res) =>{


   return res.json({success : true, message : 'this is the welcome route'});

});










const PORT = 5005;
app.listen(PORT, () =>{

    console.log(`server started successfully at http://localhost:${PORT}`)

}); 