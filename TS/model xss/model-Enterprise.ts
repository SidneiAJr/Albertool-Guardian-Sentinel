import xss, { IWhiteList } from 'xss';
import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());

const xssOptions = {
    whiteList: {} as IWhiteList,
    stripIgnoreTag: true,
    stripIgnoreTagBody: ['script', 'style'],
    css: false,                     // ← bloqueia CSS injection
    escapeHtml: (str: string) => str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
};

const xssMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.body) {
        req.body = JSON.parse(xss(JSON.stringify(req.body), xssOptions));
    }
    if (req.query) {
        req.query = JSON.parse(xss(JSON.stringify(req.query), xssOptions));
    }
    next();
};

app.use(xssMiddleware);

export default app;