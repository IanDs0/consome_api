import React, {useState} from 'react';

function App() {
  
  const [produto,setProduto] = useState();
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');


  const handleChangeUsername = event => {
    setUsername(event.target.value);
  };
  const handleChangePassword = event => {
    setPassword(event.target.value);
  };
  
  return (
    <div>

        <h6>Username</h6>
        <input type="text" onChange={handleChangeUsername} value={Username}/>
        
        <h6>Password</h6>
        <input type="password" onChange={handleChangePassword} value={Password}/>

        <br></br>

        <button onClick={() => console.log("Username: "+Username+"\nPassword: "+Password)}>Login</button>
        
    </div>
  );
}

export default App;
