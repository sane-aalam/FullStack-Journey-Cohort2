import { useState } from "react";

const CreateTodo = (props) =>{
    const [title,setTitle] = useState("");
    const [discription,setDiscription] = useState("");
    return(
        <div>
           <input type="text" name="title" id="title"  placeholder="title" 
           onChange={function(e){
             const value = e.target.value;
             setTitle(value)
           }}/>
           <input type="text" name="discription" id="discription" placeholder="discription"
            onChange={function(e){
             const value = e.target.value;
             setDiscription(value)
           }}
           />
           <button onClick={()=>{
              // click add button insert into backend data, need to call backend.
              // axios fetch data
              fetch('http://localhost:5000/todo',{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    discription:discription
                }),
               headers: {
                "Content-Type": "application/json",
                },
              }).then(async function (res){
                const json = await res.json();
                alert("todo added!");
              })
           }}>
            add todo
           </button>
        </div>
    )
}

export default CreateTodo;