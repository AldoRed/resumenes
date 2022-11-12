import { useMutation } from "@apollo/client";
import { useState } from "react";
import { addUserMutation } from "../queries/queries";

// Agrega un usuario: 
const AddUser =() =>{
    const [addTodo, { data, loading, error }] = useMutation(addUserMutation);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (error) return(<h1>error</h1>);
        if (loading) return(<h1>Loading ...</h1>);
        addTodo({
            variables: {
                username: username,
                password: password,
                email: email
            }
        })
        console.log(username, password, email);
    }

    return(
        <form id="add-user" onSubmit={handleSubmit}>
            <div className="field">
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="field">
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field">
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
            </div>
            <button>+</button>
        </form>
    )

}
export default AddUser;