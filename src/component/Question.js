import React from 'react'
import Questions from './Questions'
import "../index.css"

function Question(props) {
    return (                 
         <div>
            <ul className="qlist">
                {props.list.map((item) => (
                    <li key={item}>
                        <Questions id={item} />
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Question
