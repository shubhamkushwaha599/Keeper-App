import React, {useState} from "react";

function CreateArea(props) {
  const [note, setNotes] = useState({
    title : "",
    content : ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setNotes( preNotes =>{
      return {
        ...preNotes,
        [name] : value
      }
    });
  }

  function submitNotes(event){
    props.onAdd(note);
    setNotes(
      {
        title : "",
        content : ""
      }
    );
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input onChange = {handleChange} 
        name="title"
        value = {note.title} 
        placeholder="Title" />

        <textarea onChange = {handleChange} 
        name="content" 
        value = {note.content}
        placeholder="Take a note..." rows="3" />
        <button  onClick = {submitNotes}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
