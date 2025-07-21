const pool=require('../database');

module.exports=async function handler(req,res) 
{
  try 
  {
    if(req.method==='POST') 
      {
      const {email,message}=req.body;
      console.log('Received POST request with body:',req.body);

      const newMessage={email,message};

      const result = await pool.query(
        'INSERT INTO messages (user_email, message) VALUES ($1, $2) RETURNING *',[newMessage.email,newMessage.message]
      );

      console.log('Inserted message:',result.rows[0]);

      res.status(200).json({message:'Message received successfully!'});
    } 
    else 
    {
      res.status(405).json({ message:'Method not allowed'});
    }
  }
  catch(error) 
  {
    console.error('Error handling request:',error);
    res.status(500).json({ message:'Internal Server Error',error:error.message });
  }
};