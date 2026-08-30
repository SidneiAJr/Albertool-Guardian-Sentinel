import rateLimit from 'express-rate-limit';
// import RedisStore from 'rate-limit-redis';
// npm install rate-limit-redis ioredis

const enterpriseLimiter = rateLimit({
    windowMs: 15*60*1000,
    max: 200,
    message: { message: 'Muitas requisições! Tente novamente mais tarde' },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: false,
    skipFailedRequests: false,

    keyGenerator: (req) => req.ip ?? '',
    skip: (req) => req.ip === '127.0.0.1',

    // ← descomenta se usar Redis (recomendado em produção)
    // store: new RedisStore({
    //     sendCommand: (...args: string[]) => client.call(...args),
    // }),

    handler: (req, res) => {
        res.status(429).json({
            message: 'Bloqueado!',
            retryAfter: res.getHeader('Retry-After'),
            ip: req.ip
        });
    }
});

export default enterpriseLimiter;