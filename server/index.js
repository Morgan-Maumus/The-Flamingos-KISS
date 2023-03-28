const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const {MongoClient} = require("mongodb");
const uri = process.env.MONGODB_URI;

app.use(express.static(path.resolve(__dirname, '../flamingos/build')));

app.get('*', (req,res) =>{
    res.sendFile((path.resolve(__dirname,'../flamingos/build', 'index.html')));
})

/*app.get('/api/userID', async function (req,res){
    const flamingos = new MongoClient(uri, {useUnifiedTopology : true});
    try {
        await flamingos.connect();
        const database = flamingos.db('flamingodb');
        const collection = database.addCollection('userID');
    }
    catch ()
})*/

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});