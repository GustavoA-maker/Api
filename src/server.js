const express = require('express');

const app = express();

const PORT = 3006;

app.get('/segundaApi', (request, response) => {
    response.send('Welcome');
});

app.listen(PORT, () => console.log(`running at port ${PORT}`));