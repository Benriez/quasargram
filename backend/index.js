/*
    dependencies
*/
    const express = require('express')


/*
    config express
*/
    const app = express()


/*
    endpoint
*/
    app.get('/', (request, response) => {
    response.send('blabla')
    })


/*
    Listen
*/
    app.listen(3000)
