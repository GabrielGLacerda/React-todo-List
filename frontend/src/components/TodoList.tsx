import React, { useContext } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FormInput } from '../types/types'
import EditForm from './EditForm'
import { Button } from './styles/Button.styled'
import { TodoContext } from '../providers/TodoProvider'

function TodoList(props: FormInput) {
  const { deleteTodo } = useContext(TodoContext)

  return (
    <div>
      <li>
        {props.text} 
        <EditForm dataInput={props}/>                  
        <Button onClick={() => deleteTodo(props._id)} ><AiOutlineDelete /> </Button>
      </li>
    </div>
  )
}

export default TodoList
