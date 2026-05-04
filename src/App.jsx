// // import { useState } from "react";
// // function App(){
// //   const[N,setN]=useState("")
// //   const[E,setE]=useState("")
// //   const[P,setP]=useState("")
// //   const[sub,setsub]=useState(false)
// //   return(
// //     <>
// //     <h1>Form</h1>
// //     <input type="text" placeholder="Enter name" name="" id="" onChange={(e)=>setN(e.target.value)}/>
// //     <input type="text" placeholder="ENter Email" name="" id="" onChange={(e)=>setE(e.target.value)} />
// //     <input type="text" placeholder="ENter contact" name="" id="" onChange={(e)=>setP(e.target.value)} />
// //     <button onClick={()=>setsub(true)}>Submit</button>

import { useEffect, useState } from "react"

// // import Greeting from "./greeting"

    
// //     {sub && (
// //       <div><h3>{N}</h3>
// //       <h3>{E}</h3>
// //       <h3>{P}</h3></div>)
// //     }
// //    </>
// //   )
// // }
// // export default App
// // import { useState } from "react";
// // function App(){
// //   const[time,settime]=useState(new Date())
// //   setInterval(()=>{
// // settime(new Date())
  
// //   },1000)
// //   const hr=time.getHours()
// //     const min=time.getMinutes()
// //       const sec=time.getSeconds()
// // return(
  
// //     <h3>{hr}:{min}:{sec}</h3>
// //   )
// // }
// // export default App
// ##################################################################################################################################

// import { useState } from "react";
// import Greeting from "./Greeting";

// function App() {
//   const [name,setname]=useState("")
//   const [Users,setUsers]=useState([])
//   const [Error,setError]=useState(null)
//   const [Loading,setLoading]=useState(true)
//   const [sub,setsub]=useState(false)
 
  
// useEffect(()=>{
//  const timer= setTimeout(() => {
    
//   const fetchdata=async()=>{
// try{const res=await fetch("https://jsonplaceholder.typicode.com/users");
    
// if (!res.ok){
//   throw new Error("failed to fetch")
// }
//     const dta=await res.json()
//     setUsers(dta)

//   }

//   catch(e){
//     setError(e.message)
//   }finally{
//     setLoading(false)
//   }};
//   fetchdata();
//   }, 2000);

// return ()=>{clearTimeout(timer)}


// },[])


// const userfilter=Users.filter((d)=>{return d.name.toLowerCase().includes(name.toLocaleLowerCase())})
//   return (
//     <>
//     <input type="text" name="" id="" value={name} placeholder="Enter name u want" onChange={(e)=>setname(e.target.value)}/>
//     <button onClick={()=>setsub(true)}>Submit</button>
//     <p>{sub && userfilter.length}</p>
//     {Error&&  <p>Error</p>}
//     {Loading && <p>loading</p>}
//       {sub && userfilter.map((user) => (
        
//         <Greeting 
//           key={user.id}   
//           name={user.name}
//           id={user.id}
//         />
//       ))}
//     </>
//   );
// }

// export default App;
// #################################################################################################
// function App(){
//   const[inp,setinp]=useState("")
//   const handleclick=(value)=>{
//     setinp(inp+value)
//   }
//   const handleclear=()=>{
//     setinp("")
//   }
//   const handleequal=()=>{
  
//   try{
// setinp(eval(inp))
//   }  
//   catch{
//     setinp("error")
//   }
//   }
//   return(
//     <>
//     <div><input type="text" name="" id="" value={inp} /></div>
//     <div><button onClick={()=>handleclick("1")}>1
//       </button>
//       <button onClick={()=>handleclick("2")}>2</button>
//       <button onClick={()=>handleclick("3")}>3</button>
//       <button onClick={()=>handleclick("4")}>4</button>
//       </div>
      
//     <div><button onClick={()=>handleclick("5")}>5
//       </button>
//       <button onClick={()=>handleclick("6")}>6</button>
//       <button onClick={()=>handleclick("7")}>7</button>
//       <button onClick={()=>handleclick("8")}>8</button>
//       </div>
      
//     <div><button onClick={()=>handleclick("9")}>9
//       </button>
//       <button onClick={()=>handleclick("0")}>0</button>
//       <button onClick={()=>handleclick("+")}>+</button>
//       <button onClick={()=>handleclick("-")}>-</button>
//       </div>
      
//     <div><button onClick={()=>handleclick("/")}>/
//       </button>
//       <button onClick={()=>handleclear()}>C</button>
//       <button onClick={()=>handleclick("*")}>*</button>
//       <button onClick={()=>handleequal()}>=</button>
//       </div>
//       </>
//   )
// }
// export default App
//########################################################################
function App(){
  const [msg,setmsg]=useState([])
  const [singlemsg,setsinglemsg]=useState("")
  const [loading,setLoading]=useState(true)
  setInterval(() => {
    setLoading(false)
  }, 10000);
  const handle=()=>{
    setmsg([...msg,singlemsg])
  setsinglemsg("")
  
  }
  const hadnledelete=(index)=>{
    setmsg(msg.filter((m,i)=>{return i!==index}))
  }
  return(
    <>

{loading && <p>Loading</p>  }
    <input type="text" name="" id=""  placeholder="Enter your task" value={singlemsg} onChange={(e)=>{setsinglemsg(e.target.value)}}/>
     <button onClick={handle}>add</button>
    {!loading && msg.map((m,index)=>{
      return <div><p key={index}>{m}</p> <button onClick={()=>  hadnledelete(index)}>delete</button></div>
    })}
    </>
  )
}
export default App