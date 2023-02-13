import {useDispatch, useSelector} from "react-redux"
import { add, minus,reset, todofailure, todosuccess } from "./Redux/action";
import "./App.css"
import axios from "axios";
import { useEffect } from "react";
import { store } from "./Redux/store";
import Todoinput from "./Redux/Todoinput";
function App() {
const todos=useSelector((state)=>state.todos)
const isLoding=useSelector((state)=>state.isLoding);
const isError=useSelector(store=>store.isLoding)  
// const count=useSelector((store)=>{;
  // // console.log(count);
  // return store.count;
  // });
  // console.log(count)
  const dispatch=useDispatch();
  const getTodo=()=>{
    axios.get("http://localhost:8080/todos").then((res)=>{
      // console.log(res);
      dispatch(todosuccess(res.data));
    }).catch(e=>{
      dispatch(todofailure());
    })
  }
  useEffect(()=>{
 getTodo();
},[]);
console.log("todos alla ka?",todos);
  return (
    <div className="App">
 <h1>todos</h1>
 <Todoinput/>
 {isLoding && <h2>Loading...</h2>}
 {isError && <h2>Error in Fetching details</h2> }
{todos.length > 0 && 
todos.map((item)=>{
  return <div key={item.id}>
    <div>{item.title} </div>
    <div>{item.status? "True":"False"} </div>
  </div>;
})}

    {/* <h1>count{count}</h1>
    <button onClick={()=>dispatch(minus(1))}>Reduce</button>
    <button onClick={()=>dispatch(add(1))}>Add</button>
    */}
     </div>
  );
}

export default App;
