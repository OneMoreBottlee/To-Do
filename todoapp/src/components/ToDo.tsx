import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState)
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name },
        } = event
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            const newToDo = { text, id, category: name as any }
            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)]
        })
    }
    const deleteClick = () => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            return [...oldToDos.slice(0, targetIndex), ...oldToDos.slice(targetIndex + 1)]
        })
    }

    return (
        <li>
            <span>{text}</span>
            {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>ToDo</button>}
            {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>Doing</button>}
            {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>Done</button>}
            {category !== Categories.DELETE && <button name={Categories.DELETE} onClick={deleteClick}>DEL</button>}
        </li>
    )
}

export default ToDo;