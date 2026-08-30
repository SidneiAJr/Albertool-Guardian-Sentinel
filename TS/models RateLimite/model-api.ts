import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
    windowMs: 15*60*1000,
    max: 100,                // ← mais permissivo que login/register
    message: { message: 'Muitas requisições! Tente novamente mais tarde' },
    standardHeaders: true,
    legacyHeaders: false,
    // store: new RedisStore({}) ← descomenta se usar Redis
    keyGenerator: (req) => req.ip ?? '',
    skip: (req) => req.ip === '127.0.0.1',
    handler: (req, res) => {
        res.status(429).json({
            message: 'Bloqueado!',
            retryAfter: res.getHeader('Retry-After')
        });
    }
});

export default apiLimiter;