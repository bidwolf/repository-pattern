import express from 'express';
import bodyParser from 'body-parser';
import {categoriesRoutes} from './routes/categories.routes';
import {specificationsRoutes} from './routes/specifications.routes';
const app = express();
const port = '3333';
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);
app.listen(port, () => {
	console.log(`http://localhost:${port}`);
},
);
