import express from 'express';
import bodyParser from 'body-parser';
import {router} from './routes';
import swaggerUI from 'swagger-ui-express';
import swaggerConfig from './swagger.json';
const app = express();
const port = process.env.port ?? '3333';
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));
app.use(router);
app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
