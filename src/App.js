import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import { auth } from './firebase';

function App() {
  const [globalUser, setGlobalUser] = useState(null);

  //funcioón que dectecta un cambio en la sesión y puede revisar si se cerro sesión o se inicio sesión
  onAuthStateChanged(auth, (currentUser) => { 
    
    if(currentUser){
      //codigo en caso de que haya inciado sesion
      setGlobalUser(currentUser);
    }else{
      //codigo en cas o de no haya iniciado sesion
      setGlobalUser(null);
    }

   });

  return (
    <>{ globalUser ? <Home emailUser = { globalUser.email }/> : <Login />}</>
  );
}

export default App;
