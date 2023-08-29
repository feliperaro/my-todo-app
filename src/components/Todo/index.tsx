interface TodoProps {
    index: number;
    text: string;
    selectedTodo: number;
    handleTodo(index:number): void
}

export default function Todo (props: TodoProps) {
    const { index, text, selectedTodo, handleTodo } = props
    
    const isTodoActive: boolean = selectedTodo === (index + 1);

    return (
        <>
            <li key={index} className={isTodoActive ? "list-group-item active" : "list-group-item"}>
                <button onClick={() => handleTodo(index)}>{text}</button>
            </li>
        </>
    )
}
