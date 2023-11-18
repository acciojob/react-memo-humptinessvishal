import React from "react";
import ToDo from "./Todo";
import Counter from "./Counter";
import Memo from "./Memo";

const App = () =>{
    return(
       <div>
           <ToDo/>
           <Counter/>
           <Memo/>
       </div>
    )
}

export default App;