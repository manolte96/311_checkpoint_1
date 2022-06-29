const express = require('express')
const app = express()
const { users } = require('../data/index')
console.log("please")

app.get("/users", (req , res) => {
    console.log(users)  
    res.json(users)
    res.send('success')
  
  })
  
app.get("/users/:id", (req , res) => {
  
    console.log(req.params.id)
    const userId = req.params.id  
  
    res.json(users[userId])
    res.send(`We'll be sending you user ${req.params.id} shortly.`)

  })
  
app.delete("/users/:id", (req , res) => {
  
      console.log(req.params.id)
      const userId = req.params.id  
    
      res.json(users[userId])
      res.send(`We'll be deleting you user ${req.params.id}.`)
    })

    //module.exports(app)
    
    //why can't these two get along