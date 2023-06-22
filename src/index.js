import React from 'react'
import ReactDOM from 'react-dom'

const Title = () => {
    return <h1>Hello World</h1>
}

const List = () => {
    return (
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    )
}

const el = (
    <div>
        <Title />
        <List />
    </div>
)

ReactDOM.render(el, document.getElementById('root'))
