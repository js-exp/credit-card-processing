import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import creditCard from './src/routes/creditCard.js';
import { connect } from './src/database/conn.js';

const app = express();

// App middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

const port = process.env.port || 5000;
app.use('/credit-card', creditCard);

export default app;