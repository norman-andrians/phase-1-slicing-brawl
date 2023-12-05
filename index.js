const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const public_path = path.join(__dirname, 'public');

app.use(express.static(public_path));

app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname });
})

app.listen(port, () => {
    console.log(`Server is running at port ${port} 🗣️🗣️🗣️`);
});