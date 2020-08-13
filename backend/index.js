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
        response.set('Access-Control-Allow-Origin', '*')
        let posts = []
        db.collection('posts').orderBy('date', 'desc').get().then(snapshot => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
                posts.push(doc.data())
            });
            response.send(posts)
        })
    })

/*
    endpoint - create post
*/
app.post('/createPost', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')   
    response.send('request.headers')
})

/*
    Listen
*/
    app.listen(process.env.PORT||3000)
