var express = require('express');
var app = express();
app.configure(function () {
    app.use(
        "/",
        express.static(__dirname)
    );
});
app.listen(3000);
console.log('Server running at localhost:3000');