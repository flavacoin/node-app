const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello all the people1111!'))
app.listen(3000, () => console.log('Server ready'))
