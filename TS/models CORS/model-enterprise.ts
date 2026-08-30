import cors from 'cors';
import express from 'express';

const app = express();

const whitelist: string[] = [
    // 'https://seudominio.com',
    // 'https://app.seudominio.com',
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Bloqueado pelo CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['X-Total-Count'],
    credentials: true,
    maxAge: 86400,          // cache preflight por 24h
    optionsSuccessStatus: 200
}));

export default app;