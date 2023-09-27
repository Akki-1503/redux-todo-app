const express = require('express')
const cors = require('cors')
const configureDB = require('./config/db')
const todosCltr = require('./app/controllers/todoController')
const app = express() 
const PORT = 3060
app.use(express.json())
app.use(cors())

configureDB()

app.get('/api/todos', todosCltr.listAll)
app.post('/api/todos/create', todosCltr.create)
app.delete('/api/todos/:id', todosCltr.delete)
app.put('/api/todos/:id', todosCltr.update)

app.listen(PORT, () => {
    console.log('server running on port', PORT)
})