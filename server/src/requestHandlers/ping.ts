import { Request, Response } from 'express';
import status from 'http-status';

export const ping = (req: Request, res: Response) => {
  res.status(status.OK).json({ message: 'service is running.' });
};

export default ping;