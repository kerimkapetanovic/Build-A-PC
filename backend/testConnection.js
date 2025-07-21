require('dotenv').config(); // Load .env file if running locally
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});
//Testing the connection to the database
async function testConnection() 
{
  try 
  {
    const result=await pool.query('SELECT NOW()'); //Current date and time SQL request
    console.log('Connection successful:', result.rows[0]);
  } 
  catch (error) 
  {
    console.error('Error connecting to the database:', error);
  } 
  finally 
  {
    await pool.end();
  }
}
testConnection();