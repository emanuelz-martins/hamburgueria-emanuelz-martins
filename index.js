const jsonServer = require('json-server').create();
const router = require('json-server').router('./db.json');
const auth = require('json-server-auth');
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 2000;

jsonServer.db = router.db;

const log = (data) => console.log(data);

const rules = auth.rewriter({
	users: 600,
	products: 644,
});

jsonServer.use(cors());
jsonServer.use(rules);
jsonServer.use(auth);
jsonServer.use(router);
jsonServer.use(morgan('dev'));
jsonServer.listen(port);

log(`Server is running on port: ${port}`);
