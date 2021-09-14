const express = require('express');
const app = express();

app.use(express.static('.'));

const PORT = process.env.PORT || 3002;



app.listen(PORT, () => {
    console.log(`Listening on PORT:${PORT}`);
})