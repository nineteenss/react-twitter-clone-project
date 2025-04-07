import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { blacklistedTokenRepository } from '../repositories/repo';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.log('JWT Secret not found.');
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const blacklisted = await blacklistedTokenRepository.findOneBy({ token });
    if (blacklisted) {
      return res.status(401).json({ error: 'Token revoked' });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
    req.body.user_id = decoded.id
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
    console.log('Error', error);
  }
};

export const validate = async (req: Request, res: Response) => {
  res.status(200).json({ valid: true });
};
