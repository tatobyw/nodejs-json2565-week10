const express = require('express') //1.User the express module
const app = express()              //2.Create an object of the express module

const PORT = process.env.PORT || 5000 //3.Setting port
const hostname = "localhost"

//4.Create Route: http://localhost:5000
app.get('/', (req, res) => {
    // res.status(200).send("Express")
    res.status(200).json(
        {
            id: '101',
            user: 'Mark',
            level: 'admin'
        }
    )
})

app.listen(5000, () => { //5.Make the server listen on port 5000
    console.log(`Server running at http://${hostname}:${PORT}`)
})
