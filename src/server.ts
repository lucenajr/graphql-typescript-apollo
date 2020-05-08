import express from 'express';
import './database';

const app = express();
const port = 3000;

//app.use(routes);

app.listen(port, () => console.log(`Running in port ${port}`));
