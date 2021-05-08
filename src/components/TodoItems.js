import React from 'react';

export default function TodoItem(props) {
    return (
        <ul className='list'>
            {
                props.todos.map(item => (
                        <li
                            className={item.isDone ? 'list__item--done' : 'list__item'}
                            key={item.id}
                        >
                            <input 
                                className={''}
                                type="checkbox"
                                checked={item.isSelected}
                                onChange={({target})=>props.selectedTodo(item.id)}
                            />
                            {item.value}
                        </li>
                    ))
            }
        </ul>
    )
}