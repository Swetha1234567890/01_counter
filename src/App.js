import {useState} from 'react'
import './App.css';

function App() {
  let [counter, setCounter] = useState(0)

  const onIncrease = () => {
    if (counter >= 0) {
      setCounter(counter + 1)
    }
  }

  const onDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className='container'>
      <h1>Counter App</h1>
      <p className='counter'>Counter: {counter}</p>
      <button className='button' onClick={onIncrease}>Add Value</button>
      <button className='button' onClick={onDecrease}>Remove Value</button>
    </div>
  )
}

export default App;
