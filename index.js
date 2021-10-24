const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

// const handler =( req, res) =>{
//     res.send('hello from node');
// }

app.get('/', (req, res) => {
    res.send('Wow I am Learning node first time..');
});


const users = [
    { id: 0, name: 'talha', email: 'shp@gmail.com', phone: '01748384' },
    { id: 1, name: 'pappu', email: 'luk@gmail.com', phone: '01748384' },
    { id: 2, name: 'kamrul', email: 'kam@gmail.com', phone: '01748384' },
    { id: 3, name: 'lukman', email: 'rud@gmail.com', phone: '01748384' },
    { id: 4, name: 'mislu', email: 'mis@gmail.com', phone: '01748384' },
    { id: 5, name: 'rudro', email: 'ami@gmail.com', phone: '01748384' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

//Use Dynamic API

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    // console.log(req.params.id);
})

app.get('/fruits', (req, res) => {
    res.send('Mango, Banana, Apple');
})


app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yammy Yammy fazli');
})


app.listen(port, () => {
    console.log('listening to port', port);
});