import mongoSanitize from 'express-mongo-sanitize';
import express from 'express';

const app = express();

app.use(mongoSanitize({
    replaceWith: '_',
    allowDots: false,
    dryRun: false,
    onSanitize: ({ req, key }) => {  // ← só recebe req e key
        console.warn(`Injection detectada! Path: ${req.path} | Campo: ${key}`);
    }
}));

export default app;