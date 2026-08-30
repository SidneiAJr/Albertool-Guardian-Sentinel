import xss from 'xss';
import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());

const xssMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.body) {
        req.body = JSON.parse(xss(JSON.stringify(req.body)));
    }
    next();
};

app.use(xssMiddleware);

export default app;