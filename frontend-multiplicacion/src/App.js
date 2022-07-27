 
import { useReducer } from 'react';
import './App.css';
import { ResultadoContext } from './context/ResultadoContext';
import { Home } from './pages/Home';

import {resultadoReducer} from "./reducer/resultadoReducer";

function App() {

  const [resul, dispatch] = useReducer(resultadoReducer, {})
 

  return (
   
    <ResultadoContext.Provider value={{resul, dispatch}}>
     <Home/>
    </ResultadoContext.Provider>
  );
  
}

export default App;
