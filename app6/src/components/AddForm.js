import React from 'react'
import { useState } from 'react';
import AddList from './buttonadd';
import AnimalInfo from '../pages/Datas'

function AddForm () {
  const [list, setList] = React.useState(AnimalInfo);
  const [species, setSpecies] = React.useState('');
  const [isHover, setIsHover] = useState(true);

  function handleChange(event) {
    setSpecies(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ species });
    setList(newList);
  }

  const handleMouseEnter = () => {
      setIsHover(true);
      
   };
  const handleMouseLeave = () => {
          console.log('ides')
          setIsHover(false);
        };
 
const background = {
        position: 'absolute',
        top: '0',
        left: '0',
        opacity:'0.5',
        height: '100%',
        width: '100%',
        backgroundColor: "grey",
        zIndex: "2",
        transition: 'opacity 1s',
        display: isHover ? 'none' : 'flex',
  }; 


const myStyle = {
        
        
        fontFamily:"Arial, Helvetica, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        
      };

const form = {
        
        position: "absolute",
        bottom: "30%",
        left: "15%",
        width: "60%",
        backgroundColor: "white",
        border:"1px solid gray",
        borderRadius: "5px",
        padding: "35px",
        zIndex: "3",
        display: isHover ? 'none' : 'inline',
      };

const button = {
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        backgroundColor: "DodgerBlue",
        borderRadius: "10px",
        padding: "0 25px",
        margin: "5px",
        border:"3px solid whitesmoke"
        
      };

  const button2 = {
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        backgroundColor: "red",
        borderRadius: "10px",
        padding: "0 25px",
        margin: "5px",
        border:"3px solid whitesmoke"
        
      };

    const input = {
      fontSize: '18px',
      color: 'grey',
      fontWeight:' bold',
      padding: '5px',  
      margin: '8px 0',
      boxSizing:'border-box',
      borderRadius: '2px',
      border: '2px solid #ccc',
      
      outline: 'none',
        
      };

  return (
    <>
    <div style={background}></div>
    <div style={form}>
        <div style={myStyle}>
          <h2>Upload animal</h2>
          <label>Animal name</label>
          <input type="text" style={input} value={species} onChange={handleChange}></input>
          <label>Animal weight</label>
          <input type="number" style={input}></input>
          <label>Animal height</label>
          <input type="number" style={input}></input>
          <label>Add text</label>
          <input type="text" style={input}></input>
        </div>
        <div style={{ display: "flex", alignItems: "center",justifyContent: "center",}}>
          <button style={button}
            onClick={handleAdd} 
          ><h2>Add</h2>
          </button>
          <button style={button2} 
            onClick={handleMouseEnter}
          ><h2>x</h2>
          </button>
        </div>
    </div>
    <AddList handleMouseLeave={handleMouseLeave}/> 
    </>
  )
}

export default AddForm