import './App.css'
import data from "./data"
import {  useState  } from "react";

function App() {
  const[selected, setSelected] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])


  function handleSingleSelection(getCurrentId){
    setSelected(getCurrentId === selected? null :getCurrentId) 
    console.log(getCurrentId) 
  }

  function handleMultiSelection(getCurrentId){
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)

    console.log(findIndexOfCurrentId)
    if(findIndexOfCurrentId === -1){
      copyMultiple.push(getCurrentId)
    }
    else{
      copyMultiple.splice(findIndexOfCurrentId, 1)
    }
    setMultiple(copyMultiple)
  }


  
  return (
    <>
      <div className='accordion'>
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multiple Selection</button>
        {
          data&&data.length >0?
          data.map(dataItem =><div className='item' key={dataItem.id}>
            <div className='title' 
            onClick=
            {enableMultiSelection
            ?()=>handleMultiSelection(dataItem.id)
            :()=>{handleSingleSelection(dataItem.id)}}>
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
