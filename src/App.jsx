import { useState } from 'react'
import './App.scss'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
