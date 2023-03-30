import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
      <Header></Header>
     <Home></Home>
    </div>
  )
}

export default App
