/*eslint-disable react/prop-types*/

import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => {
    console.log(props)
    return <h1>Hello {props.text}</h1>
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
    <>
        <Title text="Jack" />
        <Title text="john" />
        <List />
    </>
)

ReactDOM.render(el, document.getElementById('root'))
