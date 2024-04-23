import './App.css'
import data from "./data"
import {  useState  } from "react";

function App() {
  const[selected, setSelected] = useState(null)
  function handleSingleSelection(getCurrentId){
    console.log(getCurrentId)
    setSelected(getCurrentId === selected? null :getCurrentId)
    console.log(selected)
    
  }


  
  return (
    <>
      <div className='accordion'>
        <button>Enable Multiple Selection</button>
        {
          data&&data.length >0?
          data.map(dataItem =><div className='item' key={dataItem.id}>
            <div className='title' onClick={()=>{handleSingleSelection(dataItem.id)}}>
            <h3>{dataItem.question}</h3>
            {/* <span>{selected.includes(dataItem.id) ? '-' : '+'}</span> */}
            <span>+</span>
            </div>
            {
              selected === dataItem.id? <div className='content'> {dataItem.answer}</div>  :null
            }
          </div>
          )
          :<div>No data found !</div> 
        }
      </div>
    </>
  )
}

export default App
