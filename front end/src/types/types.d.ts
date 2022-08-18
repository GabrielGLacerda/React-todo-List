export interface FormInput {
    _id: string
    text: string
}

export interface InterfaceContext {
    todos: FormInput[]
    setTodos: Dispatch<SetStateAction<FormInput>>
    createTodo: (valData: FormInput) => void
    updateTodo: (valData: FormInput) => void
    deleteTodo: (val: string) => void
}

export type Componentprops = {
    children: JSX.Element
}