const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: 'variables.env'});
const createServer = require('./createServer');
const prisma = require('./prisma');

const server = createServer();

//  Use express middleware to handle cookies (JWT)
server.express.use(cookieParser());

// decode the JWT to get userId on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put the userId onto the req for future requests to access
    req.userId = userId;
  }
  next();
});

// 2. Create a middleware that populates the user on each request
server.express.use(async (req, res, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) return next();
  const user = await prisma.query.user({
    where: {
      id: req.userId
    }
  }, `{ id, permissions, email, username }`);
  req.user = user;
  next();
});



server.start(
  {
  cors: {
    credentials: true,
    origin: [process.env.FRONTEND_URL]
  },
}, 
deets => {
  console.log(`Server is now running on port http://localhost:${deets.port}`)
});

