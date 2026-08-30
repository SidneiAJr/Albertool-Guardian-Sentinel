import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();

app.use(cookieParser());

// ========== COOKIE SEGURO ==========
const cookieOptions = {
    httpOnly: true,     // ← JS do browser não acessa
    secure: false,      // ← true em produção (HTTPS)
    sameSite: 'strict' as const,  // ← bloqueia CSRF
    maxAge: 1000 * 60 * 60 * 24  // ← 24 horas
};

export { cookieOptions };
export default app;