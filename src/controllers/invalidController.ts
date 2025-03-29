import { Request, Response } from 'express';

const handleInvalidRoute = (req: Request, res: Response) => {
    res.status(404).json({ error: 'Invalid Route' });
};

export default { handleInvalidRoute };
