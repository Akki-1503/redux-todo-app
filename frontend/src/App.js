import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { startGetTodos } from './actions/todoActions'
import TodoList from './components/todoList'
import NewTodoForm from './components/newTodoForm'
const App = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetTodos())
  }, [dispatch])

  return (
    <div>
      <h2>Todo App</h2>
      <TodoList /> 
      <NewTodoForm />
    </div>
  )
}

export default App 