const express = require('express')
const fs = require('fs')
const https = require('https')
const path = require('path');

const app = express()

const PORT = process.env.PORT || 3001

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));
//production mode
if(process.env.NODE_ENV === 'production') {  
    app.use(express.static(path.join(__dirname, 'client/build'))); 

    app.get('*', (req, res) => {    
        res.sendfile(path.join(__dirname = 'client/build/index.html'));  
    })
}
//build mode
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
})



app.get('/', function (req, res) {
  res.send('hello world')
})

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(PORT, function () {
  console.log('App is now running on localhost port:' + PORT)
})