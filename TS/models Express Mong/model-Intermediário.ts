import mongoSanitize from 'express-mongo-sanitize';
import express from 'express';

const app = express();

app.use(mongoSanitize({
    replaceWith: '_',
    allowDots: false,
    dryRun: false,
    onSanitize: ({ req, key }) => {  // ← corrigido
        console.warn(`Tentativa de injection detectada! Path: ${req.path} | Campo: ${key}`);
    }
}));

export default app;