const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const PORT = 3000 || process.env.PORT;
users = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Jane'
    },
    {
        id: 3,
        name: 'Joe'
    },
    {
        id: 4,
        name: 'Jill'
    }
]
app.get('/', (request, response) => {
    response.get('Access-Control-Allow-Origin', '*');
    response.send('Hello World!');
})
app.get('/users', (request, response) => {
    console.log(response.data);
    response.send(users);
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})