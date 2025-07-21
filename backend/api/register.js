const pool=require('../database'); 

module.exports=async function handler(req,res) 
  {
  if(req.method==='POST') 
    {
    const {name,surname,email,password,telephone,sex}=req.body;

    try 
    {
      const result=await pool.query(
        'INSERT INTO accounts (name, surname, email, password, telephone,sex) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *',[name,surname,email,password,telephone,sex]
      );

      res.status(200).json({message:'Account created successfully!',account:result.rows[0]});
    } 
    catch (error) 
    {
      console.error('Error creating account:',error);
      res.status(500).json({message:'Internal Server Error',error: error.message });
    }
  } 
  else 
  {
    res.status(405).json({message:'Method not allowed' });
  }
};