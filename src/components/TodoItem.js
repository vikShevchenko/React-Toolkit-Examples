import React from 'react'

import { useDispatch } from 'react-redux'
import { toggleCompletedTodo, removeTodo } from '../features/todo/todoSlice'

const TodoItem = ({ todo }) => {

    const dispatch = useDispatch()

    const toggleHandler = (id) => {
        dispatch(toggleCompletedTodo(id))
    }

    const handlerRemove = (id) => {
        dispatch(removeTodo(id))

    }


    return (
        <div className='flex justify-between items-center my-2'>
            <div className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'
                onClick={() => toggleHandler(todo.id)}
            >
                Complete
            </div>
            <div className={`text-sm ${todo.completed ? 'line-through font-medium text-lime-400' : ''}`}>
                {todo.text}
            </div>
            <div className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'
                onClick={() => handlerRemove(todo.id)}
            >
                Delete
            </div>
        </div>
    )
}

export default TodoItem
