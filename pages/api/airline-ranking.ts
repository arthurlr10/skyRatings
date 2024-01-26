import type { NextApiRequest, NextApiResponse } from 'next';
import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    let connection;
  
    try {
      connection = await pool.getConnection();
      const [airlines] = await connection.query(`
      SELECT airline,
             (SUM(CASE WHEN flightStatusPublic = "ON_TIME" THEN 1 ELSE 0 END) / COUNT(*)) * 100 AS onTimePercentage
      FROM test
      GROUP BY airline
      ORDER BY onTimePercentage DESC;
  `);
  
      connection.release();
  
      res.status(200).json(airlines);
    } catch (error) {
      // Make sure to release the connection in case of error as well
      if (connection) connection.release();
      
      // Log the error for debugging purposes
      console.error('Error executing airlines query', error);
      
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
