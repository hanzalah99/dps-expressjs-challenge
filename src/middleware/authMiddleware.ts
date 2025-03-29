import { Request, Response, NextFunction } from 'express';

// Hardcoded authentication token

const SECRET_TOKEN = 'Password123'; 

export const authenticate = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided. Access denied.' });
  }

  if (token !== `Bearer ${SECRET_TOKEN}`) {
    return res.status(403).json({ message: 'Forbidden. Invalid token.' });
  }

  next();
};