/*
    dependencies
*/
    const express = require('express')
    const admin = require('firebase-admin');

/*
    config express
*/
    const app = express()


/*
    config firebase
*/
    const serviceAccount = require('./serviceAccountKey.json');

    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    });

    const db = admin.firestore();


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
    app.listen(process.env.PORT||3000)
