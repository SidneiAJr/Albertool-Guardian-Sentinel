import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: 15*60*1000,
    max: 20,
    message: {message: 'Muitas tentativas de acesso! Tente Novamente mais tarde'},
    standardHeaders: true,
    legacyHeaders: false
    // store: new RedisStore({}) ← descomenta se usar Redis
})

export default limiter