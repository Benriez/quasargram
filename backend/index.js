/*
    dependencies
*/
    const express = require('express')


/*
    config express
*/
    const app = express()


/*
    endpoint - posts
*/
    app.get('/posts', (request, response) => {
        let posts = [
            {
                caption:'Golden Gate',
                location: 'San Francisco'
            },
            {
                caption:'London Eye',
                location: 'London'
            }
        ]
        response.send(posts)
    })


/*
    Listen
*/
    app.listen(3000)
