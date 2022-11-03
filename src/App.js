import './App.css';
import {useState} from 'react' 
import Counter from './components/counter';
function App() {
  const [count, setCount ] = useState(0)

  return (
    
    <>
      <div className="App">
      <Counter count = {count}/>
      <div className="buttongrp">
      <button onClick = {
        () => {
          setCount(count+1);
          console.log(count)
        }

      }>Increment</button>
      <button onClick = {
        () => {
          setCount(count-1);
          console.log(count)
        }

      }>Decrement</button>
      </div>
    
      
    </div>
    </>
  );
}

export default App;
