import { createContext, useState } from 'react'

const TodoContext = createContext() 

export const TodoProvider = ({ children }) => { 

    const [todos, setTodos] = useState([])
    const [inputText, setInputText] = useState('')

    const handleChange = (e) => {
        setInputText(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('todos', JSON.stringify([...todos, { text: inputText }]))
        setTodos([...todos, { text: inputText }])
        setInputText('')

    }

    const removeTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        localStorage.setItem('todos', JSON.stringify(newTodos))
        setTodos(newTodos)

    }

    return (
        <TodoContext.Provider value={{ todos, setTodos, inputText, setInputText, handleSubmit, removeTodo, handleChange }}>
            {children}
        </TodoContext.Provider>
    )



}

export default TodoContext