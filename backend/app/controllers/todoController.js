const Todo = require('../models/todo')
const todosCltr = {}

todosCltr.show = async (req, res)=> {
    const id = req.params
    try{
        await Todo.findById(id)
        res.json(todo)
    }catch(e) {
        res.json(e)
    }
}

todosCltr.listAll = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (e) {
        res.json(e)
    }
}

todosCltr.create = async (req, res) => {
    const {body} = req
    const todo = new Todo(body)
    try {
        await todo.save()
        res.json(todo)
    } catch (e) {
        res.json(e)
    }
}

todosCltr.update = async(req,res) => {
    const {id} = req.params
    const {body} = req
    try {
        const todo = await Todo.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        res.json(todo)
    }catch(e) {
        res,json(e)
    }
}

todosCltr.delete = async(req, res) => {
    const {id} = req.params
    try {
        const todo = await Todo.findByIdAndDelete(id)
        res.json(todo)
    }catch(e) {
        res.json(e)
    }
}

module.exports = todosCltr