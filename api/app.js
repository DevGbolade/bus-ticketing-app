import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import Router from './routes/index';


const app = express();
app.use(morgan('dev'));

// const API_VERSION = '/api/v1';


app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

// app.use(`${API_VERSION}`, Router);


app.all('*', (err, req, res, next) => {
  if (!err) return next();
  return res.status(400).json({
    status: 400,
    error: `Failed to decode param: ${req.url}`
  });
});

export default app;
