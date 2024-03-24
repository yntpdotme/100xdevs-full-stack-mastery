import express from 'express';

import routes from './startup/routes.js';
import db from './startup/db.js';
import prodMiddlewares from './startup/production.middlewares.js';

const app = express();

prodMiddlewares(app);
routes(app);
db();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}...`));
