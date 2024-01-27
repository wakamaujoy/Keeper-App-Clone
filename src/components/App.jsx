import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import React, {useState} from "react";

function App() {
  const [items, itemsArray]=useState([])


  function handleAdd(addedNote){
   itemsArray((prevValues)=>{
    return  [...prevValues,addedNote]
    })

  }

  function handleDelete(deletedNote){
    itemsArray((prevValues)=>{
      return prevValues.filter((item, index)=>{
        return index!==deletedNote
      })
    })

  }

  return (
    <div>
      <Header />
      <CreateArea addItem={handleAdd} />
     {items.map((eachItem, index)=>{
      return <Note 
      key={index} 
      id= {index} 
      title={eachItem.title} 
      content={eachItem.content} 
      deleteItem={handleDelete}

      />
      })}      
      <Footer />
    </div>
  );
}
 export default App;