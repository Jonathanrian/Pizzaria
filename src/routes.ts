import {Router, Request, Response } from 'express';
import { Route } from 'react-router-dom';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ok: true})
})

