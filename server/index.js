const express = require('express');
const path = require('path');
const next = require('next');
const mongoose = require ('mongoose');
const routes = require('../routes')

//SERVICES
const authservice = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app);
const config = require('./config');

// const Book = require('./models/book');
const bodyParser = require('body-parser');

const bookRoutes = require('./routes/book');
const porfolioRoutes = require('./routes/portfolio');
const blogRoutes = require('./routes/blog');

const robotsOptions = {
    root: path.join(__dirname, "../static"),
    headers: {
        'Content-Type': 'text/plain;charset-UTF-8'
    }
}

const secretData = [
    {
        title: 'SecretData 1',
        description: 'Plans how to build spaceship'
    },
    {
        title: 'SecretData 2',
        description: 'Secret Password'
    }
]

//CONNECTING TO DATABASE
//OPTION 1
// async () => (await mongoose.connect(config.DB_URI, {useNewUrlParser: true}))();

//OPTION 2
mongoose.connect(config.DB_URI, {useNewUrlParser: true})
    .then(() => console.log('DB connected!'))
    .catch(err => console.error(err));
//CONNECTION COMPLETED



app.prepare()
.then(() => {
    const server = express();
    //INFORMING SERVER TO USE bodyParser.json AS THE MIDDLEWARE
    server.use(bodyParser.json());    

    server.use('/api/v1/books', bookRoutes);
    server.use('/api/v1/portfolios', porfolioRoutes);
    server.use('/api/v1/blogs', blogRoutes);

    server.get('/robots.txt', (req, res) => {
        return res.status(200).sendFile('robots.txt', robotsOptions);
    });

    //MIDDLEWARE
    server.get('/api/v1/secret', authservice.checkJWT, (req, res) => {        
        return res.json(secretData);
    })

    server.get('/api/v1/onlysiteowner', authservice.checkJWT, authservice.checkRole('siteOwner'), (req, res) => {
        return res.json(secretData);
    })

    
    server.get('*', (req, res) => {       
        return handle(req, res)
    })    
    
    server.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
          res.status(401).send({title: 'Unauthorized', detail: 'unauthorized Access!'});
        }
    });

    server.use(handle).listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready 0n http://localhost:3000')
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})
