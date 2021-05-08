import React from 'react'

export default function ButtonContrl (props) {
    const handlerClickBtn = (e) => {
        const value = e.target.value
        switch (value) {
            case 'Удалить':
            props.remove()
            break
            case 'Выполнить':
            props.done()
            // console.log(props.todos);
            break
            default:
                return
        }
        
    }

    return ['Удалить', 'Выполнить']
            .map((btn, i) => 
                <button
                    className={"btn"}
                    key={i}
                    value={btn}
                    onClick={handlerClickBtn}>{btn}</button>)
}