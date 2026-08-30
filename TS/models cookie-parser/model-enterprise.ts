import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();

app.use(cookieParser(process.env.COOKIE_SECRET));

// ========== COOKIE PADRÃO ==========
const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    maxAge: 1000 * 60 * 60 * 24,
    signed: true        // ← assina o cookie com COOKIE_SECRET
};

// ========== COOKIE DE SESSÃO ==========
const sessionCookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    maxAge: 1000 * 60 * 60 * 2,  // ← 2 horas
    signed: true
};

// ========== COOKIE PERMANENTE ==========
const persistentCookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    maxAge: 1000 * 60 * 60 * 24 * 30,  // ← 30 dias
    signed: true
};

export { cookieOptions, sessionCookieOptions, persistentCookieOptions };
export default app;