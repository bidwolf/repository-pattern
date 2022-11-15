import express from 'express';
import bodyParser from 'body-parser';
import {router} from './routes';
const app = express();
const port = process.env.port ?? '3333';
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);
app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
