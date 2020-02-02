const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:3000/';

//MIDDLEWARE
exports.checkJWT = jwt({ 
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        jwksRequestsPerMinute: 15,      
        jwksUri: 'https://dev-mt2g3wp7.auth0.com/.well-known/jwks.json'
      }),      
    audience: 'bGOaWGQAd73mPygXMen4XkptBMrglXRY',
    issuer: 'https://dev-mt2g3wp7.auth0.com/',
    algorithms: ['RS256']
})

exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && (user[namespace + 'role'] === role)) {
    next();
  } else {
    return res.status(401).send({title: 'Not Authorized', detail: 'You are not authorized to access this data'})
  }
}


// exports.checkJWT = function(req, res, next) {
//     const isValidToken = true;

//     if (isValidToken) {
        // req.user = {
        //     name: 'Laycon',
        //     lastName: 'Muriziq'
        // }
//         next();
//     } else {
//         return res.status(401).send({title: 'Not Authorized', detail: 'Please login in order to get a data'});
//     }
// }