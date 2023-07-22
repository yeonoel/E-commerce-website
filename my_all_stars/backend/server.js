import startServer from './libs/boot.js';
import injectionMiddleware from './libs/middlewares.js';
import express from 'express';

const app = express();

injectionMiddleware(app);
startServer(app);