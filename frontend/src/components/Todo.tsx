import React, { useCallback, useContext, useEffect, useState } from 'react'
import api from '../services/configApi'
import { FormInput } from '../types/types'
import { TodoContext } from '../providers/TodoProvider'
import Isloading from './Isloading'
import TodoList from './TodoList'

function Todo() {

  const { todos, setTodos } = useContext(TodoContext)
  const [loading, setLoading] = useState(false)

  const getTodos = useCallback(async () => {
    setLoading(true)
    const {data} = await api.get<FormInput[]>('/todos')
    setTodos(data)
    setLoading(false)
  }, [])


  useEffect(() => {getTodos()}, [])

  return (
    <ul>
      {todos?.map(todo => (<TodoList key={todo._id} text={todo.text} _id={todo._id}/>))}
      {loading && <Isloading />}
    </ul>
  )
}

export default Todo