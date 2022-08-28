import React, { useState } from 'react'
import axios from 'axios';

export default function Login() {

    const [error, setError] =useState(false);
    const [username, setUsername]= useState("");
    const [password, setPassword] = useState('');
    const [user, setUser] =useState([]);
    const [loading, setLoading] = useState(false);
    

    const handelClick = async (e) =>{
         e.preventDefault();
         setLoading(true);
        try {
         const res= await axios.get('https://jsonplaceholder.typicode.com/users/1');
         setUser(res.data);

        } catch  {
            setError(true);
        }
      setLoading(false);
    
    }

  return (
    <div>
        <h2>Testing Login Components</h2>
        {user && <p>{user.username} </p>}
        <div className="main">
                 <form>
                     <div className="form-control"> 
                       <input type="text" placeholder="username" value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                       />
                     </div>

                     <div className="form-control"> 
                       <input type="password" placeholder="password" value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                       />
                       
                     </div>

                     <div className="form-control"> 
                       <button type="button" 
                       disabled={!username || !password}
                       onClick={(e)=>handelClick(e)}
                       >
                         {loading ? 'please wait...': 'Submit' }
                           
                            </button>
                     </div>

                 </form>

                 <div>
                       <span className="error" data-testid="login-error" style={{visibility: error? 'visble':'hidden'}}>  Something went wrong !!</span>
                 </div>
        </div>
        
    </div>
  )
}
