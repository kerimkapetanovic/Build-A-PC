const pool=require('../database');

module.exports=async function handler(req,res) 
  {
  if(req.method==='POST') 
    {
    const {user_email,items,total_price,shipping_address}=req.body;

    if(!user_email || !items || !total_price || !shipping_address) 
    {
      return res.status(400).json({message:'Missing required fields'});
    }

    try 
    {
      const result=await pool.query(
        'INSERT INTO orders (user_email, items, total_price, shipping_address) VALUES ($1, $2, $3, $4) RETURNING *',[user_email,JSON.stringify(items),total_price,JSON.stringify(shipping_address)]
      );

      res.status(200).json({message:'Order placed successfully!',order: result.rows[0]});
    } 
    catch(error) 
    {
      console.error('Error placing order:',error);
      res.status(500).json({message:'Internal Server Error',error: error.message});
    }
  } 
  else 
  {
    res.status(405).json({message:'Method not allowed'});
  }
};