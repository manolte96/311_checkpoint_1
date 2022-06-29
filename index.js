const express = require('express')
const app = express()
const port = process.env.PORT || 4000
app.use(express.json())
app.get('/', (req, res) => res.send('default route a'))
//variable to access the comments file
let usersRoutes = require("./routes/users")
//tell the app to use the comments routes
app.use(usersRoutes)

app.listen(port, () => {
  console.log('app is listening on:', port)
})

//Trying to link this to users.js
