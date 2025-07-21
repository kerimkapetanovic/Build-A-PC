
const express=require('express'); //Used to create the server
const bodyParser=require('body-parser'); //Enables parsing request bodies
const cors=require('cors'); //Enables cros-origin requests
const app=express(); //Creates the express server aplication
const PORT=4001; //Port number for the server

app.use(bodyParser.json()); //Enables parsing JSON request bodies on the server
app.use(cors()); //Enables cros-origin requests on the server

//Route handlers
const registerHandler=require('./api/register');
const signInHandler=require('./api/signIn');
const contactHandler=require('./api/contact');
const ordersHandler=require('./api/orders');

//Routes with respective route handlers
app.post('/api/register',registerHandler);
app.post('/api/signIn',signInHandler);
app.post('/api/contact',contactHandler);
app.post('/api/orders',ordersHandler);

//Error handling
app.use((err,req,res,next) => 
  {
  console.error('Error stack:',err.stack);
  console.error('Error message:',err.message);
  res.status(500).json({ message:'Internal Server Error',error: err.message });
});

//Starting the server
app.listen(PORT,() => 
{
  console.log(`Server is running on port ${PORT}`);
});