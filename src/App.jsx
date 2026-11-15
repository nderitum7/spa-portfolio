import { useState } from 'react'
import Header from './components/header'
import ProjectContainer from './components/projectcontainer'


import './App.css'

//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Header/>
<ProjectContainer/>

  </div>
  )
}

export default App
