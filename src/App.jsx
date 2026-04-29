// import { useState } from "react";
// function App(){
//   const[N,setN]=useState("")
//   const[E,setE]=useState("")
//   const[P,setP]=useState("")
//   const[sub,setsub]=useState(false)
//   return(
//     <>
//     <h1>Form</h1>
//     <input type="text" placeholder="Enter name" name="" id="" onChange={(e)=>setN(e.target.value)}/>
//     <input type="text" placeholder="ENter Email" name="" id="" onChange={(e)=>setE(e.target.value)} />
//     <input type="text" placeholder="ENter contact" name="" id="" onChange={(e)=>setP(e.target.value)} />
//     <button onClick={()=>setsub(true)}>Submit</button>
    
//     {sub && (
//       <div><h3>{N}</h3>
//       <h3>{E}</h3>
//       <h3>{P}</h3></div>)
//     }
//    </>
//   )
// }
// export default App
import { useState } from "react";
function App(){
  const[time,settime]=useState(new Date())
  setInterval(()=>{
settime(new Date())
  
  },1000)
  const hr=time.getHours()
    const min=time.getMinutes()
      const sec=time.getSeconds()
return(
  
    <h3>{hr}:{min}:{sec}</h3>
  )
}
export default App