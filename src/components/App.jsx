import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const[notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNote => {
      return [...prevNote, newNote]
    })
  }
  function deleteNote(id){
    setNotes(prevNote =>{
      return prevNote.filter((singleNote, index) => {
        return index !== id
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote}/>
      {notes.map((singleNote, index) => {
        return (
          <Note
            title={singleNote.title}
            content={singleNote.content}
            key={index}
            id={index}
            onDelete={deleteNote}
         />)
      })}
      <Footer />
    </div>
  );
}

export default App;
