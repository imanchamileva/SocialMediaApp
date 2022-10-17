const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000
const cors = require('cors');
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/', (req, res) => {
    res.send('server finally connected')
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))