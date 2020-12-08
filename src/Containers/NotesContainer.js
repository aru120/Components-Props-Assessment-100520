import React from 'react';
import Note from '../Components/Note';


class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    
    render() {
        
        let renderNotes = this.apiResponse().map(response =>{
            return <Note content={response.content} id={response.id}/>
        })
        
        return (
            <ul>
               {renderNotes}
            </ul>
        )
    }

}

export default NotesContainer;

