const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
})



app.listen(PORT, ()=> {
    console.log(`App is running on PORT ${PORT}`);
});
