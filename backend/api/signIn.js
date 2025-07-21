const pool =require('../database');

module.exports=async function handler(req,res) 
{
  try 
  {
    if(req.method==='POST') 
      {
      const {email,password }=req.body;
      console.log('Received POST request with body:',req.body);

      const result=await pool.query(
        'SELECT * FROM accounts WHERE email = $1 AND password = $2',[email,password]
      );

      if(result.rows.length>0) 
      {
        const user=result.rows[0];
        console.log('Found user:',user); 
        res.status(200).json({message: 'Sign in successful!',user});
      } 
      else 
      {
        console.log('User not found or incorrect password');
        res.status(401).json({message:'Invalid email or password'});
      }
    } 
    else 
    {
      res.status(405).json({message:'Method not allowed'});
    }
  } 
  catch (error) 
  {
    console.error('Error handling request:',error);
    res.status(500).json({message:'Internal Server Error',error: error.message});
  }
};