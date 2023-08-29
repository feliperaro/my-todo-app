import { useState } from 'react'
import Todo from '../Todo'


const TodoList = () => {
    const [selectedTodo, setSelectedTodo] = useState<number>(0)
    const [todo, setTodo] = useState<string>("") 
    const [todos, setTodos] = useState<string[]>(["Buy Groceries", "Clean the house", "Walk the dog"])

    const checkTodos = (): boolean => {
        if (todos.length === 0) {
            return false
        }
        return true
    }

    const handleCreateTodo = (): void => {
        if (todo === "") {
            return
        } 
        setTodo("")
        setTodos([...todos, todo])
    }

    const handleInputTodo = (e: React.FormEvent<HTMLInputElement>): void => {
        setTodo(e.currentTarget.value);
    };

    const handleSelectTodo = (index:number): void => {
        setSelectedTodo((index + 1))
    }

    return (
        <>
            <h1>Todo List</h1>
            <ul className="list-group list-group-flush todo-list">
                {!checkTodos() && (
                    <span>Create your first todo!</span>
                )}
                {checkTodos() && todos.map((todo, index) => (
                    <Todo 
                        index={index}
                        text={todo}
                        handleTodo={() => handleSelectTodo(index)}
                    />
                ))}
            </ul>
            <br/>
            {selectedTodo !== 0 && (
                <span>Selected todo: {selectedTodo}</span>
            )}
            <br/>
            <br/>
            <div className="mb-3">
                <label className="form-label">ADD TODO</label>
                <input type="text" className="form-control" id="todoInput" aria-describedby="todo"
                    value={todo}
                    onChange={handleInputTodo}
                />
            </div>
            <button type="submit" className="btn btn-primary m-2" onClick={() => handleCreateTodo()}>Create</button>
        </>
    )
}

export default TodoList
