import { Router } from "express";
import cors from "cors";
import rateLimit from 'express-rate-limit';
import express from "express";

const router = Router();
const app = express()

app.use(cors({
    origin: ["*"],
    credentials: false, //Trocar para true ou false a sua preferencia
    methods: [''],
    allowedHeaders:['']
}))

const limiter = rateLimit({
    windowMs: 15*60*1000,
    max: 20,
    message: {message: 'Muitas tentativas de acesso! Tente Novamente mais tarde'},
    standardHeaders: true,
    legacyHeaders: false
})

const loginLimiter = rateLimit({
    windowMs: 15*60*1000,
    max: 3,
    message: {message: 'Muitas tentativas de Login! Tente Novamente mais tarde'},
    standardHeaders: true,
    legacyHeaders: false
})

const registerLimiter = rateLimit({
    windowMs: 15*60*1000,
    max: 3,
    message: {message: 'Muitas tentativas de Cadastro! Tente Novamente mais tarde'},
    standardHeaders: true,
    legacyHeaders: false
})

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
})


router.post('/user/login',loginLimiter);
router.post('/user/register',registerLimiter);
router.get('/',limiter);
router.post('/',limiter)