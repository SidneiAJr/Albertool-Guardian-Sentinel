import * as express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import winston from 'winston';
import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const app = express.default();
const router = express.Router();

/* ========== HELMET ========== */
app.use(helmet());

/* ========== CORS ========== */
app.use(cors({
    origin: [],
    credentials: false,
    methods: [],
    allowedHeaders: []
}));

/* ========== RATE LIMIT ========== */
const limiter = rateLimit({ windowMs: , max: });
const loginLimiter = rateLimit({ windowMs: , max: });
const registerLimiter = rateLimit({ windowMs: , max: });

app.use(limiter);

/* ========== JWT ========== */
const verifyToken = (req: Request, res: Response, next: NextFunction) => {};

/* ========== BCRYPT ========== */
const hashPassword = async (password: string) => {};
const comparePassword = async (password: string, hash: string) => {};

/* ========== LOGS ========== */
const logger = winston.createLogger({});

/* ========== ROTAS ========== */
router.get('/');
router.get('/:id');
router.post('/', registerLimiter);
router.post('/login', loginLimiter);
router.put('/:id', verifyToken);
router.patch('/:id', verifyToken);
router.delete('/:id', verifyToken);

export default router;