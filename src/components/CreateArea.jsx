import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from "@mui/material";
import Nav from "./Nav";


function CreateArea(props) {
  const [note, setNote] = useState({title:"", content:""})
  const [isMouse, setisMouse]= useState(false)
  
   function handleChange(event){
   const {name, value} = event.target
    setNote((prev)=>{
      return {...prev, [name]:value}

    })
      }
  function onceClicked(event){
    props.addItem(note);
    setNote({title:"", content:""})
    event.preventDefault()
    setisMouse(false)
  }  
  
  function handleMouse(){
    setisMouse(true)
    
       }

  
  return (
    <div className="navside">
      <Nav/>
      {isMouse? 
      <form style={{height:"150px"}}className="create-note">     
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <Zoom in={true}>
        <Fab onClick={onceClicked}><AddIcon/></Fab>
        </Zoom>
      </form>
      :
      <form  style={{height:"50px"}} className="create-note">
      <textarea  onClick={handleMouse}  onChange={handleChange} name="content" placeholder="Take a note..." rows="1" value={note.content}/>
      </form>

     }
    </div>   
  );
}

export default CreateArea;
