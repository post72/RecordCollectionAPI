// Adding JSON Web Token dependencies
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
require("dotenv").config();

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKSURI,
  }),
  audience: process.env.AUDIENCE,
  issuer: process.env.ISSUER,
  algorithms: ["RS256"],
});

//app.use(jwtCheck);
module.exports = jwtCheck;