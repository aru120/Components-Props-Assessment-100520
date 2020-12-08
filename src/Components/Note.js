import React from 'react'


function Note(props) {
    
    return <li key={props.id}>{props.content}</li>
}

export default Note;