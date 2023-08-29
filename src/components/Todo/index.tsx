interface TodoProps {
    index: number;
    text: string;
    handleTodo(index:number): void
}

export default function Todo (props: TodoProps) {
    const { index, text, handleTodo } = props
    return (
        <>
            <li key={index} className="list-group-item">
                <button onClick={() => handleTodo(index)}>{text}</button>
            </li>
        </>
    )
}
