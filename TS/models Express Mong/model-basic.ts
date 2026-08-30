import mongoSanitize from 'express-mongo-sanitize';
import express from 'express';

const app = express();

app.use(mongoSanitize());

export default app;