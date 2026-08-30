import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
    windowMs: 15*60*1000,
    max: 5,
    message: {message: 'Muitas tentativas de Login! Tente Novamente mais tarde'},
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true, 
    // store: new RedisStore({}) ← descomenta se usar Redis
    keyGenerator: (req) => req.ip ?? '',        // ← bloqueia por IP
    skip: (req) => req.ip === '127.0.0.1',      // ← ignora localhost
    handler: (req, res) => {                     // ← resposta customizada
        res.status(429).json({
            message: 'Bloqueado!',
            retryAfter: res.getHeader('Retry-After')
        });
    }
})

export default loginLimiter;