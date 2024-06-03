import express from 'express';
import cors from 'cors';
import ipLookupRoutes from './routes/ipLookup';

const app = express();
const port = 4000;

// CORS Middleware hinzufügen
const corsOptions = {
  origin: 'http://localhost:3000', // Nur Anfragen von dieser URL zulassen
  optionsSuccessStatus: 200 // z.B. IE11 braucht diesen Status
};


app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', ipLookupRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
