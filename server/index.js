const express = require('express'),
    app = express(),
    routes = require('./layers/routes/index'),
    port = '3000';

app.use(routes);

app.listen(port, function() {
    console.log(`http://localhost:${port}`)
})