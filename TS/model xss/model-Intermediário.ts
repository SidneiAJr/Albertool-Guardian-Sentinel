import xss, { IWhiteList } from 'xss';
import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());

const xssOptions = {
    whiteList: {} as IWhiteList,    // ← nenhuma tag HTML permitida
    stripIgnoreTag: true,           // ← remove tags não permitidas
    stripIgnoreTagBody: ['script'], // ← remove conteúdo do script
};

const xssMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.body) {
        req.body = JSON.parse(xss(JSON.stringify(req.body), xssOptions));
    }
    next();
};

app.use(xssMiddleware);

export default app;