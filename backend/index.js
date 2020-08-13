/*
    dependencies
*/
    const express = require('express')
    const admin = require('firebase-admin')
    let inspect = require('util').inspect
    let Busboy = require('busboy')
    let path = require('path')
    let os = require('os')
    let fs = require('fs')

/*
    config express
*/
    const app = express()


/*
    config firebase
*/
    const serviceAccount = require('./serviceAccountKey.json');

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: "quasargram-5a2d4.appspot.com"
    });

    const db = admin.firestore();
    let bucket = admin.storage().bucket();


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

    var busboy = new Busboy({ headers: request.headers });

    let fields = {}
    let fileData = {}

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
      // /temp/uuid.png
      let filepath = path.join(os.tmpdir(), filename)
      file.pipe(fs.createWriteStream(filepath))
      fileData = {filepath, mimetype}
    });

    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      fields[fieldname] = val 
    });

    busboy.on('finish', function() {
      db.collection('posts').doc(fields.id).set({
        id: fields.id,
        caption: fields.caption,
        location: fields.location,
        date: parseInt(fields.date),
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/quasargram-5a2d4.appspot.com/o/goldenGate.jpg?alt=media&token=4440b884-9235-472b-af8c-855291178aca'
      })
      response.send('Done parsing form');
    });
    request.pipe(busboy);
})

/*
    Listen
*/
    app.listen(process.env.PORT||3000)
