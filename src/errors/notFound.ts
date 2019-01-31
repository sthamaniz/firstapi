import { Request, Response, NextFunction } from 'express';

/**
 * Error response middleware for 404 not found.
 *
 * @param {Request} req
 * @param {Response} res
 */
export function notFound(req: Request, res: Response) {
    res.json({
      error: {
        code: '404',
        message: 'Not Found'
      }
    });
  }