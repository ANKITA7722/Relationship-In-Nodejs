import { useState } from "react";
import axios from "axios";
const Insert=()=>{
  const [input, setInput] = useState({});

  const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
  }

  const handleSubmit=()=>{
    let api="http://localhost:8080/employee/usersave";
    axios.post(api, input).then((res)=>{
        console.log(res);
        alert("Data save!!!");
    })
  }

    return(
        <>
          <h1> Insert Page</h1>
          Enter Username : <input type="text" name="username"
           value={input.username} onChange={handleInput} />
          <br/>
          Enter Email : <input type="text"  name="email"
           value={input.email} onChange={handleInput} />
          <br/>
          Enter First name : <input type="text"  name="fname"
           value={input.fname} onChange={handleInput} />
          <br/>
          Enter Second name : <input type="text"  name="sname"
           value={input.sname} onChange={handleInput} />
          <br/>
          <button onClick={handleSubmit}> Click </button>
        </>
    )
}

export default Insert;