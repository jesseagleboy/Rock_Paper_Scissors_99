const express = require('express');
const app = express();

app.use(express.static('.'));

const PORT = 3000 || process.env.PORT;



app.listen(PORT, () => {
    console.log(`Listening on PORT:${PORT}`);
})