import { useState } from "react"

export const Counter= () => {
const[count,setcount]=useState(0);
  return (
 <div>
    <br/>
    Counter
    <br/>
    <br/>
<button onClick={()=>setcount(count-1)}>decrement(-)</button> 
<span>{'   '+count+"    "}</span> 
<button onClick={()=>setcount(count+1)}>increment(+)</button>

    </div>
  )
}
