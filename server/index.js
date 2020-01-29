const express = require('express');
const next = require('next');
const routes = require('../routes')

//SERVICES
const authservice = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app);


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

app.prepare()
.then(() => {
    const server = express();



    server.get('/api/v1/secret', authservice.checkJWT, (req, res) => {
        return res.json(secretData);
    })

    
    server.get('*', (req, res) => {       
        return handle(req, res)
    }) 

    server.use(handle).listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready 0 http://localhost:300')
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})
