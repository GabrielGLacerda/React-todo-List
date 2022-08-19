import React, { useState, createContext } from 'react'
import { FormInput, InterfaceContext, Componentprops } from '../types/types'
import api from '../services/configApi'

export const TodoContext = createContext({} as InterfaceContext)

export function TodoProvider(props: Componentprops) {

  const [todos, setTodos] = useState<FormInput[]>([])

  const createTodo = async (data: FormInput) => {
    const todo = {
      _id: data._id,
      text: data.text
    }
    await api.post<FormInput[]>('/todos', todo)
    setTodos([...todos, todo])
  }

  const updateTodo = async (data: FormInput) => { 
    const todo = {
      _id: data._id,
      text: data.text
    }
    await api.patch<FormInput[]>(`/todos/${todo._id}`, todo)
    // setTodos(todos.map(todo => ))
   }

   const deleteTodo = (id: string) => {
    api.delete<FormInput[]>(`/todos/${id}`) 
    setTodos(todos.filter(todo => todo._id != id)) 
  }

  return (
    <TodoContext.Provider value={{todos, setTodos, createTodo,updateTodo, deleteTodo}}>
        {props.children}
    </TodoContext.Provider>
  )
}

